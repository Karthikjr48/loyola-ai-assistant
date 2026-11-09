// ============================================================
// Loyola AI Assistant - AI Provider
// ============================================================
// Unified AI response provider that routes queries to:
//   • Offline mode  → local SearchEngine (knowledge base)
//   • Gemini mode   → Google Gemini API  (with auto-retry)
//   • OpenAI mode   → OpenAI ChatCompletion API
// Both API modes fall back to offline on error.
// ============================================================

class AIProvider {
    constructor() {
        // Initialise the local search engine (always available)
        this.searchEngine = new SearchEngine();

        // Detect active provider from CONFIG
        this.mode = (CONFIG.API_PROVIDER || 'offline').toLowerCase();

        // Conversation history for API-based modes
        this.conversationHistory = [];

        console.log(`[AIProvider] Initialised in "${this.mode}" mode.`);
    }

    // ─────────────────────────────────────────────────────────
    // GET RESPONSE  (main entry point)
    // ─────────────────────────────────────────────────────────
    async getResponse(query) {
        if (!query || typeof query !== 'string' || query.trim().length === 0) {
            return {
                answer: 'Please type a question about Loyola College, Chennai.',
                category: 'fallback',
                suggestions: KNOWLEDGE_BASE.fallback.suggestions,
                source: 'system'
            };
        }

        const trimmedQuery = query.trim();

        switch (this.mode) {
            case 'gemini':
                return await this.getGeminiResponse(trimmedQuery);
            case 'openai':
                return await this.getOpenAIResponse(trimmedQuery);
            case 'offline':
            default:
                return this.getOfflineResponse(trimmedQuery);
        }
    }

    // ─────────────────────────────────────────────────────────
    // OFFLINE RESPONSE  (knowledge-base only)
    // ─────────────────────────────────────────────────────────
    getOfflineResponse(query) {
        const result = this.searchEngine.search(query);
        return {
            answer: result.answer,
            category: result.category,
            suggestions: result.suggestions || [],
            source: 'offline'
        };
    }

    // ─────────────────────────────────────────────────────────
    // GEMINI RESPONSE  (with retry-backoff on rate limits)
    // ─────────────────────────────────────────────────────────
    async getGeminiResponse(query) {
        try {
            // ── Local Guardrail ────────────────────────────────
            if (this.searchEngine.isNonLoyolaQuery(query)) {
                return {
                    answer: KNOWLEDGE_BASE.rejection.message,
                    category: 'rejection',
                    suggestions: KNOWLEDGE_BASE.rejection.suggestions,
                    source: 'local-guardrail'
                };
            }

            // ── Validate API Key ───────────────────────────────
            if (!CONFIG.API_KEY) {
                console.warn('[AIProvider] No API key — falling back to offline.');
                return this.getOfflineResponse(query);
            }

            // ── Build Request ──────────────────────────────────
            const url = `${CONFIG.GEMINI_API_URL}/${CONFIG.GEMINI_MODEL}:generateContent?key=${CONFIG.API_KEY}`;

            this.conversationHistory.push({ role: 'user', parts: [{ text: query }] });
            if (this.conversationHistory.length > CONFIG.MAX_HISTORY) {
                this.conversationHistory = this.conversationHistory.slice(-CONFIG.MAX_HISTORY);
            }

            const requestBody = {
                system_instruction: { parts: [{ text: CONFIG.SYSTEM_PROMPT }] },
                contents: this.conversationHistory,
                generationConfig: {
                    temperature: 0.7,
                    topP: 0.9,
                    topK: 40,
                    maxOutputTokens: 1024
                },
                safetySettings: [
                    { category: 'HARM_CATEGORY_HARASSMENT',        threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                    { category: 'HARM_CATEGORY_HATE_SPEECH',       threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                    { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
                    { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' }
                ]
            };

            // ── Retry Loop (up to 3 attempts on 429) ──────────
            const MAX_RETRIES = 3;
            const BASE_DELAY  = 3000; // 3 s

            for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
                console.log(`[AIProvider] Gemini attempt ${attempt}/${MAX_RETRIES}…`);

                const response = await fetch(url, {
                    method:  'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body:    JSON.stringify(requestBody)
                });

                // Rate-limited — wait and retry
                if (response.status === 429) {
                    const delay = BASE_DELAY * attempt;
                    console.warn(`[AIProvider] 429 rate limit. Waiting ${delay}ms…`);
                    if (attempt < MAX_RETRIES) {
                        await new Promise(r => setTimeout(r, delay));
                        continue;
                    } else {
                        throw new Error('Rate limit exceeded after all retries');
                    }
                }

                if (!response.ok) {
                    const err = await response.json().catch(() => ({}));
                    console.error('[AIProvider] Gemini error:', response.status, err);
                    throw new Error(`Gemini API ${response.status}`);
                }

                const data = await response.json();
                const generatedText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

                if (!generatedText) {
                    console.warn('[AIProvider] Empty Gemini response — offline fallback.');
                    return this.getOfflineResponse(query);
                }

                // Save model reply to history
                this.conversationHistory.push({ role: 'model', parts: [{ text: generatedText }] });

                // Generate suggestions via local engine
                const localResult = this.searchEngine.search(query);

                return {
                    answer:      generatedText,
                    category:    localResult.category || 'ai',
                    suggestions: localResult.suggestions || [],
                    source:      'gemini'
                };
            }

        } catch (error) {
            console.error('[AIProvider] Gemini failed:', error.message);
            console.info('[AIProvider] Falling back to offline mode.');
            return this.getOfflineResponse(query);
        }
    }

    // ─────────────────────────────────────────────────────────
    // OPENAI RESPONSE
    // ─────────────────────────────────────────────────────────
    async getOpenAIResponse(query) {
        try {
            if (this.searchEngine.isNonLoyolaQuery(query)) {
                return {
                    answer: KNOWLEDGE_BASE.rejection.message,
                    category: 'rejection',
                    suggestions: KNOWLEDGE_BASE.rejection.suggestions,
                    source: 'local-guardrail'
                };
            }

            if (!CONFIG.API_KEY) {
                console.warn('[AIProvider] No API key — falling back to offline.');
                return this.getOfflineResponse(query);
            }

            const messages = [{ role: 'system', content: CONFIG.SYSTEM_PROMPT }];

            for (const entry of this.conversationHistory) {
                const role    = entry.role === 'model' ? 'assistant' : entry.role;
                const content = entry.parts?.[0]?.text || entry.content || '';
                if (content) messages.push({ role, content });
            }

            messages.push({ role: 'user', content: query });

            if (messages.length > CONFIG.MAX_HISTORY + 1) {
                const sys    = messages[0];
                const recent = messages.slice(-CONFIG.MAX_HISTORY);
                messages.length = 0;
                messages.push(sys, ...recent);
            }

            const response = await fetch(CONFIG.OPENAI_API_URL, {
                method:  'POST',
                headers: {
                    'Content-Type':  'application/json',
                    'Authorization': `Bearer ${CONFIG.API_KEY}`
                },
                body: JSON.stringify({
                    model:             CONFIG.OPENAI_MODEL,
                    messages,
                    temperature:       0.7,
                    max_tokens:        1024,
                    top_p:             0.9,
                    frequency_penalty: 0,
                    presence_penalty:  0
                })
            });

            if (!response.ok) {
                const err = await response.json().catch(() => ({}));
                console.error('[AIProvider] OpenAI error:', response.status, err);
                throw new Error(`OpenAI API ${response.status}`);
            }

            const data = await response.json();
            const generatedText = data?.choices?.[0]?.message?.content;

            if (!generatedText) {
                return this.getOfflineResponse(query);
            }

            this.conversationHistory.push({ role: 'user',  parts: [{ text: query }] });
            this.conversationHistory.push({ role: 'model', parts: [{ text: generatedText }] });

            if (this.conversationHistory.length > CONFIG.MAX_HISTORY) {
                this.conversationHistory = this.conversationHistory.slice(-CONFIG.MAX_HISTORY);
            }

            const localResult = this.searchEngine.search(query);

            return {
                answer:      generatedText,
                category:    localResult.category || 'ai',
                suggestions: localResult.suggestions || [],
                source:      'openai'
            };

        } catch (error) {
            console.error('[AIProvider] OpenAI failed:', error.message);
            return this.getOfflineResponse(query);
        }
    }

    // ─────────────────────────────────────────────────────────
    // UTILITIES
    // ─────────────────────────────────────────────────────────
    clearHistory() {
        this.conversationHistory = [];
        console.log('[AIProvider] Conversation history cleared.');
    }

    getModeDisplayName() {
        switch (this.mode) {
            case 'gemini':  return 'Google Gemini';
            case 'openai':  return 'OpenAI';
            case 'offline': return 'Offline (Knowledge Base)';
            default:        return 'Unknown';
        }
    }

    setMode(newMode) {
        const valid      = ['offline', 'gemini', 'openai'];
        const normalised = (newMode || 'offline').toLowerCase();
        if (valid.includes(normalised)) {
            this.mode = normalised;
            this.clearHistory();
            console.log(`[AIProvider] Mode → "${normalised}".`);
        } else {
            console.warn(`[AIProvider] Invalid mode "${newMode}".`);
        }
    }
}

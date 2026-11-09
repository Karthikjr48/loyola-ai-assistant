// ============================================================
// Loyola AI Assistant - Search Engine
// ============================================================
// Fuzzy keyword-matching search engine that queries the local
// knowledge base. Handles synonym expansion, stop-word removal,
// scoring with bonuses, and non-Loyola query rejection.
// ============================================================

class SearchEngine {
    constructor() {
        // ── Stop Words ────────────────────────────────────────
        // Common words removed during tokenisation to improve
        // search relevance and reduce noise.
        this.stopWords = new Set([
            'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
            'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
            'should', 'may', 'might', 'shall', 'can', 'need', 'dare', 'ought',
            'used', 'to', 'of', 'in', 'for', 'on', 'with', 'at', 'by', 'from',
            'as', 'into', 'through', 'during', 'before', 'after', 'above', 'below',
            'between', 'out', 'off', 'over', 'under', 'again', 'further', 'then',
            'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'each',
            'every', 'both', 'few', 'more', 'most', 'other', 'some', 'such', 'no',
            'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very',
            'just', 'because', 'but', 'and', 'or', 'if', 'while', 'although',
            'about', 'up', 'down', 'it', 'its', 'i', 'me', 'my', 'we', 'our',
            'you', 'your', 'he', 'she', 'they', 'them', 'their', 'this', 'that',
            'these', 'those', 'am', 'what', 'which', 'who', 'whom', 'whose',
            'also', 'any', 'many', 'much', 'please', 'tell', 'know', 'want',
            'like', 'get', 'give', 'make', 'thing', 'things', 'say', 'said',
            'really', 'quite', 'okay', 'ok', 'yes', 'yeah'
        ]);

        // ── Synonym Map ──────────────────────────────────────
        // Maps common user terms to canonical keywords used in
        // the knowledge base for broader matching.
        this.synonyms = {
            'fee':          ['fees', 'cost', 'tuition', 'charges', 'price', 'amount', 'payment', 'expensive', 'affordable'],
            'fees':         ['fee', 'cost', 'tuition', 'charges', 'price', 'amount', 'payment'],
            'cost':         ['fee', 'fees', 'tuition', 'charges', 'price', 'amount', 'payment'],
            'tuition':      ['fee', 'fees', 'cost', 'charges', 'price'],
            'hostel':       ['accommodation', 'dorm', 'dormitory', 'residence', 'boarding', 'lodging', 'stay', 'room'],
            'accommodation':['hostel', 'dorm', 'dormitory', 'residence', 'boarding', 'lodging', 'stay'],
            'dorm':         ['hostel', 'accommodation', 'dormitory', 'residence'],
            'course':       ['program', 'degree', 'subject', 'department', 'major', 'study', 'stream'],
            'courses':      ['programs', 'degrees', 'subjects', 'departments', 'majors', 'studies'],
            'program':      ['course', 'degree', 'subject', 'department', 'study'],
            'programs':     ['courses', 'degrees', 'subjects', 'departments'],
            'degree':       ['course', 'program', 'qualification'],
            'admission':    ['apply', 'enrollment', 'enrolment', 'registration', 'join', 'enroll', 'application', 'admissions', 'entry'],
            'admissions':   ['admission', 'apply', 'enrollment', 'registration', 'application'],
            'apply':        ['admission', 'admissions', 'application', 'enroll', 'register', 'join'],
            'placement':    ['job', 'career', 'recruit', 'recruitment', 'hire', 'hiring', 'employ', 'employment', 'company'],
            'placements':   ['jobs', 'careers', 'recruitment', 'hiring', 'employment', 'companies'],
            'job':          ['placement', 'career', 'employment', 'work', 'recruit'],
            'jobs':         ['placements', 'careers', 'employment', 'recruitment'],
            'career':       ['placement', 'job', 'employment', 'recruit'],
            'scholarship':  ['financial', 'aid', 'grant', 'fund', 'concession', 'waiver', 'bursary'],
            'scholarships': ['financial', 'aid', 'grants', 'funds', 'concessions'],
            'financial':    ['scholarship', 'fee', 'fund', 'aid', 'money'],
            'exam':         ['examination', 'test', 'assessment', 'semester', 'result'],
            'exams':        ['examinations', 'tests', 'assessments', 'results'],
            'examination':  ['exam', 'test', 'assessment', 'semester'],
            'result':       ['results', 'marks', 'grade', 'score', 'outcome'],
            'results':      ['result', 'marks', 'grades', 'scores'],
            'contact':      ['phone', 'email', 'address', 'call', 'reach', 'number', 'helpline'],
            'phone':        ['contact', 'call', 'number', 'telephone', 'mobile'],
            'email':        ['contact', 'mail', 'address', 'write'],
            'address':      ['location', 'where', 'place', 'situated', 'map', 'directions'],
            'location':     ['address', 'where', 'place', 'situated', 'campus'],
            'library':      ['books', 'reading', 'opac', 'catalogue', 'study', 'resource'],
            'sports':       ['games', 'athletic', 'fitness', 'gymnasium', 'ground', 'physical', 'education'],
            'club':         ['clubs', 'association', 'society', 'group', 'activity'],
            'clubs':        ['club', 'associations', 'societies', 'groups', 'activities'],
            'research':     ['phd', 'project', 'publication', 'journal', 'paper', 'scholar', 'innovation'],
            'phd':          ['research', 'doctoral', 'doctor', 'thesis', 'dissertation'],
            'alumni':       ['alumnus', 'alumna', 'old', 'former', 'graduate', 'ex-student', 'laa'],
            'exchange':     ['abroad', 'international', 'foreign', 'semester', 'france', 'belgium'],
            'principal':    ['head', 'leader', 'director', 'administration', 'rector'],
            'ranking':      ['rank', 'nirf', 'rated', 'top', 'best', 'accreditation'],
            'history':      ['founded', 'established', 'origin', 'background', 'year', 'started'],
            'founded':      ['history', 'established', 'origin', 'started', 'year', '1925'],
            'ias':          ['upsc', 'civil', 'services', 'competitive', 'coaching'],
            'radio':        ['fm', '107.4', 'broadcast', 'station', 'community'],
            'counselling':  ['counseling', 'mental', 'health', 'psychology', 'support', 'guidance'],
            'ragging':      ['anti-ragging', 'harassment', 'bullying', 'safety', 'complaint'],
            'wes':          ['iqas', 'verification', 'transcript', 'abroad', 'international'],
        };

        // ── Non-Loyola keywords ──────────────────────────────
        // Queries containing these AND having low Loyola relevance
        // trigger rejection.
        this.nonLoyolaKeywords = new Set([
            'code', 'coding', 'programming', 'recipe', 'cook', 'cooking', 'food recipe',
            'president', 'prime minister', 'capital', 'country', 'countries',
            'weather', 'temperature', 'forecast', 'climate',
            'movie', 'movies', 'film', 'films', 'bollywood', 'hollywood', 'netflix',
            'cricket', 'ipl', 'fifa', 'worldcup', 'sports team', 'match score',
            'politics', 'election', 'voting', 'parliament', 'congress', 'bjp',
            'python', 'java', 'javascript', 'html', 'css', 'react', 'angular', 'node',
            'stock', 'market', 'share', 'crypto', 'bitcoin', 'ethereum', 'trading',
            'song', 'songs', 'music', 'lyrics', 'singer', 'album',
            'game', 'gaming', 'fortnite', 'minecraft', 'pubg', 'valorant',
            'diet', 'weight loss', 'gym workout', 'fitness routine',
            'travel', 'flight', 'hotel booking', 'tourism', 'vacation',
            'car', 'bike', 'automobile', 'vehicle',
            'iphone', 'android', 'samsung', 'laptop', 'gadget', 'smartphone',
            'relationship', 'dating', 'love', 'marriage',
            'astrology', 'horoscope', 'zodiac',
            'joke', 'jokes', 'funny', 'meme', 'memes',
            'anime', 'manga', 'cartoon',
            'hacking', 'hack', 'virus', 'malware',
            'chatgpt', 'openai', 'artificial intelligence',
            'nasa', 'space', 'mars', 'moon landing',
            'war', 'military', 'army', 'navy',
            'religion', 'god', 'bible', 'quran', 'temple', 'mosque'
        ]);

        // ── Loyola-context keywords ──────────────────────────
        // If a query contains one of these alongside a non-Loyola
        // keyword, the query is still treated as relevant.
        this.loyolaContextKeywords = new Set([
            'loyola', 'college', 'chennai', 'admission', 'admissions', 'course',
            'courses', 'department', 'hostel', 'placement', 'placements',
            'scholarship', 'exam', 'examination', 'campus', 'faculty', 'professor',
            'library', 'student', 'alumnus', 'alumni', 'naac', 'autonomous',
            'university', 'madras', 'jesuit', 'principal', 'rector', 'sterling',
            'nungambakkam', 'school', 'research', 'licet', 'liba', 'lce',
            'lsss', 'lsu', 'eri', 'lisstar', 'csseip', 'life', 'live',
            'liac', 'pulcs', 'caj', 'cam', 'ias academy', 'nptel', 'swayam',
            'fm 107.4', 'edutech', 'prospectus', 'semester', 'fee', 'fees'
        ]);
    }

    // ─────────────────────────────────────────────────────────
    // TOKENISE
    // ─────────────────────────────────────────────────────────
    // Lowercases, strips punctuation, splits into words, and
    // removes stop-words.
    // ─────────────────────────────────────────────────────────
    tokenize(text) {
        if (!text || typeof text !== 'string') return [];

        return text
            .toLowerCase()
            .replace(/[^\w\s.]/g, ' ')   // keep periods for abbreviations
            .replace(/\./g, ' ')
            .split(/\s+/)
            .filter(word => word.length > 1 && !this.stopWords.has(word));
    }

    // ─────────────────────────────────────────────────────────
    // EXPAND SYNONYMS
    // ─────────────────────────────────────────────────────────
    // Returns the original tokens plus all synonyms for each.
    // ─────────────────────────────────────────────────────────
    expandWithSynonyms(tokens) {
        const expanded = new Set(tokens);

        for (const token of tokens) {
            if (this.synonyms[token]) {
                for (const synonym of this.synonyms[token]) {
                    expanded.add(synonym);
                }
            }
        }

        return Array.from(expanded);
    }

    // ─────────────────────────────────────────────────────────
    // CHECK NON-LOYOLA QUERY
    // ─────────────────────────────────────────────────────────
    // Returns true if the query seems unrelated to the college.
    // ─────────────────────────────────────────────────────────
    isNonLoyolaQuery(query) {
        const lowerQuery = query.toLowerCase();
        const tokens = this.tokenize(query);

        // If any Loyola-context keyword appears, it is likely
        // a relevant query regardless of other words.
        for (const token of tokens) {
            if (this.loyolaContextKeywords.has(token)) {
                return false;
            }
        }

        // Also check multi-word Loyola phrases
        for (const phrase of this.loyolaContextKeywords) {
            if (phrase.includes(' ') && lowerQuery.includes(phrase)) {
                return false;
            }
        }

        // Count how many non-Loyola keywords appear
        let nonLoyolaHits = 0;
        for (const keyword of this.nonLoyolaKeywords) {
            if (keyword.includes(' ')) {
                // Multi-word non-Loyola phrase
                if (lowerQuery.includes(keyword)) nonLoyolaHits++;
            } else {
                if (tokens.includes(keyword)) nonLoyolaHits++;
            }
        }

        // If 1+ non-Loyola keyword found and no Loyola context → reject
        return nonLoyolaHits > 0;
    }

    // ─────────────────────────────────────────────────────────
    // CHECK GREETING
    // ─────────────────────────────────────────────────────────
    checkGreeting(query) {
        const lowerQuery = query.toLowerCase().trim();

        for (const pattern of KNOWLEDGE_BASE.greetings.patterns) {
            if (lowerQuery === pattern || lowerQuery.startsWith(pattern + ' ') || lowerQuery.startsWith(pattern + '!') || lowerQuery.startsWith(pattern + ',')) {
                const responses = KNOWLEDGE_BASE.greetings.responses;
                return responses[Math.floor(Math.random() * responses.length)];
            }
        }
        return null;
    }

    // ─────────────────────────────────────────────────────────
    // CHECK FAREWELL
    // ─────────────────────────────────────────────────────────
    checkFarewell(query) {
        const lowerQuery = query.toLowerCase().trim();

        for (const pattern of KNOWLEDGE_BASE.farewells.patterns) {
            if (lowerQuery === pattern || lowerQuery.startsWith(pattern + ' ') || lowerQuery.startsWith(pattern + '!') || lowerQuery.endsWith(pattern)) {
                const responses = KNOWLEDGE_BASE.farewells.responses;
                return responses[Math.floor(Math.random() * responses.length)];
            }
        }
        return null;
    }

    // ─────────────────────────────────────────────────────────
    // CHECK THANKS
    // ─────────────────────────────────────────────────────────
    checkThanks(query) {
        const lowerQuery = query.toLowerCase().trim();

        for (const pattern of KNOWLEDGE_BASE.thanks.patterns) {
            if (lowerQuery === pattern || lowerQuery.includes(pattern)) {
                const responses = KNOWLEDGE_BASE.thanks.responses;
                return responses[Math.floor(Math.random() * responses.length)];
            }
        }
        return null;
    }

    // ─────────────────────────────────────────────────────────
    // SCORE ENTRY
    // ─────────────────────────────────────────────────────────
    // Calculates a relevance score between a query and a single
    // knowledge-base entry.  Bonuses:
    //   • Exact phrase match in answer     → 2× multiplier
    //   • Keyword present in question text → 1.5× multiplier
    // ─────────────────────────────────────────────────────────
    scoreEntry(queryTokens, expandedTokens, query, entry) {
        let score = 0;
        const lowerQuery = query.toLowerCase();
        const entryKeywords = entry.keywords || [];
        const lowerQuestion = (entry.question || '').toLowerCase();
        const lowerAnswer = (entry.answer || '').toLowerCase();

        // 1) Count keyword matches (expanded set against entry keywords)
        for (const token of expandedTokens) {
            if (entryKeywords.includes(token)) {
                score += 1;
            }
        }

        // 2) Bonus: original query token found in entry keywords (higher value)
        for (const token of queryTokens) {
            if (entryKeywords.includes(token)) {
                score += 0.5; // additional half-point for direct match
            }
        }

        // 3) Bonus: query token appears in the question text → 1.5× weight
        for (const token of queryTokens) {
            if (lowerQuestion.includes(token)) {
                score += 1.5;
            }
        }

        // 4) Bonus: exact phrase match in answer → 2× weight
        //    (only for multi-word phrases ≥ 4 chars from original query)
        const queryPhrases = lowerQuery.match(/\b\w{4,}\s+\w{4,}\b/g) || [];
        for (const phrase of queryPhrases) {
            if (lowerAnswer.includes(phrase)) {
                score *= 2;
            }
            if (lowerQuestion.includes(phrase)) {
                score *= 2;
            }
        }

        return score;
    }

    // ─────────────────────────────────────────────────────────
    // SEARCH
    // ─────────────────────────────────────────────────────────
    // Main entry point.  Returns:
    //   { answer, category, suggestions, isRejection }
    // ─────────────────────────────────────────────────────────
    search(query) {
        if (!query || typeof query !== 'string' || query.trim().length === 0) {
            return this._fallbackResponse();
        }

        // ── Check conversational intents first ───────────────
        const greeting = this.checkGreeting(query);
        if (greeting) {
            return {
                answer: greeting,
                category: 'greeting',
                suggestions: ['Tell me about Loyola College', 'How to apply for admission?', 'What courses are available?'],
                isRejection: false
            };
        }

        const farewell = this.checkFarewell(query);
        if (farewell) {
            return {
                answer: farewell,
                category: 'farewell',
                suggestions: [],
                isRejection: false
            };
        }

        const thanks = this.checkThanks(query);
        if (thanks) {
            return {
                answer: thanks,
                category: 'thanks',
                suggestions: ['Tell me about admissions', 'What about placements?', 'Campus facilities?'],
                isRejection: false
            };
        }

        // ── Check for non-Loyola queries ─────────────────────
        if (this.isNonLoyolaQuery(query)) {
            return {
                answer: KNOWLEDGE_BASE.rejection.message,
                category: 'rejection',
                suggestions: KNOWLEDGE_BASE.rejection.suggestions,
                isRejection: true
            };
        }

        // ── Tokenise & expand ────────────────────────────────
        const queryTokens = this.tokenize(query);
        const expandedTokens = this.expandWithSynonyms(queryTokens);

        // ── Score every entry across all categories ──────────
        const scored = [];

        for (const [categoryName, category] of Object.entries(KNOWLEDGE_BASE.categories)) {
            // Category-level keyword bonus
            let categoryBonus = 0;
            for (const token of expandedTokens) {
                if (category.keywords && category.keywords.includes(token)) {
                    categoryBonus += 0.5;
                }
            }

            for (const entry of category.entries) {
                const entryScore = this.scoreEntry(queryTokens, expandedTokens, query, entry) + categoryBonus;

                if (entryScore > 0) {
                    scored.push({
                        entry,
                        category: categoryName,
                        score: entryScore
                    });
                }
            }
        }

        // ── Sort by score descending ─────────────────────────
        scored.sort((a, b) => b.score - a.score);

        // ── Return best match or fallback ────────────────────
        if (scored.length > 0 && scored[0].score >= 1.5) {
            const best = scored[0];

            // Gather suggestions from next-best matches (different category preferred)
            const suggestions = [];
            const usedCategories = new Set([best.category]);

            for (let i = 1; i < scored.length && suggestions.length < 3; i++) {
                const item = scored[i];
                if (!usedCategories.has(item.category) && item.score >= 1) {
                    suggestions.push(item.entry.question);
                    usedCategories.add(item.category);
                }
            }

            // Fill up suggestions if we have fewer than 3
            if (suggestions.length < 3) {
                for (let i = 1; i < scored.length && suggestions.length < 3; i++) {
                    if (!suggestions.includes(scored[i].entry.question) && scored[i].entry.question !== best.entry.question) {
                        suggestions.push(scored[i].entry.question);
                    }
                }
            }

            return {
                answer: best.entry.answer,
                category: best.category,
                suggestions: suggestions.length > 0 ? suggestions : KNOWLEDGE_BASE.fallback.suggestions.slice(0, 3),
                isRejection: false
            };
        }

        return this._fallbackResponse();
    }

    // ─────────────────────────────────────────────────────────
    // FALLBACK RESPONSE
    // ─────────────────────────────────────────────────────────
    _fallbackResponse() {
        const responses = KNOWLEDGE_BASE.fallback.responses;
        return {
            answer: responses[Math.floor(Math.random() * responses.length)],
            category: 'fallback',
            suggestions: KNOWLEDGE_BASE.fallback.suggestions,
            isRejection: false
        };
    }
}

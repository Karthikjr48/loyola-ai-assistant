// ============================================================
// Loyola AI Assistant - Configuration
// ============================================================
// Central configuration for the Loyola College Chennai chatbot.
// Supports offline (knowledge-base only), Gemini, and OpenAI/Groq modes.
//
// ENVIRONMENT SECRETS POLICY:
// Keys are safely read from window.__ENV__ (set by server or js/env.js)
// or localStorage. No production secrets are hardcoded in this file.
// ============================================================

// Read runtime environment variables if available
const _runtimeEnv = (typeof window !== 'undefined' && window.__ENV__) ? window.__ENV__ : {};

const CONFIG = {
    // ── API Settings ──────────────────────────────────────────
    // API key loaded safely from .env / js/env.js / localStorage.
    // If empty, AIProvider automatically falls back to offline Knowledge Base.
    API_KEY: _runtimeEnv.API_KEY || (typeof localStorage !== 'undefined' ? localStorage.getItem('LOYOLA_API_KEY') : '') || '',
    API_PROVIDER: _runtimeEnv.API_PROVIDER || 'openai', // 'openai' (Groq/OpenAI), 'gemini', or 'offline'

    // ── Model Configuration ───────────────────────────────────
    GEMINI_MODEL: _runtimeEnv.GEMINI_MODEL || 'gemini-2.0-flash',
    OPENAI_MODEL: _runtimeEnv.OPENAI_MODEL || 'llama-3.1-8b-instant', // Groq's ultra-fast model

    // ── Gemini API Endpoint ───────────────────────────────────
    GEMINI_API_URL: _runtimeEnv.GEMINI_API_URL || 'https://generativelanguage.googleapis.com/v1beta/models',

    // ── Groq API Endpoint (OpenAI-compatible) ─────────────────
    OPENAI_API_URL: _runtimeEnv.OPENAI_API_URL || 'https://api.groq.com/openai/v1/chat/completions',

    // ── UX Settings ───────────────────────────────────────────
    TYPING_DELAY_MIN: 800,   // Minimum typing indicator delay (ms)
    TYPING_DELAY_MAX: 2000,  // Maximum typing indicator delay (ms)

    // ── Chat History ──────────────────────────────────────────
    MAX_HISTORY: 50, // Maximum messages retained in conversation context

    // ── Branding ──────────────────────────────────────────────
    APP_NAME: 'Loyola AI Assistant',
    COLLEGE_NAME: 'Loyola College, Chennai',
    MOTTO: 'Let Your Light Shine',

    // ── System Prompt (used by Gemini/OpenAI modes) ───────────
    SYSTEM_PROMPT: `You are the official Loyola AI Assistant for Loyola College, Chennai (founded 1925).
You MUST ONLY answer questions related to Loyola College, Chennai — its history, admissions, courses, faculty, campus, hostels, placements, scholarships, examinations, student life, alumni, research, and affiliated institutions (LICET, LIBA, LCE).

IMPORTANT RULES:
1. If a question is NOT related to Loyola College Chennai, politely decline and say: "I am the Loyola AI Assistant and I can only answer questions related to Loyola College, Chennai."
2. Always provide accurate, helpful, and up-to-date information.
3. Include relevant URLs from loyolacollege.edu when applicable.
4. Be warm, professional, and reflect the Jesuit values of the institution.
5. When unsure, direct users to the official website (https://www.loyolacollege.edu) or contact the college office.
6. The college motto is "Let Your Light Shine".
7. Loyola College is affiliated to the University of Madras and has NAAC A++ accreditation and Autonomous status.`
};

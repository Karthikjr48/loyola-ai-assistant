// ============================================================
// Loyola AI Assistant - Client Environment Config Template
// ============================================================
// For direct browser use without running a Node server:
// 1. Copy this file to js/env.js
// 2. Put your API key in API_KEY
//
// NOTE: js/env.js is in .gitignore and will NOT be committed to git.
// ============================================================

window.__ENV__ = {
    // Leave blank for offline knowledge-base mode, or add your Groq/Gemini key:
    API_KEY: '',
    API_PROVIDER: 'openai', // 'openai' (for Groq/OpenAI), 'gemini', or 'offline'
    OPENAI_MODEL: 'llama-3.1-8b-instant',
    GEMINI_MODEL: 'gemini-2.0-flash'
};

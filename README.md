# 🎓 Loyola AI Assistant & Interactive Chat Widget

<p align="center">
  <img src="assets/header_logo.png" alt="Loyola College Chennai" width="120" />
</p>

<p align="center">
  <strong>Official-grade AI Assistant & Interactive Floating Widget for Loyola College, Chennai (Autonomous, NAAC A++).</strong>
  <br />
  <em>Motto: "Let Your Light Shine" (Luceat Lux Vestra)</em>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT"></a>
  <img src="https://img.shields.io/badge/Status-Production--Ready-success" alt="Status: Ready"></a>
  <img src="https://img.shields.io/badge/AI%20Engine-Groq%20LLaMA--3.1%20%7C%20Gemini-orange" alt="AI Engine"></a>
  <img src="https://img.shields.io/badge/Offline%20Engine-Built--in%20Knowledge%20Base-blueviolet" alt="Offline Engine"></a>
  <img src="https://img.shields.io/badge/Frontend-Vanilla%20JS%20%7C%20CSS3%20%7C%20HTML5-yellow" alt="Frontend"></a>
</p>

<p align="center">
  <a href="https://chatbotloyola.pages.dev/"><strong>🚀 Open Live Hosted Demo (Cloudflare Pages)</strong></a>
  &nbsp;&bull;&nbsp;
  <a href="https://chatbotloyola.pages.dev/chat.html"><strong>💬 Fullscreen Dedicated Chat</strong></a>
</p>

---

## 🌟 Overview

**Loyola AI Assistant** is an intelligent conversational agent and embeddable web widget tailored specifically for **Loyola College, Chennai**. It provides real-time, verified information for students, aspirants, parents, and alumni regarding:

- 🏛️ Admissions, eligibility, and application procedures
- 📚 Undergraduate (UG), Postgraduate (PG), and Ph.D. course catalog
- 🏠 Hostel accommodations, mess facilities, and fee breakdowns
- 💼 Training & Placement cell statistics, average packages, and top recruiters
- 💰 Scholarships, fee concessions, and student support services
- 🔬 Research centers, campus clubs, and Jesuit outreach programs
- 🤝 Affiliated Jesuit institutions (LICET, LIBA, LCE)

---

## ✨ Key Features

### 1. 🧠 Dual-Mode Intelligence Engine
- **Online Mode (Groq LLaMA-3.1 / Google Gemini)**: Generates human-like, context-aware answers with ultra-low latency and rich suggestions.
- **Offline Mode (Local Knowledge Base)**: If an API key is not configured or network connectivity drops, the assistant automatically falls back to an extensive built-in offline knowledge database without interrupting the user.

### 2. 🛡️ Institutional Guardrails
- Strictly restricts answers to Loyola College Chennai and affiliated campus life.
- Out-of-scope queries (general trivia, external colleges, etc.) are politely rejected with official institutional guidance.

### 3. 🎨 Dual User Interface Experiences
- **Embeddable Floating Widget (`index.html`)**: Sleek expandable floating chat bubble that can be added to any web page. Includes typing indicators, responsive drawer, quick suggestion chips, and expand-to-modal controls.
- **Fullscreen AI Assistant (`chat.html`)**: A dedicated, distraction-free conversational workspace featuring dark/light theme switching, session history persistence (`localStorage`), and mobile drawer navigation.

### 4. 🔒 Zero-Leak Environment Security
- Production secrets and API keys are **never hardcoded**.
- Seamless support for `.env` files via a lightweight, zero-dependency Node server, as well as client-side `js/env.js` for standalone browser deployment (both safely ignored via `.gitignore`).

---

## 📁 Project Structure

```plaintext
loyola-ai-assistant/
├── .env.example            # Template for environment variables (committed)
├── .gitignore              # Ignores .env, js/env.js, logs, node_modules
├── LICENSE                 # MIT License (2026 Loyola Ignatius Karthik)
├── README.md               # Complete documentation
├── package.json            # Node project metadata & start scripts
├── server.js               # Zero-dependency local static & env server
│
├── index.html              # Loyola College Showcase + Floating Widget
├── chat.html               # Fullscreen Dedicated AI Chat Interface
│
├── assets/
│   ├── header_logo.png     # Official Loyola header crest
│   └── logo.png            # High-resolution college crest
│
├── css/
│   └── styles.css          # Clean typography, dark mode & layout styles
│
└── js/
    ├── ai-provider.js      # Unified provider (Groq / Gemini / Offline fallback)
    ├── app.js              # Theme switcher, accessibility, sidebar drawer
    ├── chatbot.js          # Chat history, UI rendering & messaging controller
    ├── config.js           # Central configuration & runtime environment loader
    ├── env.example.js      # Client template for standalone browser execution
    ├── knowledge-base.js   # Extensive categorized institutional knowledge base
    └── search-engine.js    # Keyword indexing, score-based matching & guardrails
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended), **OR** simply any standard web browser.

---

### Method 1: Running with Node Server (Recommended)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Karthikjr48/loyola-ai-assistant.git
   cd loyola-ai-assistant
   ```

2. **Configure your Environment:**
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   Open `.env` and add your API key:
   ```env
   # API Provider: 'openai' (for Groq / OpenAI), 'gemini', or 'offline'
   API_PROVIDER=openai

   # Your Groq API Key (starts with gsk_): https://console.groq.com/keys
   # Or Google Gemini Key (starts with AIza...): https://aistudio.google.com/
   API_KEY=your_actual_api_key_here
   ```
   > 💡 *Note: You can leave `API_KEY` empty to test the assistant 100% offline using the built-in knowledge base!*

3. **Start the local server:**
   ```bash
   npm start
   ```
   Or:
   ```bash
   node server.js
   ```

4. **Open in your browser:**
   - 🌐 **Showcase & Floating Widget**: [http://localhost:3000](http://localhost:3000)
   - 💬 **Fullscreen Dedicated Chat**: [http://localhost:3000/chat.html](http://localhost:3000/chat.html)

---

### Method 2: Running Directly in Browser (No Server)

If you prefer to open `index.html` or `chat.html` directly in your browser:

1. Copy `js/env.example.js` to `js/env.js`:
   ```bash
   cp js/env.example.js js/env.js
   ```
2. Insert your API key in `js/env.js`:
   ```javascript
   window.__ENV__ = {
       API_KEY: 'your_api_key_here',
       API_PROVIDER: 'openai',
       OPENAI_MODEL: 'llama-3.1-8b-instant',
       GEMINI_MODEL: 'gemini-2.0-flash'
   };
   ```
3. Double-click `index.html` or `chat.html` to open it in Chrome, Edge, Firefox, or Safari.

---

## ⚙️ Configuration Options

All default behavior is controlled in `js/config.js` and can be overridden via `.env`:

| Variable | Default | Description |
| :--- | :--- | :--- |
| `API_PROVIDER` | `openai` | AI backend engine (`openai` for Groq/OpenAI, `gemini`, or `offline`). |
| `API_KEY` | `""` | Secret API key (Groq or Gemini). |
| `OPENAI_MODEL` | `llama-3.1-8b-instant` | Groq / OpenAI model name. |
| `GEMINI_MODEL` | `gemini-2.0-flash` | Google Gemini model name. |
| `OPENAI_API_URL` | `https://api.groq.com/openai/v1/chat/completions` | API endpoint for Groq / OpenAI completions. |
| `GEMINI_API_URL` | `https://generativelanguage.googleapis.com/v1beta/models` | Gemini API endpoint. |
| `MAX_HISTORY` | `50` | Maximum messages preserved in conversation memory. |
| `PORT` | `3000` | Port for `server.js`. |

---

## 🔒 Security Best Practices

- `.env` and `js/env.js` are listed in `.gitignore` to prevent credentials from ever being published.
- For production web deployments, we recommend calling the AI models through a serverless backend proxy rather than exposing client-side credentials.

---

## 📜 License

This project is open-source and released under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Loyola Ignatius Karthik**
- GitHub: [@Karthikjr48](https://github.com/Karthikjr48)
- Email: [loyolaignatiuskarthik@gmail.com](mailto:loyolaignatiuskarthik@gmail.com)

*Ad Majorem Dei Gloriam — For the Greater Glory of God*

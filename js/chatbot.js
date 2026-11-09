/**
 * Loyola AI Assistant - Chatbot UI Engine
 * Handles all chat message rendering, user interaction, typing indicators,
 * history persistence, and message formatting.
 */
class Chatbot {
    constructor() {
        this.aiProvider = new AIProvider();
        this.messagesContainer = document.getElementById('messages-container');
        this.chatInput = document.getElementById('chat-input');
        this.sendBtn = document.getElementById('send-btn');
        this.typingIndicator = document.getElementById('typing-indicator');
        this.isProcessing = false;
        this.chatHistory = this.loadHistory();
        this.init();
    }

    /**
     * Initialize event listeners and restore/show welcome state.
     */
    init() {
        // Send button click
        this.sendBtn.addEventListener('click', () => this.handleSend());

        // Enter key to send (Shift+Enter for newline is not applicable for input, but kept for future textarea upgrade)
        this.chatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.handleSend();
            }
        });

        // Suggestion chips
        document.querySelectorAll('.suggestion-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                const question = chip.dataset.question;
                if (question) this.handleSend(question);
                // On mobile, close sidebar after clicking a chip
                const sidebar = document.getElementById('sidebar');
                if (sidebar) sidebar.classList.remove('active');
            });
        });

        // Auto-resize input placeholder on focus
        this.chatInput.addEventListener('focus', () => {
            this.chatInput.parentElement.classList.add('focused');
        });
        this.chatInput.addEventListener('blur', () => {
            this.chatInput.parentElement.classList.remove('focused');
        });

        // Restore history or show welcome
        if (this.chatHistory.length > 0) {
            this.restoreHistory();
        } else {
            this.showWelcomeMessage();
        }
    }

    /**
     * Handle sending a message. Can accept overrideText from suggestion chips.
     */
    async handleSend(overrideText) {
        const text = overrideText || this.chatInput.value.trim();
        if (!text || this.isProcessing) return;

        // Clear input
        this.chatInput.value = '';
        this.isProcessing = true;
        this.sendBtn.disabled = true;
        this.sendBtn.classList.add('disabled');

        // Remove welcome message if present
        const welcomeMsg = this.messagesContainer.querySelector('.welcome-message');
        if (welcomeMsg) {
            welcomeMsg.style.animation = 'fadeOut 0.3s ease-out forwards';
            setTimeout(() => welcomeMsg.remove(), 300);
        }

        // Add user message
        this.addMessage(text, 'user');

        // Show typing indicator with random delay
        this.showTypingIndicator();
        const delay = Math.random() * (CONFIG.TYPING_DELAY_MAX - CONFIG.TYPING_DELAY_MIN) + CONFIG.TYPING_DELAY_MIN;
        await new Promise(r => setTimeout(r, delay));

        // Get AI response
        try {
            const response = await this.aiProvider.getResponse(text);
            this.hideTypingIndicator();
            this.addMessage(response.answer, 'bot');
        } catch (error) {
            this.hideTypingIndicator();
            this.addMessage(
                "I'm sorry, I encountered an error processing your request. Please try again or visit the [official website](https://loyolacollege.edu) for assistance.",
                'bot'
            );
            console.error('Chatbot error:', error);
        }

        // Re-enable input
        this.isProcessing = false;
        this.sendBtn.disabled = false;
        this.sendBtn.classList.remove('disabled');
        this.chatInput.focus();
    }

    /**
     * Add a message to the chat and optionally animate it.
     */
    addMessage(text, sender, animate = true) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}`;

        if (animate) {
            msgDiv.style.animation = sender === 'user'
                ? 'slideInRight 0.4s ease-out'
                : 'slideInLeft 0.4s ease-out';
        }

        const avatarHTML = sender === 'bot'
            ? `<div class="message-avatar bot-avatar" style="background:var(--primary); border:1.5px solid var(--secondary); display:flex; align-items:center; justify-content:center;">
                   <img src="assets/logo.png" alt="Loyola" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" style="width:100%; height:100%; object-fit:cover;">
                   <div class="avatar-fallback" style="display:none; width:100%; height:100%; align-items:center; justify-content:center; color:var(--secondary); font-weight:700; font-size:13px; font-family:var(--font);">LC</div>
               </div>`
            : `<div class="message-avatar user-avatar">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                       <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                   </svg>
               </div>`;

        const formattedText = this.formatResponse(text);
        const timeStr = this.getTimestamp();

        msgDiv.innerHTML = `
            ${avatarHTML}
            <div class="message-content">
                <div class="message-bubble ${sender}">${formattedText}</div>
                <span class="message-time">${timeStr}</span>
            </div>
        `;

        this.messagesContainer.appendChild(msgDiv);
        this.scrollToBottom();

        // Save to history
        this.chatHistory.push({ text, sender, time: timeStr });
        this.saveHistory();
    }

    /**
     * Add a message from saved history (no animation, no re-save).
     */
    addMessageFromHistory(msg) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${msg.sender}`;

        const avatarHTML = msg.sender === 'bot'
            ? `<div class="message-avatar bot-avatar" style="background:var(--primary); border:1.5px solid var(--secondary); display:flex; align-items:center; justify-content:center;">
                   <img src="assets/logo.png" alt="Loyola" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" style="width:100%; height:100%; object-fit:cover;">
                   <div class="avatar-fallback" style="display:none; width:100%; height:100%; align-items:center; justify-content:center; color:var(--secondary); font-weight:700; font-size:13px; font-family:var(--font);">LC</div>
               </div>`
            : `<div class="message-avatar user-avatar">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                       <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                   </svg>
               </div>`;

        const formattedText = this.formatResponse(msg.text);
        const timeStr = msg.time || '';

        msgDiv.innerHTML = `
            ${avatarHTML}
            <div class="message-content">
                <div class="message-bubble ${msg.sender}">${formattedText}</div>
                <span class="message-time">${timeStr}</span>
            </div>
        `;

        this.messagesContainer.appendChild(msgDiv);
    }

    /**
     * Show the welcome message with college logo and topic chips.
     */
    showWelcomeMessage() {
        const welcomeDiv = document.createElement('div');
        welcomeDiv.className = 'welcome-message';
        welcomeDiv.innerHTML = `
            <div class="welcome-avatar" style="background:var(--primary); border:3px solid var(--secondary); display:flex; align-items:center; justify-content:center; overflow:hidden;">
                <img src="assets/logo.png" alt="Loyola AI Assistant" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" style="width:100%; height:100%; object-fit:cover;">
                <div class="welcome-avatar-fallback" style="display:none; width:100%; height:100%; align-items:center; justify-content:center; color:var(--secondary); font-weight:700; font-size:24px; font-family:var(--font);">LC</div>
            </div>
            <h2 class="welcome-title">Welcome to Loyola AI Assistant</h2>
            <p class="welcome-subtitle">Hello! 👋 I am the official Loyola AI Assistant. I can help you with admissions, courses, placements, hostels, scholarships, and more.</p>
            <div class="welcome-cards-grid">
                <div class="welcome-card" data-question="How do I apply for admission to Loyola College?">
                    <span class="welcome-card-icon">🎓</span>
                    <span class="welcome-card-title">Admission Process</span>
                    <span class="welcome-card-desc">Learn about online applications, eligibility, and streams.</span>
                </div>
                <div class="welcome-card" data-question="What courses are offered at Loyola College?">
                    <span class="welcome-card-icon">📚</span>
                    <span class="welcome-card-title">Courses Offered</span>
                    <span class="welcome-card-desc">Explore all UG & PG programs across our Schools of Excellence.</span>
                </div>
                <div class="welcome-card" data-question="What are the placement statistics at Loyola College?">
                    <span class="welcome-card-icon">💼</span>
                    <span class="welcome-card-title">Placement Info</span>
                    <span class="welcome-card-desc">Discover our recruiters, statistics, and training programs.</span>
                </div>
                <div class="welcome-card" data-question="Tell me about hostel facilities at Loyola College.">
                    <span class="welcome-card-icon">🏠</span>
                    <span class="welcome-card-title">Hostel Details</span>
                    <span class="welcome-card-desc">Check out separate Men's and Women's residential blocks.</span>
                </div>
            </div>
        `;
        this.messagesContainer.appendChild(welcomeDiv);

        // Bind click events to the cards
        welcomeDiv.querySelectorAll('.welcome-card').forEach(card => {
            card.addEventListener('click', () => {
                const question = card.dataset.question;
                if (question) this.handleSend(question);
            });
        });
    }

    /**
     * Format response text:
     * - Convert URLs to clickable links
     * - Convert **bold** markers
     * - Convert \n to <br>
     * - Convert bullet points (- item) to styled list items
     * - Convert numbered lists (1. item) to ordered items
     */
    formatResponse(text) {
        if (!text) return '';

        let formatted = text;

        // Escape HTML to prevent XSS (but preserve our formatting)
        formatted = formatted
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        // Convert markdown-style links [text](url) to clickable links
        formatted = formatted.replace(
            /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
            '<a href="$2" target="_blank" rel="noopener noreferrer" class="chat-link">$1</a>'
        );

        // Convert bare URLs to clickable links (not already inside an href)
        formatted = formatted.replace(
            /(?<!href="|">)(https?:\/\/[^\s<)]+)/g,
            '<a href="$1" target="_blank" rel="noopener noreferrer" class="chat-link">$1</a>'
        );

        // Convert email addresses to mailto links
        formatted = formatted.replace(
            /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
            '<a href="mailto:$1" class="chat-link">$1</a>'
        );

        // Convert **bold** markers
        formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

        // Convert *italic* markers (single asterisk)
        formatted = formatted.replace(/\*([^*]+)\*/g, '<em>$1</em>');

        // Process lines for bullet points and numbered lists
        const lines = formatted.split('\n');
        let inList = false;
        let listType = null; // 'ul' or 'ol'
        const processedLines = [];

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const bulletMatch = line.match(/^\s*[-•]\s+(.+)/);
            const numberedMatch = line.match(/^\s*(\d+)\.\s+(.+)/);

            if (bulletMatch) {
                if (!inList || listType !== 'ul') {
                    if (inList) processedLines.push(listType === 'ol' ? '</ol>' : '</ul>');
                    processedLines.push('<ul class="chat-list">');
                    inList = true;
                    listType = 'ul';
                }
                processedLines.push(`<li>${bulletMatch[1]}</li>`);
            } else if (numberedMatch) {
                if (!inList || listType !== 'ol') {
                    if (inList) processedLines.push(listType === 'ol' ? '</ol>' : '</ul>');
                    processedLines.push('<ol class="chat-list">');
                    inList = true;
                    listType = 'ol';
                }
                processedLines.push(`<li>${numberedMatch[2]}</li>`);
            } else {
                if (inList) {
                    processedLines.push(listType === 'ol' ? '</ol>' : '</ul>');
                    inList = false;
                    listType = null;
                }
                processedLines.push(line);
            }
        }

        // Close any open list
        if (inList) {
            processedLines.push(listType === 'ol' ? '</ol>' : '</ul>');
        }

        // Join lines back with <br> for non-list content
        formatted = processedLines.join('\n');

        // Convert remaining newlines to <br> (but not inside list items)
        formatted = formatted.replace(/\n(?!<\/?[ou]l|<li)/g, '<br>');

        // Clean up excessive <br> tags
        formatted = formatted.replace(/(<br>\s*){3,}/g, '<br><br>');

        return formatted;
    }

    /**
     * Show the typing indicator animation.
     */
    showTypingIndicator() {
        if (this.typingIndicator) {
            this.typingIndicator.style.display = 'block';
            this.scrollToBottom();
        }
    }

    /**
     * Hide the typing indicator animation.
     */
    hideTypingIndicator() {
        if (this.typingIndicator) {
            this.typingIndicator.style.display = 'none';
        }
    }

    /**
     * Smoothly scroll the messages container to the bottom.
     */
    scrollToBottom() {
        requestAnimationFrame(() => {
            this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        });
    }

    /**
     * Get current time formatted as HH:MM AM/PM.
     */
    getTimestamp() {
        return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    /**
     * Save chat history to localStorage (capped at MAX_HISTORY).
     */
    saveHistory() {
        try {
            const maxItems = (typeof CONFIG !== 'undefined' && CONFIG.MAX_HISTORY) ? CONFIG.MAX_HISTORY : 50;
            const hist = this.chatHistory.slice(-maxItems);
            localStorage.setItem('loyola_chat_history', JSON.stringify(hist));
        } catch (e) {
            console.warn('Failed to save chat history:', e);
        }
    }

    /**
     * Load chat history from localStorage.
     */
    loadHistory() {
        try {
            const stored = localStorage.getItem('loyola_chat_history');
            return stored ? JSON.parse(stored) : [];
        } catch (e) {
            console.warn('Failed to load chat history:', e);
            return [];
        }
    }

    /**
     * Restore all messages from saved history.
     */
    restoreHistory() {
        this.chatHistory.forEach(msg => this.addMessageFromHistory(msg));
        this.scrollToBottom();
    }

    /**
     * Clear all chat history and reset to welcome state.
     */
    clearHistory() {
        this.chatHistory = [];
        localStorage.removeItem('loyola_chat_history');
        this.messagesContainer.innerHTML = '';
        this.showWelcomeMessage();
    }
}

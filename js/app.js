/**
 * Loyola AI Assistant - App Initialization
 * Handles DOM ready setup, dark mode toggle, mobile sidebar, logo fallbacks,
 * and exposes the chatbot instance globally.
 */
document.addEventListener('DOMContentLoaded', () => {
    // ---- Chatbot Initialization ----
    let chatbot;
    try {
        chatbot = new Chatbot();
        window.loyolaChatbot = chatbot;
    } catch (error) {
        console.error('Failed to initialize chatbot:', error);
    }

    // ---- Dark Mode Toggle ----
    const themeToggle = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;
    const THEME_KEY = 'loyola_theme';

    // Load saved theme
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
        htmlEl.setAttribute('data-theme', savedTheme);
    } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            htmlEl.setAttribute('data-theme', 'dark');
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlEl.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlEl.setAttribute('data-theme', newTheme);
            localStorage.setItem(THEME_KEY, newTheme);

            // Animate the toggle button
            themeToggle.style.transform = 'scale(0.8) rotate(180deg)';
            setTimeout(() => {
                themeToggle.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
        });
    }

    // ---- Mobile Sidebar Toggle ----
    const sidebar = document.getElementById('sidebar');
    const mobileToggle = document.getElementById('mobile-sidebar-toggle');
    const sidebarClose = document.getElementById('sidebar-close-btn');

    if (mobileToggle && sidebar) {
        mobileToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    if (sidebarClose && sidebar) {
        sidebarClose.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (sidebar && sidebar.classList.contains('active')) {
            if (!sidebar.contains(e.target) && e.target !== mobileToggle && !mobileToggle.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        }
    });

    // ---- Logo Error Fallback ----
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function () {
            // Hide broken images gracefully
            this.style.display = 'none';
            // Show a text fallback based on element
            if (this.id === 'header-logo-img') {
                const fallback = document.createElement('div');
                fallback.className = 'header-logo-fallback';
                fallback.textContent = 'LC';
                fallback.style.cssText = 'width:44px;height:44px;border-radius:50%;background:var(--secondary);color:var(--primary);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px;border:2px solid var(--secondary);box-shadow:var(--shadow-gold);';
                this.parentElement.replaceChild(fallback, this);
            } else if (this.id === 'college-info-logo') {
                const fallback = document.createElement('div');
                fallback.className = 'college-info-logo-fallback';
                fallback.textContent = 'LC';
                fallback.style.cssText = 'width:64px;height:64px;border-radius:50%;background:var(--primary);color:var(--secondary);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:20px;margin:0 auto 14px;border:3px solid var(--secondary);box-shadow:var(--shadow-gold);';
                this.parentElement.replaceChild(fallback, this);
            }
        });
    });

    // ---- Clear History Button ----
    const clearBtn = document.getElementById('clear-history-btn');
    if (clearBtn && chatbot) {
        clearBtn.addEventListener('click', () => {
            const confirmed = confirm('Are you sure you want to clear your chat history?');
            if (confirmed) {
                chatbot.clearHistory();
                // Close sidebar on mobile after clearing
                if (sidebar) sidebar.classList.remove('active');
            }
        });
    }

    // ---- Keyboard Accessibility ----
    // Focus chat input when pressing '/' key (not when already focused on an input)
    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
            e.preventDefault();
            const chatInput = document.getElementById('chat-input');
            if (chatInput) chatInput.focus();
        }
    });

    // ---- Smooth Load Animation ----
    document.body.classList.add('loaded');
});

// Theme Toggle Functionality
class ThemeManager {
    constructor() {
        this.currentTheme = this.getStoredTheme() || 'dark';
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.createToggleButton();
        this.bindEvents();
    }

    getStoredTheme() {
        try {
            return localStorage.getItem('theme');
        } catch (e) {
            return null;
        }
    }

    setStoredTheme(theme) {
        try {
            localStorage.setItem('theme', theme);
        } catch (e) {
            console.warn('Unable to save theme preference');
        }
    }

    applyTheme(theme) {
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(`${theme}-theme`);
        this.currentTheme = theme;
        this.setStoredTheme(theme);
        
        // Update favicon based on theme (optional)
        this.updateFavicon(theme);
    }

    updateFavicon(theme) {
        // Optional: Update favicon based on theme
        const favicon = document.querySelector('link[rel="icon"]');
        if (favicon) {
            // You can implement different favicons for different themes
            // favicon.href = theme === 'dark' ? '/favicon-dark.ico' : '/favicon-light.ico';
        }
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
        
        // Add a subtle animation to indicate the change
        this.animateThemeChange();
    }

    animateThemeChange() {
        const button = document.querySelector('.theme-toggle-btn');
        if (button) {
            button.style.transform = 'scale(0.9)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 150);
        }
    }

    createToggleButton() {
        const existingButton = document.querySelector('.theme-toggle');
        if (existingButton) return;

        const toggleContainer = document.createElement('div');
        toggleContainer.className = 'theme-toggle';
        
        const toggleButton = document.createElement('button');
        toggleButton.className = 'theme-toggle-btn';
        toggleButton.setAttribute('aria-label', 'Toggle theme');
        toggleButton.setAttribute('title', 'Toggle dark/light mode');
        
        toggleButton.innerHTML = `
            <i class="fas fa-sun theme-icon theme-icon-sun"></i>
            <i class="fas fa-moon theme-icon theme-icon-moon"></i>
        `;
        
        toggleContainer.appendChild(toggleButton);
        
        // Add to navigation
        const searchContainer = document.querySelector('.search-container');
        if (searchContainer) {
            searchContainer.parentNode.insertBefore(toggleContainer, searchContainer.nextSibling);
        } else {
            // Fallback: add to header nav
            const nav = document.querySelector('#nav ul');
            if (nav) {
                const li = document.createElement('li');
                li.appendChild(toggleContainer);
                nav.appendChild(li);
            }
        }
    }

    bindEvents() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.theme-toggle-btn')) {
                e.preventDefault();
                this.toggleTheme();
            }
        });

        // Keyboard shortcut: Ctrl/Cmd + Shift + T
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
                e.preventDefault();
                this.toggleTheme();
            }
        });

        // Listen for system theme changes
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', (e) => {
                if (!this.getStoredTheme()) {
                    // Only auto-switch if user hasn't manually set a preference
                    this.applyTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    }

    // Detect system preference
    getSystemTheme() {
        if (window.matchMedia) {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'dark'; // Default fallback
    }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new ThemeManager();
});

// Export for potential external use
window.ThemeManager = ThemeManager; 
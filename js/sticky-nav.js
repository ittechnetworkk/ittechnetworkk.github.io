// Sticky Navigation Functionality
class StickyNavigation {
    constructor() {
        this.header = document.getElementById('header');
        this.scrollProgress = null;
        this.backToTopButton = null;
        this.lastScrollTop = 0;
        this.scrollThreshold = 100;
        this.init();
    }

    init() {
        if (!this.header) return;
        
        this.createScrollProgress();
        this.createBackToTopButton();
        this.bindEvents();
    }

    createScrollProgress() {
        this.scrollProgress = document.createElement('div');
        this.scrollProgress.className = 'scroll-progress';
        document.body.appendChild(this.scrollProgress);
    }

    createBackToTopButton() {
        this.backToTopButton = document.createElement('button');
        this.backToTopButton.className = 'back-to-top';
        this.backToTopButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
        this.backToTopButton.setAttribute('aria-label', 'Back to top');
        this.backToTopButton.setAttribute('title', 'Back to top');
        
        this.backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        document.body.appendChild(this.backToTopButton);
    }

    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = (scrollTop / documentHeight) * 100;

        // Update scroll progress
        if (this.scrollProgress) {
            this.scrollProgress.style.width = `${Math.min(scrollProgress, 100)}%`;
        }

        // Handle sticky navigation
        if (scrollTop > this.scrollThreshold) {
            if (!this.header.classList.contains('sticky')) {
                this.header.classList.add('sticky');
                document.body.classList.add('has-sticky-header');
                this.animateHeaderItems();
            }
        } else {
            if (this.header.classList.contains('sticky')) {
                this.header.classList.remove('sticky');
                document.body.classList.remove('has-sticky-header');
            }
        }

        // Handle back to top button
        if (this.backToTopButton) {
            if (scrollTop > 300) {
                this.backToTopButton.classList.add('visible');
            } else {
                this.backToTopButton.classList.remove('visible');
            }
        }

        // Auto-hide navigation on mobile when scrolling down
        if (window.innerWidth <= 768) {
            this.handleMobileNavigation(scrollTop);
        }

        this.lastScrollTop = scrollTop;
    }

    handleMobileNavigation(scrollTop) {
        const scrollDelta = scrollTop - this.lastScrollTop;
        const isScrollingDown = scrollDelta > 0;
        const isScrollingUp = scrollDelta < 0;
        const isSignificantScroll = Math.abs(scrollDelta) > 5;

        if (isScrollingDown && isSignificantScroll && scrollTop > 200) {
            // Scrolling down - hide navigation
            this.header.style.transform = 'translateY(-100%)';
        } else if (isScrollingUp && isSignificantScroll) {
            // Scrolling up - show navigation
            this.header.style.transform = 'translateY(0)';
        }
    }

    animateHeaderItems() {
        // Add subtle animation when header becomes sticky
        const logo = this.header.querySelector('#logo');
        const title = this.header.querySelector('#title');
        const nav = this.header.querySelector('#nav');

        if (logo) {
            logo.style.transition = 'all 0.3s ease';
        }
        if (title) {
            title.style.transition = 'all 0.3s ease';
        }
        if (nav) {
            nav.style.transition = 'all 0.3s ease';
        }
    }

    bindEvents() {
        // Throttled scroll event
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            if (scrollTimeout) {
                cancelAnimationFrame(scrollTimeout);
            }
            scrollTimeout = requestAnimationFrame(() => {
                this.handleScroll();
            });
        }, { passive: true });

        // Handle resize events
        window.addEventListener('resize', () => {
            this.handleResize();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            // Home key - scroll to top
            if (e.key === 'Home' && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
            
            // End key - scroll to bottom
            if (e.key === 'End' && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth'
                });
            }
        });
    }

    handleResize() {
        // Reset mobile navigation transforms on resize
        if (window.innerWidth > 768) {
            this.header.style.transform = '';
        }
    }

    // Public method to manually trigger sticky state
    setSticky(force = false) {
        if (force || window.pageYOffset > this.scrollThreshold) {
            this.header.classList.add('sticky');
            document.body.classList.add('has-sticky-header');
        }
    }

    // Public method to remove sticky state
    removeSticky() {
        this.header.classList.remove('sticky');
        document.body.classList.remove('has-sticky-header');
        this.header.style.transform = '';
    }
}

// Initialize sticky navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.stickyNav = new StickyNavigation();
});

// Export for potential external use
window.StickyNavigation = StickyNavigation; 
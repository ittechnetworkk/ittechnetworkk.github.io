/**
 * Enhanced Animations JavaScript - Military Theme
 * Handles scroll animations, interactive effects, and dynamic animations
 */

(function() {
    'use strict';

    // Animation configuration
    const config = {
        scrollOffset: 100,
        animationDuration: 800,
        staggerDelay: 100,
        parallaxFactor: 0.5
    };

    // Utility functions
    const utils = {
        // Throttle function for performance
        throttle(func, limit) {
            let inThrottle;
            return function() {
                const args = arguments;
                const context = this;
                if (!inThrottle) {
                    func.apply(context, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        },

        // Check if element is in viewport
        isInViewport(element, offset = 0) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
                rect.bottom >= offset
            );
        },

        // Add class with delay
        addClassWithDelay(element, className, delay = 0) {
            setTimeout(() => {
                element.classList.add(className);
            }, delay);
        },

        // Generate random number between min and max
        random(min, max) {
            return Math.random() * (max - min) + min;
        }
    };

    // Scroll Animation Manager
    class ScrollAnimationManager {
        constructor() {
            this.elements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');
            this.counters = document.querySelectorAll('.counter');
            this.parallaxElements = document.querySelectorAll('.parallax-element');
            
            this.init();
        }

        init() {
            this.bindEvents();
            this.checkAnimations(); // Check on load
        }

        bindEvents() {
            const throttledCheck = utils.throttle(() => this.checkAnimations(), 16);
            const throttledParallax = utils.throttle(() => this.updateParallax(), 16);
            
            window.addEventListener('scroll', () => {
                throttledCheck();
                throttledParallax();
            });

            window.addEventListener('resize', () => {
                throttledCheck();
            });
        }

        checkAnimations() {
            // Handle scroll animations
            this.elements.forEach(element => {
                if (utils.isInViewport(element, config.scrollOffset) && !element.classList.contains('animate-in')) {
                    element.classList.add('animate-in');
                }
            });

            // Handle counter animations
            this.counters.forEach(counter => {
                if (utils.isInViewport(counter, config.scrollOffset) && !counter.classList.contains('animate')) {
                    this.animateCounter(counter);
                }
            });
        }

        updateParallax() {
            const scrollY = window.pageYOffset;
            
            this.parallaxElements.forEach(element => {
                const speed = element.dataset.speed || config.parallaxFactor;
                const yPos = -(scrollY * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        }

        animateCounter(counter) {
            const target = parseInt(counter.dataset.target || counter.textContent);
            const duration = parseInt(counter.dataset.duration) || 2000;
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;

            counter.classList.add('animate');

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current);
            }, 16);
        }
    }

    // Particle System
    class ParticleSystem {
        constructor(container, count = 50) {
            this.container = container;
            this.count = count;
            this.particles = [];
            
            this.init();
        }

        init() {
            this.createParticles();
            this.animate();
        }

        createParticles() {
            for (let i = 0; i < this.count; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random positioning
                particle.style.left = utils.random(0, 100) + '%';
                particle.style.top = utils.random(0, 100) + '%';
                particle.style.animationDelay = utils.random(0, 3) + 's';
                particle.style.animationDuration = utils.random(2, 6) + 's';
                
                this.container.appendChild(particle);
                this.particles.push(particle);
            }
        }

        animate() {
            // Additional particle animations can be added here
        }
    }

    // Enhanced Button Effects
    class ButtonEffects {
        constructor() {
            this.buttons = document.querySelectorAll('.btn, .btn-enhanced, .category-card, .tool-card');
            this.init();
        }

        init() {
            this.buttons.forEach(button => {
                this.addRippleEffect(button);
                this.addHoverEffects(button);
            });
        }

        addRippleEffect(button) {
            button.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');

                button.appendChild(ripple);

                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        }

        addHoverEffects(button) {
            button.addEventListener('mouseenter', () => {
                button.classList.add('btn-enhanced');
            });

            button.addEventListener('mouseleave', () => {
                button.classList.remove('btn-enhanced');
            });
        }
    }

    // Page Transition Manager
    class PageTransitionManager {
        constructor() {
            this.init();
        }

        init() {
            // Add page transition classes
            document.body.classList.add('page-transition-enter');
            
            setTimeout(() => {
                document.body.classList.add('page-transition-enter-active');
                document.body.classList.remove('page-transition-enter');
            }, 50);

            // Handle navigation
            this.bindNavigationEvents();
        }

        bindNavigationEvents() {
            const links = document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]');
            
            links.forEach(link => {
                link.addEventListener('click', (e) => {
                    if (link.hostname !== window.location.hostname) return;
                    
                    e.preventDefault();
                    this.transitionToPage(link.href);
                });
            });
        }

        transitionToPage(url) {
            document.body.classList.add('page-transition-exit');
            document.body.classList.add('page-transition-exit-active');

            setTimeout(() => {
                window.location.href = url;
            }, 500);
        }
    }

    // Loading Animation Manager
    class LoadingManager {
        constructor() {
            this.loadingElements = document.querySelectorAll('.military-loader, .pulse-loader');
            this.init();
        }

        init() {
            this.showLoadingOnFormSubmit();
            this.showLoadingOnAjax();
        }

        showLoadingOnFormSubmit() {
            const forms = document.querySelectorAll('form');
            
            forms.forEach(form => {
                form.addEventListener('submit', () => {
                    this.showLoading(form);
                });
            });
        }

        showLoadingOnAjax() {
            // Intercept fetch requests
            const originalFetch = window.fetch;
            window.fetch = (...args) => {
                this.showGlobalLoading();
                return originalFetch(...args).finally(() => {
                    this.hideGlobalLoading();
                });
            };
        }

        showLoading(container) {
            const loader = document.createElement('div');
            loader.className = 'military-loading';
            loader.innerHTML = '<div></div><div></div><div></div><div></div>';
            
            container.appendChild(loader);
        }

        showGlobalLoading() {
            if (!document.querySelector('.global-loader')) {
                const loader = document.createElement('div');
                loader.className = 'global-loader military-loader';
                loader.style.position = 'fixed';
                loader.style.top = '20px';
                loader.style.right = '20px';
                loader.style.zIndex = '9999';
                
                document.body.appendChild(loader);
            }
        }

        hideGlobalLoading() {
            const loader = document.querySelector('.global-loader');
            if (loader) {
                loader.remove();
            }
        }
    }

    // Text Animation Manager
    class TextAnimationManager {
        constructor() {
            this.typingElements = document.querySelectorAll('.typing-animation');
            this.revealElements = document.querySelectorAll('.text-reveal');
            
            this.init();
        }

        init() {
            this.initTypingAnimations();
            this.initRevealAnimations();
        }

        initTypingAnimations() {
            this.typingElements.forEach(element => {
                const text = element.textContent;
                element.textContent = '';
                element.style.borderRight = '2px solid #2bbc8a';
                
                let i = 0;
                const typeWriter = () => {
                    if (i < text.length) {
                        element.textContent += text.charAt(i);
                        i++;
                        setTimeout(typeWriter, 100);
                    }
                };
                
                // Start animation when element is in view
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            typeWriter();
                            observer.unobserve(entry.target);
                        }
                    });
                });
                
                observer.observe(element);
            });
        }

        initRevealAnimations() {
            this.revealElements.forEach((element, index) => {
                element.style.animationDelay = `${index * 0.2}s`;
            });
        }
    }

    // Stagger Animation Manager
    class StaggerAnimationManager {
        constructor() {
            this.staggerContainers = document.querySelectorAll('.posts-grid, .tools-grid, .tech-grid');
            this.init();
        }

        init() {
            this.staggerContainers.forEach(container => {
                this.applyStaggerAnimation(container);
            });
        }

        applyStaggerAnimation(container) {
            const items = container.children;
            
            Array.from(items).forEach((item, index) => {
                item.classList.add('stagger-item');
                item.style.animationDelay = `${index * 0.1}s`;
            });
        }
    }

    // Performance Monitor
    class PerformanceMonitor {
        constructor() {
            this.init();
        }

        init() {
            // Monitor animation performance
            this.checkAnimationPerformance();
            
            // Reduce animations on low-end devices
            this.adaptToDeviceCapability();
        }

        checkAnimationPerformance() {
            let frameCount = 0;
            let startTime = performance.now();

            const measureFPS = () => {
                frameCount++;
                const currentTime = performance.now();
                
                if (currentTime - startTime >= 1000) {
                    const fps = frameCount;
                    frameCount = 0;
                    startTime = currentTime;
                    
                    // If FPS is too low, reduce animations
                    if (fps < 30) {
                        this.reduceAnimations();
                    }
                }
                
                requestAnimationFrame(measureFPS);
            };

            requestAnimationFrame(measureFPS);
        }

        adaptToDeviceCapability() {
            // Check for reduced motion preference
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                this.disableAnimations();
                return;
            }

            // Check device memory (if available)
            if (navigator.deviceMemory && navigator.deviceMemory < 4) {
                this.reduceAnimations();
            }

            // Check connection speed
            if (navigator.connection && navigator.connection.effectiveType === 'slow-2g') {
                this.reduceAnimations();
            }
        }

        reduceAnimations() {
            document.body.classList.add('reduced-animations');
        }

        disableAnimations() {
            document.body.classList.add('no-animations');
        }
    }

    // Initialize everything when DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
        // Initialize all animation managers
        new ScrollAnimationManager();
        new ButtonEffects();
        new LoadingManager();
        new TextAnimationManager();
        new StaggerAnimationManager();
        new PerformanceMonitor();

        // Add particle effects to specific containers
        const heroSections = document.querySelectorAll('.hero, .tool-header');
        heroSections.forEach(section => {
            if (!section.querySelector('.particle')) {
                new ParticleSystem(section, 20);
            }
        });

        // Add enhanced classes to existing elements
        const cards = document.querySelectorAll('.category-card, .tool-card, .post-card');
        cards.forEach(card => {
            card.classList.add('card-3d', 'hover-expand');
        });

        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.classList.add('btn-enhanced');
        });

        const icons = document.querySelectorAll('.fas, .fab');
        icons.forEach((icon, index) => {
            const animations = ['icon-bounce', 'icon-rotate', 'icon-shake'];
            const randomAnimation = animations[index % animations.length];
            icon.classList.add(randomAnimation);
        });

        // Add pattern backgrounds to certain sections
        const sections = document.querySelectorAll('.hero, .featured-tech, .recent-posts');
        sections.forEach(section => {
            section.classList.add('pattern-bg');
        });

        console.log('🎖️ Enhanced animations initialized successfully!');
    });

    // Add CSS for ripple effect
    const rippleCSS = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background-color: rgba(43, 188, 138, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }

        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }

        .reduced-animations * {
            animation-duration: 0.3s !important;
            transition-duration: 0.3s !important;
        }

        .no-animations * {
            animation: none !important;
            transition: none !important;
        }
    `;

    // Inject CSS
    const style = document.createElement('style');
    style.textContent = rippleCSS;
    document.head.appendChild(style);

})(); 
/* ========================================
   LAZARUS INDUSTRIAL GROUP - MAIN JAVASCRIPT
   Interactive Features and Animations
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initHeroAnimations();
    initScrollEffects();
    initCounterAnimations();
    initParticleAnimations();
    initLazyLoading();
    initSmoothScrolling();
    initVideoSwitching(); // Add video switching initialization
});

/* ========================================
   NAVIGATION FUNCTIONALITY
   ======================================== */

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const heroSection = document.querySelector('.hero');
    
    // Navbar scroll effect with hero section detection
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 200) {
            navbar.classList.add('navbar-scrolled');
            navbar.classList.remove('navbar-transparent');
            // Force charcoal background with inline styles
            navbar.style.background = '#2a2a2a';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.webkitBackdropFilter = 'blur(20px)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.classList.add('navbar-transparent');
            navbar.classList.remove('navbar-scrolled');
            // Force transparent background with inline styles
            navbar.style.background = 'transparent';
            navbar.style.backdropFilter = 'none';
            navbar.style.webkitBackdropFilter = 'none';
            navbar.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Dropdown menu functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        dropdown.addEventListener('mouseenter', function() {
            dropdownMenu.style.opacity = '1';
            dropdownMenu.style.visibility = 'visible';
            dropdownMenu.style.transform = 'translateY(0)';
        });
        
        dropdown.addEventListener('mouseleave', function() {
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.visibility = 'hidden';
            dropdownMenu.style.transform = 'translateY(-10px)';
        });
    });
}

/* ========================================
   HERO ANIMATIONS
   ======================================== */

function initHeroAnimations() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroCta = document.querySelector('.hero-cta');
    
    // Staggered animation for hero elements
    if (heroTitle) {
        const titleLines = heroTitle.querySelectorAll('.title-line');
        titleLines.forEach((line, index) => {
            setTimeout(() => {
                line.style.opacity = '1';
                line.style.transform = 'translateY(0)';
            }, index * 300);
        });
    }
    
    if (heroSubtitle) {
        setTimeout(() => {
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }, 600);
    }
    
    if (heroCta) {
        setTimeout(() => {
            heroCta.style.opacity = '1';
            heroCta.style.transform = 'translateY(0)';
        }, 900);
    }
}

/* ========================================
   SCROLL EFFECTS
   ======================================== */

function initScrollEffects() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);
    
    // Observe all elements with AOS attributes
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Parallax effect for hero video
    const heroVideo = document.querySelector('.hero-video video');
    if (heroVideo) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            heroVideo.style.transform = `translateY(${parallax}px)`;
        });
    }
    
    // Scroll indicator animation
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const windowHeight = window.innerHeight;
            
            if (scrolled > windowHeight * 0.8) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '0.7';
            }
        });
    }
}

/* ========================================
   COUNTER ANIMATIONS
   ======================================== */

function initCounterAnimations() {
    // Only animate counters that have data-count attributes and are not in hero section
    const counters = document.querySelectorAll('.stat-number:not(.hero-stats .stat-number)');
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseFloat(counter.getAttribute('data-count'));
                
                // Skip if no valid data-count attribute
                if (isNaN(target)) {
                    counterObserver.unobserve(counter);
                    return;
                }
                
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    
                    // Format number based on target
                    if (target >= 100) {
                        counter.textContent = Math.floor(current);
                    } else if (target >= 10) {
                        counter.textContent = current.toFixed(1);
                    } else {
                        counter.textContent = current.toFixed(2);
                    }
                }, 16);
                
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

/* ========================================
   PARTICLE ANIMATIONS
   ======================================== */

function initParticleAnimations() {
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach((particle, index) => {
        // Random movement animation
        const randomDelay = Math.random() * 2;
        const randomDuration = 3 + Math.random() * 2;
        
        particle.style.animationDelay = `${randomDelay}s`;
        particle.style.animationDuration = `${randomDuration}s`;
        
        // Add hover effect
        particle.addEventListener('mouseenter', function() {
            particle.style.transform = 'scale(1.5)';
            particle.style.opacity = '1';
        });
        
        particle.addEventListener('mouseleave', function() {
            particle.style.transform = 'scale(1)';
            particle.style.opacity = '0.6';
        });
    });
}

/* ========================================
   LAZY LOADING
   ======================================== */

function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    }
}

/* ========================================
   SMOOTH SCROLLING
   ======================================== */

function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ========================================
   CARD INTERACTIONS
   ======================================== */

function initCardInteractions() {
    const cards = document.querySelectorAll('.solution-card, .capability-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

/* ========================================
   FORM HANDLING
   ======================================== */

function initFormHandling() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            // Show loading state
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                submitButton.textContent = 'Message Sent!';
                submitButton.style.backgroundColor = '#28a745';
                
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    submitButton.style.backgroundColor = '';
                    form.reset();
                }, 2000);
            }, 1500);
        });
    });
}

/* ========================================
   PERFORMANCE OPTIMIZATIONS
   ======================================== */

// Throttle scroll events for better performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Debounce resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll performance
window.addEventListener('scroll', throttle(function() {
    // Scroll-based animations here
}, 16));

// Optimize resize performance
window.addEventListener('resize', debounce(function() {
    // Resize-based calculations here
}, 250));

/* ========================================
   ACCESSIBILITY ENHANCEMENTS
   ======================================== */

function initAccessibility() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only';
    skipLink.style.position = 'absolute';
    skipLink.style.top = '-40px';
    skipLink.style.left = '6px';
    skipLink.style.zIndex = '9999';
    skipLink.style.padding = '8px 16px';
    skipLink.style.backgroundColor = '#000';
    skipLink.style.color = '#fff';
    skipLink.style.textDecoration = 'none';
    skipLink.style.borderRadius = '4px';
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Keyboard navigation for dropdowns
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.nav-link');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        trigger.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
}

/* ========================================
   ERROR HANDLING
   ======================================== */

window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
    // Could send error to analytics service here
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled Promise Rejection:', e.reason);
    // Could send error to analytics service here
});

/* ========================================
   INITIALIZATION
   ======================================== */

// Initialize additional features when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initCardInteractions();
    initFormHandling();
    initAccessibility();
    initInteractiveChart();
});

// Initialize features that need window load
window.addEventListener('load', function() {
    // Any features that need all resources loaded
    console.log('Lazarus Industrial Group website loaded successfully');
});

/* ========================================
   INTERACTIVE CHART FUNCTIONALITY
   ======================================== */

function initInteractiveChart() {
    const dataPoints = document.querySelectorAll('.data-point');
    const tooltip = document.getElementById('chart-tooltip');
    
    if (!dataPoints.length || !tooltip) return;
    
    // Chart data for calculations
    const chartData = {
        2024: { current: 15, lazarus: 15 },
        2025: { current: 15, lazarus: 12 },
        2026: { current: 15, lazarus: 8 },
        2027: { current: 15, lazarus: 4 }
    };
    
    dataPoints.forEach(point => {
        point.addEventListener('mouseenter', function(e) {
            const year = this.getAttribute('data-year');
            const isLazarus = this.classList.contains('lazarus-point');
            const data = chartData[year];
            
            // Calculate savings
            const savings = data.current - data.lazarus;
            
            // Update tooltip content
            tooltip.querySelector('.tooltip-year').textContent = year;
            tooltip.querySelector('.current-value').textContent = `$${data.current}B`;
            tooltip.querySelector('.lazarus-value').textContent = `$${data.lazarus}B`;
            tooltip.querySelector('.savings-value').textContent = `$${savings}B`;
            
            // Position tooltip
            const rect = this.getBoundingClientRect();
            const chartRect = this.closest('.interactive-chart').getBoundingClientRect();
            
            tooltip.style.left = `${rect.left - chartRect.left + rect.width/2}px`;
            tooltip.style.top = `${rect.top - chartRect.top - 10}px`;
            
            // Show tooltip
            tooltip.classList.add('show');
        });
        
        point.addEventListener('mouseleave', function() {
            tooltip.classList.remove('show');
        });
        
        point.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const chartRect = this.closest('.interactive-chart').getBoundingClientRect();
            
            tooltip.style.left = `${rect.left - chartRect.left + rect.width/2}px`;
            tooltip.style.top = `${rect.top - chartRect.top - 10}px`;
        });
    });
}

// ========================================
// VIDEO SWITCHING FUNCTIONALITY
// ========================================

function initVideoSwitching() {
    console.log('Initializing video switching...');
    const videoCards = document.querySelectorAll('.video-card');
    const mainVideoImage = document.getElementById('main-video-image');
    const mainVideoCaption = document.getElementById('main-video-caption');
    
    console.log('Found video cards:', videoCards.length);
    console.log('Found main video image:', mainVideoImage);
    console.log('Found main video caption:', mainVideoCaption);
    
    // Only initialize if we have the required elements (homepage only)
    if (videoCards.length === 0 || !mainVideoImage || !mainVideoCaption) {
        console.log('Video switching elements not found, skipping initialization');
        return;
    }
    
    // Video data configuration
    const videoData = {
        1: {
            image: 'images/industrial_fieldops.jpg',
            caption: 'Leverage multiple systems to amplify productivity',
            alt: 'Multi-System Integration Demo'
        },
        2: {
            image: 'images/training_lazarus.jpg',
            caption: 'See a demo from our Director of Engineering',
            alt: 'System Demo'
        },
        3: {
            image: 'images/refurb_lazarus.jpg',
            caption: 'AI-based monitoring adjusts operations in real time',
            alt: 'Adaptive Control Demo'
        }
    };
    
    // Add click event listeners to video cards
    videoCards.forEach((card, index) => {
        console.log(`Adding click listener to card ${index + 1}`);
        card.addEventListener('click', function() {
            console.log('Card clicked!', this.getAttribute('data-video'));
            const videoId = this.getAttribute('data-video');
            
            // Remove active class from all cards
            videoCards.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked card
            this.classList.add('active');
            
            // Update main video content
            if (videoData[videoId]) {
                const data = videoData[videoId];
                console.log('Updating video content:', data);
                
                // Fade out effect
                mainVideoImage.style.opacity = '0';
                mainVideoCaption.style.opacity = '0';
                
                // Update content after fade
                setTimeout(() => {
                    mainVideoImage.src = data.image;
                    mainVideoImage.alt = data.alt;
                    mainVideoCaption.textContent = data.caption;
                    
                    // Fade in effect
                    mainVideoImage.style.opacity = '1';
                    mainVideoCaption.style.opacity = '1';
                }, 150);
            }
        });
    });
}



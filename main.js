// Economies.Digital — Main Script

document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const toggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggle) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile nav on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Scroll-based fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add fade-in class to elements
    const animateElements = [
        '.section-label',
        '.section-title',
        '.topic-card',
        '.dispatch-item',
        '.manifesto-text',
        '.manifesto-principles',
        '.about-text',
        '.about-stats',
        '.principle',
        '.stat'
    ];

    animateElements.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(13, 17, 23, 0.95)';
        } else {
            navbar.style.background = 'rgba(13, 17, 23, 0.85)';
        }
    }, { passive: true });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Staggered animation for topic cards
    document.querySelectorAll('.topic-card').forEach((card, i) => {
        card.style.transitionDelay = `${i * 0.08}s`;
    });

    document.querySelectorAll('.dispatch-item').forEach((item, i) => {
        item.style.transitionDelay = `${i * 0.1}s`;
    });

    document.querySelectorAll('.principle').forEach((item, i) => {
        item.style.transitionDelay = `${i * 0.1}s`;
    });

    document.querySelectorAll('.stat').forEach((item, i) => {
        item.style.transitionDelay = `${i * 0.1}s`;
    });
});

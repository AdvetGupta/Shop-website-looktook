/**
 * scrollAnimations.js
 * IntersectionObserver logic for triggering scroll animations,
 * updating active nav states, and interactive scroll-linked micro-effects.
 */

function initScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    // Reveal elements on scroll into viewport
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => revealObserver.observe(el));

    // Update active nav link based on scroll position
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('data-section') === currentId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.25
    });

    sections.forEach(sec => sectionObserver.observe(sec));

    // Interactive Scroll-Driven Header Parallax & Subtle Depth effect
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const orbitStage = document.querySelector('.hero-orbit-stage');
        const heroCenter = document.querySelector('.hero-center');

        if (orbitStage && scrolled < 900) {
            orbitStage.style.transform = `translate(-50%, calc(-50% + ${scrolled * 0.18}px)) scale(${Math.max(0.85, 1 - scrolled * 0.0003)})`;
        }

        if (heroCenter && scrolled < 900) {
            heroCenter.style.transform = `translateY(${scrolled * 0.12}px)`;
            heroCenter.style.opacity = `${Math.max(0, 1 - scrolled * 0.0018)}`;
        }
    }, { passive: true });

    // Interactive 3D Card Tilt on Mouse Move
    setupInteractiveTilt();
}

/**
 * Adds luxury 3D tilt interaction to featured cards and trust badges on mouse hover
 */
function setupInteractiveTilt() {
    const tiltCards = document.querySelectorAll('.collection-card, .product-card, .interactive-tilt');
    
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;
            
            const tiltX = -deltaY * 7;
            const tiltY = deltaX * 7;
            
            card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-8px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

/**
 * Main application entry point.
 * Loads HTML components dynamically and initializes all scripts sequentially.
 */

document.addEventListener('DOMContentLoaded', async () => {
    // List of components to load
    const components = [
        { id: 'navbar-container', url: 'components/navbar.html' },
        { id: 'hero-container', url: 'components/hero.html' },
        { id: 'featured-container', url: 'components/featuredCollections.html' },
        { id: 'bestsellers-container', url: 'components/bestSellers.html' },
        { id: 'testimonials-container', url: 'components/testimonials.html' },
        { id: 'footer-container', url: 'components/footer.html' }
    ];

    try {
        // Load all components concurrently
        const loadPromises = components.map(async (comp) => {
            const container = document.getElementById(comp.id);
            if (!container) return;
            try {
                const response = await fetch(comp.url);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const html = await response.text();
                container.innerHTML = html;
            } catch (e) {
                console.error(`Failed to load ${comp.url}:`, e);
                container.innerHTML = `<p style="color:red; margin: 20px;">Failed to load ${comp.url}. Are you running a local web server?</p>`;
            }
        });

        await Promise.all(loadPromises);
        
        // Hide preloader after everything renders
        setTimeout(() => {
            const preloader = document.getElementById('preloader');
            if(preloader) preloader.classList.add('hidden');
        }, 800);

        // Initialize scripts only after full DOM injection
        if (typeof initCircularMotion === 'function') initCircularMotion();
        if (typeof initScrollAnimations === 'function') initScrollAnimations();
        if (typeof initHoverAnimations === 'function') initHoverAnimations();
        if (typeof initVerticalTabs === 'function') initVerticalTabs();
        if (typeof initSearchFunctions === 'function') initSearchFunctions();
        
        // Wire up appointment form WhatsApp trigger
        const apptBtn = document.getElementById('appointmentSubmit');
        if (apptBtn) {
            apptBtn.addEventListener('click', () => {
                const name = document.getElementById('appt-name')?.value || 'Guest';
                const phone = document.getElementById('appt-phone')?.value || 'Not provided';
                const date = document.getElementById('appt-date')?.value || 'Flexible';
                const time = document.getElementById('appt-time')?.value || 'Anytime';
                const interest = document.getElementById('appt-interest')?.value || 'General Visit';

                const message = encodeURIComponent(
                    `Hello Look Took Jewellers! I would like to book a showroom visit appointment:\n\n` +
                    `• Name: ${name}\n` +
                    `• Phone: ${phone}\n` +
                    `• Preferred Date: ${date}\n` +
                    `• Preferred Time: ${time}\n` +
                    `• Interest: ${interest}`
                );

                window.open(`https://wa.me/919424058434?text=${message}`, '_blank');
            });
        }
        
    } catch (err) {
        console.error("Critical error loading the app:", err);
    }
});

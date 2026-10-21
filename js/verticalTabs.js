/**
 * verticalTabs.js (now navigationController.js)
 * Manages sticky top navbar scroll effects, mobile drawer toggle,
 * animated logo expansion modal, in-page visiting card modal, and smooth scrolling.
 */

function initVerticalTabs() {
    const navbar = document.getElementById('topNav');
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerBackdrop = document.getElementById('drawerBackdrop');
    const drawerClose = document.getElementById('drawerClose');

    // Sticky Navbar Background on Scroll
    window.addEventListener('scroll', () => {
        if (!navbar) return;
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });

    // Open Mobile Drawer
    if (mobileToggle && mobileDrawer && drawerBackdrop) {
        mobileToggle.addEventListener('click', () => {
            mobileDrawer.classList.add('open');
            drawerBackdrop.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        const closeDrawer = () => {
            mobileDrawer.classList.remove('open');
            drawerBackdrop.classList.remove('active');
            document.body.style.overflow = '';
        };

        if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
        drawerBackdrop.addEventListener('click', closeDrawer);

        // Close on link click
        document.querySelectorAll('.drawer-link').forEach(link => {
            link.addEventListener('click', closeDrawer);
        });
    }

    // ============================================
    // Logo Click Animated Fullscreen Modal
    // ============================================
    const logoModal = document.getElementById('logoModal');
    const logoModalBackdrop = document.getElementById('logoModalBackdrop');
    const logoModalClose = document.getElementById('logoModalClose');
    const navLogoTrigger = document.getElementById('navLogoTrigger');
    const drawerLogoTrigger = document.getElementById('drawerLogoTrigger');
    const heroCrestTrigger = document.querySelector('.hero-crest-badge');

    const openLogoModal = (e) => {
        if (e) e.preventDefault();
        if (!logoModal) return;
        logoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeLogoModal = () => {
        if (!logoModal) return;
        logoModal.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (navLogoTrigger) navLogoTrigger.addEventListener('click', openLogoModal);
    if (drawerLogoTrigger) drawerLogoTrigger.addEventListener('click', openLogoModal);
    if (heroCrestTrigger) {
        heroCrestTrigger.style.cursor = 'pointer';
        heroCrestTrigger.setAttribute('title', 'Click to view full Brand Seal');
        heroCrestTrigger.addEventListener('click', openLogoModal);
    }

    if (logoModalClose) logoModalClose.addEventListener('click', closeLogoModal);
    if (logoModalBackdrop) logoModalBackdrop.addEventListener('click', closeLogoModal);

    // ============================================
    // In-Page Visiting Card Modal (Blurred Background)
    // ============================================
    const visitingModal = document.getElementById('visitingCardModal');
    const visitingBackdrop = document.getElementById('visitingCardBackdrop');
    const visitingClose = document.getElementById('visitingCardClose');
    const footerCardTrigger = document.getElementById('footerCardTrigger');
    const footerQrTrigger = document.getElementById('footerQrTrigger');

    const openVisitingCard = (e) => {
        if (e) e.preventDefault();
        if (!visitingModal) return;
        visitingModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeVisitingCard = () => {
        if (!visitingModal) return;
        visitingModal.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (footerCardTrigger) footerCardTrigger.addEventListener('click', openVisitingCard);
    if (footerQrTrigger) footerQrTrigger.addEventListener('click', openVisitingCard);
    if (visitingClose) visitingClose.addEventListener('click', closeVisitingCard);
    if (visitingBackdrop) visitingBackdrop.addEventListener('click', closeVisitingCard);

    // Keyboard ESC key to close any active modal
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (logoModal && logoModal.classList.contains('active')) closeLogoModal();
            if (visitingModal && visitingModal.classList.contains('active')) closeVisitingCard();
        }
    });

    // ---- Smooth Scroll for All Anchor Links ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Ignore if it's a modal trigger
            if (this.id === 'navLogoTrigger' || this.id === 'footerCardTrigger') return;

            const href = this.getAttribute('href');
            if (!href || href === '#' || href === '#visiting-card') return;
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                e.preventDefault();
                const navHeight = navbar ? navbar.offsetHeight : 70;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

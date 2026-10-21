/**
 * hoverAnimations.js
 * Extends any hover behaviors not easily achieved via CSS.
 * For example: Reviews Carousel Auto Slider and manual dot selection.
 */

function initHoverAnimations() {
    // ---- Best Sellers Carousel ----
    const carouselTrack = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    let carouselIndex = 0;

    if (carouselTrack && prevBtn && nextBtn) {
        function getCardsPerView() {
            if (window.innerWidth <= 600) return 1;
            if (window.innerWidth <= 1024) return 2;
            return 3;
        }

        function getCardWidth() {
            const card = carouselTrack.querySelector('.product-card');
            if (!card) return 310;
            return card.offsetWidth + 30; // card width + gap
        }

        function updateCarousel() {
            const cardWidth = getCardWidth();
            const maxIndex = carouselTrack.children.length - getCardsPerView();
            carouselIndex = Math.max(0, Math.min(carouselIndex, maxIndex));
            carouselTrack.style.transform = `translateX(-${carouselIndex * cardWidth}px)`;
        }

        prevBtn.addEventListener('click', () => {
            carouselIndex--;
            updateCarousel();
        });

        nextBtn.addEventListener('click', () => {
            carouselIndex++;
            updateCarousel();
        });

        window.addEventListener('resize', () => {
            carouselIndex = 0;
            updateCarousel();
        });
    }

    // ---- Customer Reviews Auto-Slide ----
    const reviewsTrack = document.getElementById('reviewsTrack');
    const reviewDots = document.querySelectorAll('.review-dot');
    let reviewIndex = 0;
    
    if (reviewsTrack && reviewDots.length > 0) {
        const totalReviews = document.querySelectorAll('.review-card').length;

        function updateReviews() {
            reviewsTrack.style.transform = `translateX(-${reviewIndex * 100}%)`;
            reviewDots.forEach((dot, i) => {
                dot.classList.toggle('active', i === reviewIndex);
            });
        }

        reviewDots.forEach(dot => {
            dot.addEventListener('click', () => {
                reviewIndex = parseInt(dot.getAttribute('data-index'));
                updateReviews();
            });
        });

        // Auto-slide reviews
        setInterval(() => {
            reviewIndex = (reviewIndex + 1) % totalReviews;
            updateReviews();
        }, 5000);
    }
}

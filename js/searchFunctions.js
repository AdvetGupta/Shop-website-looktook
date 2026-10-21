/**
 * searchFunctions.js
 * Logic for the hero search bar interactions.
 */

function initSearchFunctions() {
    const searchBtn = document.querySelector('.hero-search-btn');
    const searchInput = document.getElementById('luxury-search');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query) {
                console.log(`Searching for: ${query}`);
                // In a real app, redirect or filter products here.
                alert(`Search functionality triggered for: ${query}`);
            }
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
    }
}

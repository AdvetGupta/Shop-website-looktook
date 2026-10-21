# Look Took Jewellers - Refactored Website

This directory contains the completely refactored version of the Look Took Jewellers front-end architecture.

## Overview

The codebase is organized into a modular structure:
- `/assets`: Contains `images/`, `fonts/`, `icons/`, `videos/`.
- `/components`: Independent, reusable HTML fragments (`hero.html`, `navbar.html`, `featuredCollections.html`, `bestSellers.html`, `testimonials.html`, `footer.html`).
- `/css`: Stylesheets organized by responsibility (`global.css`, `navbar.css`, `hero.css`, `showcase.css`, `sections.css`, `animations.css`).
- `/js`: Single-responsibility JavaScript modules (`main.js`, `circularMotion.js`, `scrollAnimations.js`, `hoverAnimations.js`, `verticalTabs.js`, `searchFunctions.js`).
- `index.html`: Main consumer-facing layout wrapper.
- `admin.html`: Content and catalogue management dashboard.

## Key Features

1. **Luxury Theme**: High-end gold, ivory, and deep charcoal styling inspired by heritage luxury jewellery brands.
2. **Smooth Bubble Drop Animation**: Replaced orbiting rings with a fluid, downward dropping bubble animation for product showcases.
3. **Product Catalogue & Enquiries**: Curated collections, best sellers, and new arrivals with instant WhatsApp enquiry buttons (prices removed to encourage direct customer consultation).
4. **Trust & Certifications**: BIS Hallmark guarantee, 100% purity commitment, 10+ years legacy.
5. **Showroom & Maps**: Physical store location at Sarafa Bazaar, Gogawan with interactive Google Map directions and showroom timings.
6. **Appointment Booking**: WhatsApp-integrated appointment booking for private showroom consultations.
7. **No Online Payment**: Clean showroom-first experience designed to build trust and footfall.

## How to Run

Because this site dynamically loads components via `fetch()`, run it using a local HTTP server:

### Option 1: VS Code Live Server
- Open the `/website` folder in VS Code.
- Right-click `index.html` and choose **"Open with Live Server"**.

### Option 2: Python Web Server
- Open a terminal in the `/website` folder.
- Run: `python -m http.server 8000`
- Open [http://localhost:8000](http://localhost:8000)

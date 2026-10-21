/**
 * circularMotion.js / bubbleDrop.js
 * Handles continuous bubble popping interactions, orbit satellite controls,
 * and mouse-following luxury parallax effects.
 */

function initCircularMotion() {
    const hero = document.querySelector('.hero-section');
    if (!hero) return;

    // Interactive Bubble Pop upon click
    const bubblePods = document.querySelectorAll('.bubble-pod');
    bubblePods.forEach(pod => {
        pod.addEventListener('click', (e) => {
            e.stopPropagation();
            pod.classList.add('bubble-popped');
            
            // Re-spawn after short delay
            setTimeout(() => {
                pod.classList.remove('bubble-popped');
            }, 800);
        });
    });

    // Orbit speed up on hover
    const orbitTrack = document.querySelector('.hero-orbit-track');
    const satellites = document.querySelectorAll('.orbit-satellite');
    
    satellites.forEach(sat => {
        sat.addEventListener('mouseenter', () => {
            if (orbitTrack) orbitTrack.style.animationPlayState = 'paused';
        });
        sat.addEventListener('mouseleave', () => {
            if (orbitTrack) orbitTrack.style.animationPlayState = 'running';
        });
    });

    // Subtle 3D Mouse Parallax over the Hero area
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;

        const particles = hero.querySelectorAll('.floating-particle');
        particles.forEach((p, idx) => {
            const factor = (idx + 1) * 16;
            p.style.transform = `translate(${relX * factor}px, ${relY * factor}px)`;
        });

        const orbitStage = hero.querySelector('.hero-orbit-stage');
        if (orbitStage) {
            orbitStage.style.transform = `translate(calc(-50% + ${relX * 22}px), calc(-50% + ${relY * 22}px))`;
        }
    });

    hero.addEventListener('mouseleave', () => {
        const orbitStage = hero.querySelector('.hero-orbit-stage');
        if (orbitStage) {
            orbitStage.style.transform = `translate(-50%, -50%)`;
        }
    });
}

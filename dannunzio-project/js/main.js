/**
 * Main JavaScript file for D'Annunzio Website
 * Handles mobile menu, navbar scroll effects, scroll spy, and video player
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ========================================
       Mobile Menu Toggle with Focus Trap
       ======================================== */
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            const isActive = mobileMenu.classList.toggle('active');
            
            // Update ARIA attributes for accessibility
            menuToggle.setAttribute('aria-expanded', isActive);
            
            // Toggle icon
            const icon = menuToggle.querySelector('span');
            if (icon) {
                icon.textContent = isActive ? 'close' : 'menu';
            }
        });

        // Close mobile menu when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('.mobile-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                const icon = menuToggle.querySelector('span');
                if (icon) icon.textContent = 'menu';
            });
        });

        // Close menu on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                const icon = menuToggle.querySelector('span');
                if (icon) icon.textContent = 'menu';
                menuToggle.focus();
            }
        });
    }

    /* ========================================
       Sticky Navbar Background (Throttled)
       ======================================== */
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
        ticking = false;
    };

    const requestTick = () => {
        if (!ticking) {
            window.requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    };

    window.addEventListener('scroll', requestTick, { passive: true });

    /* ========================================
       Scroll Spy for Active Navigation Links
       ======================================== */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

    const observerOptions = {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));

    /* ========================================
       Intersection Observer for Scroll Animations
       ======================================== */
    const animationObserverOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve after animation triggers (performance)
                animationObserver.unobserve(entry.target);
            }
        });
    }, animationObserverOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach(el => animationObserver.observe(el));

    /* ========================================
       Video Player Logic with Error Handling
       ======================================== */
    const videoPlaceholder = document.getElementById('video-placeholder');
    const video = document.getElementById('main-video');

    if (videoPlaceholder && video) {
        videoPlaceholder.addEventListener('click', () => {
            videoPlaceholder.classList.add('hidden');
            video.classList.remove('hidden');
            
            // Play video with error handling
            const playPromise = video.play();
            
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        // Video started playing successfully
                        video.focus();
                    })
                    .catch((error) => {
                        console.error('Errore durante la riproduzione del video:', error);
                        // Restore placeholder if video fails
                        videoPlaceholder.classList.remove('hidden');
                        video.classList.add('hidden');
                        alert('Impossibile riprodurre il video. Verifica la connessione o riprova.');
                    });
            }
        });

        // Handle video errors
        video.addEventListener('error', (e) => {
            console.error('Errore nel caricamento del video:', e);
            videoPlaceholder.classList.remove('hidden');
            video.classList.add('hidden');
        });
    }
});

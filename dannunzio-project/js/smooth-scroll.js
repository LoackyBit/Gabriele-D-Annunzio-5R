/**
 * Smooth Scroll Enhancement
 * Provides smooth scrolling behavior for anchor links with offset for fixed header
 */

document.addEventListener('DOMContentLoaded', () => {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    const headerOffset = 80; // Fixed navbar height + padding

    /**
     * Handles smooth scroll to target element
     * @param {Event} e - Click event
     */
    const handleSmoothScroll = function(e) {
        const targetId = this.getAttribute('href');
        
        // Skip if href is just '#' or empty
        if (!targetId || targetId === '#') return;

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            e.preventDefault();

            // Calculate scroll position with header offset
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            // Smooth scroll to target
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            // Close mobile menu if open
            const mobileMenu = document.querySelector('.mobile-menu');
            const menuToggle = document.querySelector('.menu-toggle');
            
            if (mobileMenu?.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                
                if (menuToggle) {
                    menuToggle.setAttribute('aria-expanded', 'false');
                    const icon = menuToggle.querySelector('span');
                    if (icon) icon.textContent = 'menu';
                }
            }

            // Update URL without jumping
            if (history.pushState) {
                history.pushState(null, null, targetId);
            }

            // Focus target for accessibility
            targetElement.setAttribute('tabindex', '-1');
            targetElement.focus();
            
            // Remove tabindex after focus
            setTimeout(() => {
                targetElement.removeAttribute('tabindex');
            }, 100);
        }
    };

    // Attach event listeners to all smooth scroll links
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', handleSmoothScroll);
    });

    // Handle direct hash navigation on page load
    if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        
        if (targetElement) {
            setTimeout(() => {
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }, 100);
        }
    }
});

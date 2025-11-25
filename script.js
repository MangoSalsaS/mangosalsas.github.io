document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const header = document.querySelector('header');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');

            // Check if the link is an internal anchor link
            if (targetId.startsWith('#')) {
                const targetElement = document.getElementById(targetId.substring(1)); // Get the section ID

                if (targetElement) {
                    const headerHeight = header.offsetHeight; // Get dynamic header height
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            } else {
                // For external links or other pages, allow default navigation
                window.location.href = targetId;
            }
        });
    });
});

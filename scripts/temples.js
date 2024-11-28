document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('nav ul');

    // Toggle navigation menu visibility
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Change hamburger icon to 'X' when menu is open
        if (navMenu.classList.contains('active')) {
            hamburger.textContent = '✖'; // X symbol
        } else {
            hamburger.textContent = '☰'; // Hamburger symbol
        }
    });
});

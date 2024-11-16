document.addEventListener('DOMContentLoaded', () => {
    let menuicon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    // Handle scroll event
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY; 
            let offset = sec.offsetTop - 150;  // Section offset
            let height = sec.offsetHeight;  // Section height
            let id = sec.getAttribute('id');  // Section ID

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });
    };

    // Toggle menu visibility on icon click
    menuicon.addEventListener('click', () => {
        // Toggle icon to 'x' and show/hide navbar
        menuicon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });
});

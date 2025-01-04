document.addEventListener('DOMContentLoaded', () => {
    let menuicon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    if (!localStorage.getItem('isFirstVisit')) {
        localStorage.setItem('isFirstVisit', 'true');
        document.getElementById('preloader').style.display = 'flex';
        document.getElementById('content').style.display = 'none';
    } else {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });
    };

    menuicon.addEventListener('click', () => {
        menuicon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });
});

document.getElementById('toggle-theme').addEventListener('click', function() {
    const currentMainColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color').trim();
    const currentSecondBgColor = getComputedStyle(document.documentElement).getPropertyValue('--second-bg-color').trim();
    
    const projectSection = document.getElementById('project');
    if (currentMainColor === '#f60b0b') {
        document.documentElement.style.setProperty('--main-color', 'cyan');
        document.documentElement.style.setProperty('--second-bg-color', 'rgb(0, 48, 48)');

        projectSection.style.backgroundImage = "url('img/cyan.jpg')";
    } else {
        document.documentElement.style.setProperty('--main-color', '#f60b0b');
        document.documentElement.style.setProperty('--second-bg-color', '#1b0000');

        projectSection.style.backgroundImage = "url('img/back.jpg')";
    }
});

window.addEventListener('load', function () {
    setTimeout(function() {
        document.getElementById('preloader').style.opacity = '0';
    }, 0);

    setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 10000);
});

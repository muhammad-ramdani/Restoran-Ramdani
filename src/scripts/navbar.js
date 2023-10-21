const hamburgerMenu = document.querySelector('header nav .hamburger-menu input');
const nav = document.querySelector('header nav ul');

hamburgerMenu.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

hamburgerMenu.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        nav.classList.toggle('slide');
    }
});
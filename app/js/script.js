const menuBurger = document.querySelector('.header__hamburger');
if (menuBurger) {
    const menuMobile = document.querySelector('.header__bottom_right');
    menuBurger.addEventListener('click', function (e) {
        document.body.classList.toggle('lock')
        menuBurger.classList.toggle('active');
        menuMobile.classList.toggle('active');
        window.scrollTo(0, 0);
    })
}
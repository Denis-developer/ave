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

let catalogImg = document.querySelectorAll('.catalog-item__img');
let catalogPreview = document.querySelectorAll('.catalog-preview__img');

for (let i = 0; i < catalogPreview.length; i++) {
    catalogPreview[i].addEventListener('mouseover', function (e) {
        let srcImg = this.getAttribute('src');
        let attrImg = this.getAttribute('data-catalogImg');
        for (let i = 0; i < catalogImg.length; i++) {
            if (catalogImg[i].getAttribute('data-catalogImg') == attrImg) {
                if (!(catalogImg[i].getAttribute('src') == srcImg)) {
                    catalogImg[i].style.opacity = "0";
                    setTimeout(() => catalogImg[i].setAttribute('src', srcImg), 500);
                    setTimeout(() => catalogImg[i].style.opacity = "1", 500);
                }
            }

        }
    })

}


let menuLink = document.querySelectorAll('.header-menu__link');
for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', function (e) {
        if (this.nextSibling) {
            e.preventDefault();
        }
    })
}


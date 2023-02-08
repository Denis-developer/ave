$(document).ready(function () {

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

    // for (let i = 0; i < catalogImg.length; i++) {
    //     console.log(catalogImg[i].getAttribute('data-catalogImg'));
    // }

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

    // $('.catalog-item').slick({
    //     infinite: false,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false
    // });
});

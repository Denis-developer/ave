"use strict"

document.addEventListener('DOMContentLoaded', function () {


    // Burger menu
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


    // Catalog preview front and back
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

    // Validation form
    let form = document.querySelector('.auth-register'),
        formCheckbox = document.querySelector('.auth-form__checkbox'),
        labelCheckbox = document.querySelector('.auth-form__label'),
        formPassword = document.querySelector(".auth-form__pass_1"),
        formConfirmPassword = document.querySelector(".auth-form__pass_2");

    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(form);
        let formData = new FormData(form);

        if(error === 0) {
            // form.classList.add('_sending');
            // let response = await fetch((sendmail.php), {
            //     method: 'POST',
            //     body: formData
            // })
            // if(response.ok) {
            //     let result = await response.json();
            //     alert(result.message);
            //     form.reset();
            // }
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');
        for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            }
            else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            }
            else if (input.classList.contains('_pass')) {
                formAddError(input);
                error++;
            }
            if(input.value === '') {
                formAddError(input);
                error++;
            }
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

})

// function validatePassword() {
//     if (formPassword.value != formConfirmPassword.value) {
//         formConfirmPassword.setCustomValidity("Passwords Don't Match");
//     }
//     else {
//         formConfirmPassword.setCustomValidity('');
//     }
// }

// formPassword.onchange = validatePassword;
// formConfirmPassword.onkeyup = validatePassword;

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     if (!formCheckbox.checked) {
//         labelCheckbox.classList.add('auth-form__label_wrong');
//     }
//     else {
//         labelCheckbox.classList.remove('auth-form__label_wrong');
//     }
// })





// let menuLink = document.querySelectorAll('.header-menu__link');
// for (let i = 0; i < menuLink.length; i++) {
//     menuLink[i].addEventListener('click', function (e) {
//         if (this.nextSibling) {
//             e.preventDefault();
//         }
//     })
// }


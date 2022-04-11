const aboutSwiper = new Swiper('.about-slider', {
    pagination: {
        // Пагинация
        el: '.about-slider__pagination',
        // Булеты
        type: 'bullets',
        clickable: true,
    },
    // Прокручивание курсором
    simulateTouch: true,
    // Бесконечность
    loop: true,
    // Автопрокрутка
    autoplay: {
        delay: 1000,
    },
    // Скорость прокрутки
    speed: 800,
    // Смена прозрачности слайда
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
})
let whatSlider = new Swiper('.what-slider', {
    pagination: {
        // Пагинация
        el: '.what-slider__pagination',
        // Булеты
        type: 'bullets',
        clickable: true,
    },
    // Прокручивание курсором
    simulateTouch: true,
    // Бесконечность
    loop: true,
    // Скорость прокрутки
    speed: 800,
    // Смена прозрачности слайда
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});

let whatDescriptionSlider = new Swiper('.what-descriptionSlider', {
    // Прокручивание курсором
    simulateTouch: true,
    // Бесконечность
    loop: true,
    // Скорость прокрутки
    speed: 800,
    // Смена прозрачности слайда
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    navigation: {
        prevEl: '.what-descriptionSlider__button-prev',
        nextEl: '.what-descriptionSlider__button-next',
    },
});

//Связь двух слайдеров
whatSlider.controller.control = whatDescriptionSlider;
whatDescriptionSlider.controller.control = whatSlider;

// Нажатие на ссылку => Вызов события который добавляет класс к одному элементу и удаляет у первого и наоборот

var servicesItem = document.querySelectorAll('.services__item');
for (let index = 0; index < servicesItem.length; index++) {
    servicesItem[index].addEventListener("click", function (event) {
        if (event.target.closest('.item-cover__knowMore')) {
            let servicesItemCover = document.querySelectorAll('.services__item-cover');
            let servicesItemCoverFull = document.querySelectorAll('.services__item-cover-full');
            servicesItemCover[index].classList.remove('active');
            servicesItemCoverFull[index].classList.add('active');
        }
        if (event.target.closest('.item-cover__close-link')) {
            let servicesItemCover = document.querySelectorAll('.services__item-cover');
            let servicesItemCoverFull = document.querySelectorAll('.services__item-cover-full');
            servicesItemCover[index].classList.add('active');
            servicesItemCoverFull[index].classList.remove('active');
        }
    })
}
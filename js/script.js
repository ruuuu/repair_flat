https://swiperjs.com/swiper-api:

new Swiper('.hero__slider', {
      slidesPerView: 2, // число видимых слайдов
      spaceBetween: 20, // расстяние между слайдами

      loop: true,

      // // If we need pagination
      // pagination: {
      //       el: '.swiper-pagination',
      // },

      // // Navigation arrows
      navigation: {
            nextEl: '.hero__slider-btn--next',
            prevEl: '.hero__slider-btn--prev',
      },

      autoplay: { //  слвдйер автоматически будет крутиться
            delay: 3000, // чеерз каждые 3 секунды меняется слайд
      },

      breakpoints: {
            320: { // для  >320 
                  slidesPerView: 1,
            },

            560: { // для  >560 
                  spaceBetween: 8,
                  slidesPerView: 2,
            },
      }

});


// калькулятор:
//.js-calc-form
// .js-square
// .
const calcForm = document.querySelector('.js-calc-form');
const totalSquare = document.querySelector('.js-square');
const totalPrice = document.querySelector('.js-total-price');

calcForm.addEventListener('submit', (evt) => {
      evt.preventDefault();                     // чтобы страница не перезагружалась после отправки формы
      console.log(calcForm.width.value);        // обращаеимся к значеию атрибута name у поля
      console.log(calcForm.length.value);
      console.log(calcForm.tariff.value);

      if (calcForm.width.value && calcForm.length.value > 0) {
            const square = calcForm.width.value * calcForm.length.value;
            totalSquare.textContent = square;
      }

});
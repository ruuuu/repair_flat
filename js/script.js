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

      disableOnInteraction: true,  // не тключать автоплей когда повзимдействием со садйером

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

const calcForm = document.querySelector('.js-calc-form');
const totalSquare = document.querySelector('.js-square');
const totalPrice = document.querySelector('.js-total-price');
const calcResultWrapper = document.querySelector('.calc__result-wrapper');
const submitBtn = document.querySelector('.js-submit'); // кнопка Рассчитать


const tariff = {
      economy: 550,
      comfort: 1400,
      premium: 2700,
};



calcForm.addEventListener('input', (evt) => {

      if (calcForm.width.value && calcForm.length.value > 0) {          // если оба поля зааполнены
            submitBtn.disabled=false;                                   // раздизейбливаем кнпоку
      }
      else{
            submitBtn.disabled=true;
      }
});



calcForm.addEventListener('submit', (evt) => {
      evt.preventDefault();                     // чтобы страница не перезагружалась после отправки формы
      // console.log(calcForm.width.value);        // обращаеимся к значеию атрибута name  у поля: calcForm.width  где name=width
      //console.log(calcForm.length.value);
      // console.log(calcForm.tariff.value);

      if (calcForm.width.value && calcForm.length.value > 0) {
            calcResultWrapper.style.display = 'block';

            const square = calcForm.width.value * calcForm.length.value;
            totalSquare.textContent = `${square} кв м`;

            const price = tariff[calcForm.tariff.value] * square;
            totalPrice.textContent = `${price} руб`;
      }

});
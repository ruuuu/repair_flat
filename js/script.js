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

      disableOnInteraction: false,  // не тключать автоплей когда повзимдействием со садйером

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




const scrollController = {
      scrollPosition: 0,


      disabledScroll() {  // убираем скролл, чтоб станица не скроллилась по вертикали
        scrollController.scrollPosition = window.scrollY;  // запоминаем где находится скролл

        document.body.style.cssText = `
          overflow: hidden;
          position: fixed;
          top: -${scrollController.scrollPosition}px;
          left: 0;
          height: 100vh;
          width: 100vw;
          padding-right: ${window.innerWidth - document.body.offsetWidth}px; 
        `;

        document.documentElement.style.scrollBehavior = 'unset';        // убираем плавную прокрутку
      },


      enabledScroll() {  //  отображение скролла, чтобы страница скролилась (по верткали)
        document.body.style.cssText = '';

        window.scroll({ top: scrollController.scrollPosition });

        document.documentElement.style.scrollBehavior = '';
      },
};


// мод окно:
const modalController = ({ modal,  btnOpen, btnClose, time=300 }) => { //  декструткризация

      const buttonElems = document.querySelectorAll(btnOpen);      // кнпоки по нажатию на которую откроется мод окно
      const modalElem = document.querySelector(modal);             // оверлей(overlay) с  мод окном
  
      // начальгные стили окна:
      modalElem.style.cssText = `
          display: flex;
          visibility: hidden;
          opacity: 0;
          transition: opacity ${time}ms easy-in-out; 
      `;
  
  
      // открыnие модалки:
      const openModal = () => {
          modalElem.style.visibility = 'visible';                 //  показваем окно
          modalElem.style.opacity = 1;                            // у окна убираем прозрачность(чтоыб окно было видимым
          
      // window это объект браузера:
          window.addEventListener('keydown', closeModal);         // собыите keydown это событие нажатия клавиши
          scrollController.disabledScroll();                      // отключаем скролл
      };
  
  

      const closeModal = (evt) => {            //  event нужен чтоы определить на какой элемент было нажатие,  event создется при  наступлении события
          const target = evt.target;            // получим элемент на котрый нажали
  
          if (target === modalElem || (btnClose && target.closest(btnClose)) || evt.code ==='Escape') {           // если нажали на modalElem или если у target или  его родителя  есть класс .modal__close
              modalElem.style.opacity = 0;      //  окно не будет отображаться
  
              setTimeout(() => {
                  modalElem.style.visibility = 'hidden';             //  показваем окно
                  scrollController.enabledScroll();                  // вклюаем скролл
            }, time); //  через 300 мс переданая фукния запустится
  
              window.removeEventListener('keydown', closeModal);          // снимаем обработчик события, чтоыб при каждом нажатии на escape, closeModal не выызвалась, выызваем ее только если нажали на клавишу  прио ткрытом окне
          }
      };
  
  
      buttonElems.forEach((buttonElem) => {                       // на каждую кнпку навешиваем событие клика
          buttonElem.addEventListener('click', openModal);        //   как тлоько произодйет клик, так запутсится функция
      });
  
  
      modalElem.addEventListener('click', closeModal);
  };
  
  
  
  
  modalController({
      modal: '.modal', //переаем селектор модалки
      btnOpen:  '.js-order', //  селктор кнпоки откытия модалки
      btnClose:'.modal__close', //  селктор кнпоки закрытия модалки
      time: 1000,
  }); // вызов, передаем объект
  
  

  
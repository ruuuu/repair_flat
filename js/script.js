https://swiperjs.com/swiper-api:

new Swiper('.hero__slider', {
      slidesPerView: 2, // число видимых слайдов
      spaceBetween: 20, // расстяние между слайдами
      // Optional parameters
      // direction: 'vertical',
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
      }

});
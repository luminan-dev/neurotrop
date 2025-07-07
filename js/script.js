var swiper = new Swiper(".intro-swiper", {
      navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
        clickable: "true"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
var swiper = new Swiper(".bottom-swiper", {
    navigation: {
        nextEl: ".next-btn-bottom",
        prevEl: ".prev-btn-bottom",
    },
    pagination: {
        el: ".swiper-pagination-bottom",
        clickable: true,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
      },
});
// var swiper = new Swiper(".end-mini-swipers", {
//       slidesPerView: 3,
//       spaceBetween: 20,
//       pagination: {
//         el: ".swiper-pagination-review",
//         clickable: true,
//       },
// });
var testimonialSwiper = new Swiper(".end-mini-swipers", {
  // Default slides configuration
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination-review",
    clickable: true,
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active',
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
  },
  
  // Responsive breakpoints
  breakpoints: {
    // When window width is >= 576px
    576: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // When window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});

  

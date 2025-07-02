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
var swiper = new Swiper(".end-mini-swipers", {
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination-review",
        clickable: true,
      },
});

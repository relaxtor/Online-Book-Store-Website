// SWIPER HOME BOOK ITEMS
const swiperHome = new Swiper(".book-slider", {
  loop: true,
  centeredSlide: true,
  autoplay: {
      delay: 9500,
      disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    425: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

// SWIPER FEATURED SLIDE
const swiperFeatured = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSlide: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
      delay: 9500,
      disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    425: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
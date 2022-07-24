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
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
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
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});

// SWIPER ARRIVALS SLIDE
const swiperArrivals = new Swiper(".arrivals-slider", {
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
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});

// SWIPER REVIEWS SLIDE
const swiperReviews = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  loop: true,
  grabCursor: true,
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
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});

// SWIPER BLOGS SLIDE
const swiperBlogs = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  loop: true,
  grabCursor: true,
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
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});
const swiper = new Swiper(".swiper", {
  zoom: true,
  // Optional parameters
  // direction: "vertical",
  loop: true,
  //autoHeight: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    stopOnlastSlide: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },
});

const gallary = new Swiper(".gallary", {
  //loop: true,
  zoom: true,
  direction: "horizontal",
  slidesPerView: 2,
  spaceBetween: 100,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  zoom: {
    maxRatio: 5,
    minRatio: 1,
  },
  breakpoints: {
    719: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

const q = new Swiper(".q", {
  zoom: true,
  spaceBetween: 100,
  // Optional parameters
  // direction: "vertical",
  loop: true,
  //autoHeight: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    stopOnlastSlide: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  //   scrollbar: {
  el: ".swiper-scrollbar",
  //   },
});

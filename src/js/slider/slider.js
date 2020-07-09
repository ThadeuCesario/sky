function loadSwiperHighlights(){
  let swiperHightlights = new Swiper('.swiper-container.sky-main__highlights', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    direction: 'horizontal',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

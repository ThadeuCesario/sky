function sliderLoadHighlights(){
  $(".sky-main__highlights.owl-carousel").owlCarousel({
    center: true,
    items: 3,
    loop: true,
    margin: 15,
    nav: true,
  });

  $(".sky-main__highlights.owl-carousel .owl-prev").html("<i class='fa fa-arrow-left' aria-hidden='true'></i>");
  $(".sky-main__highlights.owl-carousel .owl-next").html("<i class='fa fa-arrow-right' aria-hidden='true'></i>");
}

function sliderLoadMovies(){
  $(".sky-main__portrait-movie.owl-carousel").owlCarousel({
    loop: false,
    margin: 10,
    lazyLoad: true,
    autoWidth: true,
  });
}
function sliderLoadHighlights(){
  $(".sky-main__highlights.owl-carousel").owlCarousel({
    center: true,
    items: 3,
    loop: true,
    margin: 15,
    nav: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout:5000,
      }
    }
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
    nav: true,
    items: 7,
    dots: false
  });

  $(".sky-main__portrait-movie.owl-carousel .owl-prev").html("<i class='fa fa-arrow-left' aria-hidden='true'></i>");
  $(".sky-main__portrait-movie.owl-carousel .owl-next").html("<i class='fa fa-arrow-right' aria-hidden='true'></i>");
}
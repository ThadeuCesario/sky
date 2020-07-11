function sliderLoadHighlights() {
  $(".sky-main__highlights.owl-carousel").owlCarousel({
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        lazyLoad: true,
      },
      768: {
        center: true,
        items: 3,
        loop: true,
        margin: 15,
        nav: true,
        lazyLoad: true,
      },
      1024: {
        center: true,
        items: 3,
        loop: true,
        margin: 15,
        nav: true,
        lazyLoad: true,
      },
    },
  });

  $(".sky-main__highlights.owl-carousel .owl-prev").html(
    "<i class='fa fa-arrow-left' aria-hidden='true'></i>"
  );
  $(".sky-main__highlights.owl-carousel .owl-next").html(
    "<i class='fa fa-arrow-right' aria-hidden='true'></i>"
  );
}

function sliderLoadMovies() {
  $(".sky-main__portrait-movie.owl-carousel").owlCarousel({
    responsive: {
      0: {
        loop: false,
        margin: 10,
        lazyLoad: true,
        autoWidth: true,
        nav: false,
        items: 3,
        dots: false,
      },
      1024: {
        loop: false,
        margin: 10,
        lazyLoad: true,
        autoWidth: true,
        nav: true,
        items: 7,
        dots: false,
      },
    },
  });

  $(".sky-main__portrait-movie.owl-carousel .owl-prev").html(
    "<i class='fa fa-arrow-left' aria-hidden='true'></i>"
  );
  $(".sky-main__portrait-movie.owl-carousel .owl-next").html(
    "<i class='fa fa-arrow-right' aria-hidden='true'></i>"
  );

  verifyErrorBanners();
}

function verifyErrorBanners() {
  let movieOptions = document.getElementsByClassName("owl-stage");
  let isError = false;
  for (let i = 0; i < movieOptions.length; i++) {
    let movieContainer = parseFloat(movieOptions[i].style.width);
    if (movieContainer < 100) {
      isError = true;
    }
  }
  if (isError) {
    let reloadAllContainers = setInterval(() => {
      $(".owl-carousel").owlCarousel("refresh");
    }, 10);
    setTimeout(() => {
      clearInterval(reloadAllContainers);
    }, 250);
  }
}

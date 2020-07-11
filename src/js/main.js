window.onload = function () {
  const urlApi = "https://sky-frontend.herokuapp.com/movies";

  fetch(urlApi)
    .then((response) => response.json())
    .then((response) => {
      loadHighlights(response);
      loadMainMoviesByType(response);
    });

  function loadHighlights(data) {
    let highlightsData = data.filter(
      (info) => info.type.trim().toLowerCase() === "highlights"
    );
    let highlightsMovies = highlightsData[0]["items"];
    let highlightsSection = document.getElementById("highlights-movies");

    highlightsSection.innerHTML = `
      ${highlightsMovies
        .map(
          (movie) =>
            `<img src='${movie["images"][0]["url"].replace(
              /\/fit-in\/.*\/images\//gm,
              "/fit-in/669x391/images/"
            )}' class='swiper-slide sky-main__highlights-wrapper-image owl-lazy' data-src='${movie[
              "images"
            ][0]["url"].replace(
              /\/fit-in\/.*\/images\//gm,
              "/fit-in/669x391/images/"
            )}'/>`
        )
        .join("")}
    `;

    sliderLoadHighlights();
  }

  function loadMainMoviesByType(data) {
    let portraitMoviesData = data.filter(
      (info) => info.type.trim().toLowerCase() === "carousel-portrait"
    );
    let moviesPortrait = portraitMoviesData[0]["movies"];
    let typesMoviesPortrait = moviesPortrait
      .map((movie) => movie.categories)
      .map((categoryType) => categoryType.split(","))
      .flat(Infinity);
    typesMoviesPortrait = typesMoviesPortrait.map((movie) => movie.trim());
    typesMoviesPortrait = typesMoviesPortrait.filter(
      (value, index) => typesMoviesPortrait.indexOf(value) === index
    );
    let moviesPortraitSection = document.getElementById("portrait-movies");

    for (let i = 0; i < typesMoviesPortrait.length; i++) {
      let articlePortraitMovies = document.createElement("article");
      articlePortraitMovies.classList.add("sky-main__portrait-article");

      let moviesSpecificCategory = moviesPortrait.filter((movie) =>
        movie.categories.includes(typesMoviesPortrait[i])
      );

      articlePortraitMovies.innerHTML = `
        <h2 class='sky-main__portrait-title'>${typesMoviesPortrait[i]}</h2>
        <div class='sky-main__portrait-movie owl-carousel'>${moviesSpecificCategory
          .map(
            (movie) => `
          <div class='owl-item__group'>
            <a href='#'>
              <img src='${movie["images"][0]["url"].replace(
                /\/fit-in\/.*\/images\//gm,
                "/fit-in/175x255/images/"
              )}' alt='${movie["title"]}' title='${
              movie["title"]
            }' class='owl-lazy' data-src='${movie["images"][0]["url"].replace(
              /\/fit-in\/.*\/images\//gm,
              "/fit-in/175x255/images/"
            )}'/>
            </a>
            ${
              movie["isBlocked"]
                ? `<i class="fa fa-lock" aria-hidden="true"></i>`
                : `<i class="fa fa-shopping-cart" aria-hidden="true"></i>`
            }
          </div>
          `
          )
          .join("")}
        </div>
      `;

      moviesPortraitSection.appendChild(articlePortraitMovies);
    }

    sliderLoadMovies();
  }

  loadDarkTheme();
  increaseFontSize();
  decreaseFontSize();
  categoryMarker();
  loadAccordionFuncionalityFooter();
  openMobileMenu();
  closeMobileMenu();
  verifyErrorBanners();
  handleSearchMenu();
};

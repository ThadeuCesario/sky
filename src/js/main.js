window.onload = function(){
  const urlApi = 'https://sky-frontend.herokuapp.com/movies';

  fetch(urlApi)
    .then(response => response.json())
    .then(response => loadHighlights(response));

  function loadHighlights(data){
    let highlightsData = data.filter(info => (info.type).trim().toLowerCase() === 'highlights');
    let highlightsMovies = highlightsData[0]['items'];
    let highlightsSection = document.getElementById('highlights-movies');
    
    console.log(highlightsMovies);
    
    highlightsSection.innerHTML = ` 
      ${
        highlightsMovies.map(movie => 
          `<img src='${(movie['images'][0]['url']).replace('/1920x1080/', '/669x391/')}' class='swiper-slide sky-main__highlights-wrapper-image'/>`
          ).join('')
      }
    `;

    loadSwiperHighlights();
  }
}
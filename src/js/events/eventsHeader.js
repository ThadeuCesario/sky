function loadDarkTheme(){
  let btnThemeOption = document.getElementById('theme-option');
  let btnThemeOptionMobile = document.getElementById('toggle-dark-theme');

  btnThemeOption.addEventListener('click', function(){
    let bodyElement = document.getElementsByTagName('body')[0];
    bodyElement.classList.toggle('dark-theme');
  });

  btnThemeOptionMobile.addEventListener('click', function(event){
    console.log(event.target.checked);
    let bodyElement = document.getElementsByTagName('body')[0];
    event.target.checked ? bodyElement.classList.add('dark-theme') : bodyElement.classList.remove('dark-theme');
  })
}

function increaseFontSize(){
  let btnPlusOption = document.getElementById('plus-option');

  btnPlusOption.addEventListener('click', function(){
    let htmlElement = document.getElementsByTagName('html')[0];
    let fontSizeHtml = parseFloat(window.getComputedStyle(htmlElement, null).getPropertyValue('font-size'));

    if(fontSizeHtml < 20){
      htmlElement.style.fontSize = `${++fontSizeHtml}px`;
    }
  });
}

function decreaseFontSize(){
  let btnMinusOption = document.getElementById('minus-option');

  btnMinusOption.addEventListener('click', function(){
    let htmlElement = document.getElementsByTagName('html')[0];
    let fontSizeHtml = parseFloat(window.getComputedStyle(htmlElement, null).getPropertyValue('font-size'));

    if(fontSizeHtml > 16){
      htmlElement.style.fontSize = `${--fontSizeHtml}px`;
    }
  });
}

function categoryMarker(){
  let navigationOptionsMenu = document.getElementsByClassName('sky-header__navigation-list-item');

  for(let i = 0; i < navigationOptionsMenu.length; i++){
    navigationOptionsMenu[i].addEventListener('click', function(event){

      for(let j = 0; j < navigationOptionsMenu.length; j++){
        if(navigationOptionsMenu[j].classList.contains('is--active')){
          navigationOptionsMenu[j].classList.remove('is--active');
        }
      }

      (event.target).classList.toggle('is--active');
    });
  }
}

function openMobileMenu(){
  let mobileMenu = document.getElementById('menu-mobile');

  mobileMenu.addEventListener('click', function(){
    let btnMenuMobile = document.getElementById('options-header-mobile');
    btnMenuMobile.classList.toggle('is--active');
  });
}

function closeMobileMenu(){
  let btnCloseMenuMobile = document.getElementById('options-close-menu');

  btnCloseMenuMobile.addEventListener('click', function(){
    let btnMenuMobile = document.getElementById('options-header-mobile');
    btnMenuMobile.classList.toggle('is--active');
  });
}

function handleSearchMenu(){
  let searchBtn = document.getElementById('btn-search');
  let modalSearch = document.getElementById('menu-search');
  let closeBtn = document.getElementById('btn-close-search');

  searchBtn.addEventListener('click', function(){
    modalSearch.classList.add('is--active');
  });

  closeBtn.addEventListener('click', function(){
    modalSearch.classList.remove('is--active');
  });
}


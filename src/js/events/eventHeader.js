function loadDarkTheme(){
  let btnThemeOption = document.getElementById('theme-option');

  btnThemeOption.addEventListener('click', function(){
    let bodyElement = document.getElementsByTagName('body')[0];
    bodyElement.classList.toggle('dark-theme');
  });
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
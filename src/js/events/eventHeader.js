function loadDarkTheme(){
  let btnThemeOption = document.getElementById('theme-option');

  btnThemeOption.addEventListener('click', function(){
    let bodyElement = document.getElementsByTagName('body')[0];
    bodyElement.classList.toggle('dark-theme');
  });
}
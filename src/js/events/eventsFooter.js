function loadAccordionFuncionalityFooter(){
  let arrowsFooterMenu = document.getElementsByClassName('sky-footer__institutional-about-arrow-svg');

  for(let i = 0; i < arrowsFooterMenu.length; i++){
    arrowsFooterMenu[i].addEventListener('click', function(event){
      (this.parentElement.parentElement).classList.toggle('is--active');

    });
  }
}
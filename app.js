/*  Store ".share" & ".share-img" in variables */
const share = document.querySelector('.share');
const shareIcon = document.querySelector('.share-img');
// const shareBarDesktop = document.querySelector('.share-bar-desktop');
/*  Listen for click on icon */
shareIcon.addEventListener('click', (e) => {
/*  Within listener */
/*  show/hide correct share menu */
/*  avoid shutting the share popup clicking on it */
  if(e.target === shareIcon) {
    if(window.innereWidth <= 750) {
      share.classList.toggle('active-share-mobile');
      return;
    } 
    share.classList.toggle("active-share-desktop");
  }
  
});

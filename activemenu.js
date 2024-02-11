// Show active menu when scrolling
const highlightMenu = () => {
    const element = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const portfolioMenu = document.querySelector('#portfolio-page');
    const mainMenu = document.querySelector('.main-page');
    let scrollPos = window.scrollY;
    console.log(scrollPos);
  
    // adds the highlight class to my menu items
    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        portfolioMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2550) {
        portfolioMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }
  
    if ((element && window.innerWidth < 960 && scrollPos < 600) || element) {
      element.classList.remove('highlight');
    }
  };
  
  window.addEventListener('scroll', highlightMenu);
  window.addEventListener('click', highlightMenu);
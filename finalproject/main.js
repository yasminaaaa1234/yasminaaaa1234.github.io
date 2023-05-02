// add class navbarDark on navbar scroll
// Get the navbar element
const header = document.querySelector('.navbar');


window.addEventListener('scroll', () => {
  
  if (window.scrollY > 100) {
    
    navbar.classList.add('navbarDark');
  } else {
    
    navbar.classList.remove('navbarDark');
  }
});
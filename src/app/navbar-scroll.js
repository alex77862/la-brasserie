const navbar = document.querySelector('.navbarTest');
const scrollThreshold = 100;

function handleScroll() {
  if (window.scrollY > scrollThreshold) {
    navbar.classList.add('white-bg');
    console.log('maintenant')
  } else {
    navbar.classList.remove('white-bg');
    console.log('tout de suite')
  }
}

window.addEventListener('scroll', handleScroll);

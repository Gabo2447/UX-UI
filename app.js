const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.header__nav');
const navLinks = document.querySelectorAll('.nav__list-a');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  navToggle.classList.toggle('open');
});

// Cierra el menú al hacer click en un enlace
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.classList.remove('open');
  });
});

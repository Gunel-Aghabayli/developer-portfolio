const burgerMenu = document.querySelector('.burger-menu');
const burgerIcon = document.querySelector('.burger-icon');
const closeIcon = document.querySelector('.close-icon');
const nav = document.querySelector('.nav');

burgerMenu.addEventListener('click', () => {
  nav.classList.toggle('active');
  const isOpen = nav.classList.contains('active');
  burgerIcon.style.display = isOpen ? 'none' : 'block';
  closeIcon.style.display = isOpen ? 'block' : 'none';
});

let button = document.getElementById('navbar-button');
let menu = document.getElementById('navbar-menu');

button.addEventListener('click', () => {
  button.classList.toggle('is-active');
  menu.classList.toggle('is-active');
});
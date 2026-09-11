const button = document.querySelector('.menu-button');
const menu = document.querySelector('#menu');

button.addEventListener('click', () => {
  const open = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!open));
  menu.classList.toggle('open', !open);
});

menu.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    button.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();

const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

// Shows the Menu
open.addEventListener('click', () => container.classList.add('show-nav'));

// Hides the menu
close.addEventListener('click', () => container.classList.remove('show-nav'));

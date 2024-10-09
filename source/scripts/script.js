const headerMain = document.querySelector('.main-header__toggle');
const headerToggle = document.querySelector('.main-header__toggle-close');

headerMain.classList.remove('main-nav--nojs');

headerToggle.addEventListener('click', () => {
  if (headerMain.classList.contains('main-header__toggle-close')) {
    headerMain.classList.remove('main-header__toggle-close');
    headerMain.classList.add('main-header__toggle');
  } else {
    headerMain.classList.add('main-header__toggle--closed');
    headerMain.classList.remove('main-header__toggle');
  }
});

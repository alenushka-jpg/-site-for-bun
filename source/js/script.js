const header = document.querySelector('.header');
const burger = document.querySelector('.header__burger');
const navClose = document.querySelector('.header__close');
const body = document.querySelector('body');

function bodyHidden() {
  document.body.style.overflowY = 'scroll';
  document.body.style.position = 'fixed';
}

function bodyVisible() {
  document.body.style.overflowY = 'scroll';
  document.body.style.position = 'inherit';
}

//drop-down menu script
function showHeader() {
  header.classList.toggle('header--open');
};

function onHeaderClick() {
  showHeader();
};

function hiddenHeader() {
  header.classList.remove('header--open');
};

burger.addEventListener('click', onHeaderClick);
navClose.addEventListener('click', hiddenHeader);

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (header.classList.contains('header--open')) {
      evt.preventDefault();
      header.classList.remove('header--open');
      bodyVisible();
    }

  }
});

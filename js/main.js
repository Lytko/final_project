document.addEventListener('DOMContentLoaded', function () {

  let btn = document.querySelector('.burger-btn'),
    menu = document.querySelector('.burger-menu');

  btn.addEventListener('click', function (e) {
    menu.classList.toggle('burger-menu_active');
  });
})

document.addEventListener('DOMContentLoaded', function () {

  let btn = document.querySelector('.burger-btn__footer'),
    menu = document.querySelector('.burger-menu__footer');

  btn.addEventListener('click', function (e) {
    menu.classList.toggle('burger-menu_active__footer');
  });
})
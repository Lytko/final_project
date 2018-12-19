document.addEventListener('DOMContentLoaded', function () {

  let btn = document.querySelector('.burger-btn'),
    menu = document.querySelector('.burger-menu'),
    btnFooter = document.querySelector('.burger-btn__footer'),
    menuFooter = document.querySelector('.burger-menu__footer');

  btn.addEventListener('click', function (e) {
    menu.classList.toggle('burger-menu_active');
  });
  btnFooter.addEventListener('click', function (e) {
    menuFooter.classList.toggle('burger-menu_active__footer');
  });
})
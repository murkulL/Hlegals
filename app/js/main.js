window.addEventListener('load',function(){
    menuActive()
});

const menu = document.querySelector('.header__nav-items')
const buttom = document.querySelector('.burger')

function menuActive(){
    buttom.addEventListener('click',function(){
        menu.classList.toggle('header__nav-items--active')
        buttom.classList.toggle('burger--active')
    })
}


  

  $(document).ready(function() {
    $('.info__slider').slick({
        arrows: false,
        dots: true

      });
  })
  $(document).ready(function() {
    $('.team__slider').slick({
        arrows: false,
        dots: true

      });
  })
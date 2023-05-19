window.addEventListener('load',function(){
    menuActive()
    buttonLanguage()
    // collaps()
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
    dots: true,
    appendDots: '.info__slider-dots'
  });

  $('.team__slider').slick({
    arrows: false,
    dots: true,
    appendDots: '.team__slider-dots'
  });
});

const buttonLangu = document.querySelectorAll('.header__language-btn');

function buttonLanguage() {
  buttonLangu.forEach(function(item) {
    item.addEventListener('click', function(){
      item.classList.toggle('header__language-btn--active');
    })
  });
}

// const img = document.querySelectorAll('.totell__img')

// function collaps(){
//   img.forEach(function(item){
//     item.addEventListener('click',() => {
//       item.setAttribute('type', 'img');
//       item.setAttribute('data-bs-toggle', 'collapse');
//       item.setAttribute('data-bs-target', '.collapseExample');
//       item.setAttribute('aria-expanded', 'false');
//       item.setAttribute('aria-controls', 'collapseExample');
//     })
//   })
// }
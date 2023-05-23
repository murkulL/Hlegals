const anchors = document.querySelectorAll('a[href*="#"]')
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const blockID = anchor.getAttribute('href').substr(1)
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }


window.addEventListener('load',function(){
    menuActive()
    buttonLanguage()
    handleScreenChange()
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

let tabContent = `<div class="d-flex align-items-start">
<div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Послідовні</button>
  <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Клієнтоорієнтовані</button>
  <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Інноваційні</button>
  <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Бізнес-орієнтовані юристи</button>
</div>
<div class="tab-content" id="v-pills-tabContent">
  <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0"><b class="info__post-title">Перевертаємо уявлення про юридичні послуги - 1</b>
  <p class="info__text">Консолідуючи багаторічний досвід і практику, юристи компанії супроводжують складні проекти і досягають прийняття ряду важливих для галузі рішень. Багато з них формують практику застосування морського права в Україні.</p></div>
  <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0"><b class="info__post-title">Перевертаємо уявлення про юридичні послуги - 2</b>
  <p class="info__text">Консолідуючи багаторічний досвід і практику, юристи компанії супроводжують складні проекти і досягають прийняття ряду важливих для галузі рішень. Багато з них формують практику застосування морського права в Україні.</p></div>
  <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0"><b class="info__post-title">Перевертаємо уявлення про юридичні послуги - 3</b>
  <p class="info__text">Консолідуючи багаторічний досвід і практику, юристи компанії супроводжують складні проекти і досягають прийняття ряду важливих для галузі рішень. Багато з них формують практику застосування морського права в Україні.</p></div>
  <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0"><b class="info__post-title">Перевертаємо уявлення про юридичні послуги - 4</b>
  <p class="info__text">Консолідуючи багаторічний досвід і практику, юристи компанії супроводжують складні проекти і досягають прийняття ряду важливих для галузі рішень. Багато з них формують практику застосування морського права в Україні.</p></div>
</div>
</div>`;

let sliderContent = `<div class="info__slider-item">
<h4 class="info__title">Послідовні</h4>

<b class="info__post-title">Перевертаємо уявлення про юридичні послуги</b>
<p class="info__text">Консолідуючи багаторічний досвід і практику, юристи компанії супроводжують складні проекти і досягають прийняття ряду важливих для галузі рішень. Багато з них формують практику застосування морського права в Україні.</p>
</div>
<div class="info__slider-item">
<h4 class="info__title">Клієнтоорієнтовані</h4>

<b class="info__post-title">Перевертаємо уявлення про юридичні послуги</b>
<p class="info__text">Консолідуючи багаторічний досвід і практику, юристи компанії супроводжують складні проекти і досягають прийняття ряду важливих для галузі рішень. Багато з них формують практику застосування морського права в Україні.</p>
</div>
<div class="info__slider-item">
<h4 class="info__title">Інноваційні</h4>

<b class="info__post-title">Перевертаємо уявлення про юридичні послуги</b>
<p class="info__text">Консолідуючи багаторічний досвід і практику, юристи компанії супроводжують складні проекти і досягають прийняття ряду важливих для галузі рішень. Багато з них формують практику застосування морського права в Україні.</p>
</div>
<div class="info__slider-item">
<h4 class="info__title">Бізнес-орієнтовані юристи</h4>

<b class="info__post-title">Перевертаємо уявлення про юридичні послуги</b>
<p class="info__text">Консолідуючи багаторічний досвід і практику, юристи компанії супроводжують складні проекти і досягають прийняття ряду важливих для галузі рішень. Багато з них формують практику застосування морського права в Україні.</p>
</div>`;

$(document).ready(function() {
  $('.achieve__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    appendDots: '.achieve__slider-dots'
  });

  $('.team__slider').slick({
    arrows: false,
    dots: true,
    appendDots: '.team__slider-dots'
  });
});

$(document).ready(function() {
  const infoSlider = $('.info__slider');
  let sliderInitialized = false;

  function destroySlider() {
    if (sliderInitialized) {
      infoSlider.slick('unslick');
      sliderInitialized = false;
    }
  }

  function initSlider() {
    if (!sliderInitialized) {
      infoSlider.html(sliderContent);
      infoSlider.slick({
        arrows: false,
        dots: true,
        appendDots: '.info__slider-dots'
      });
      sliderInitialized = true;
    }
  }

  // function initTab(){
  //   infoSlider.html(tabContent)
  // }

  const mediaQuery = window.matchMedia('(min-width: 900px)');

  function handleScreenChange(event){
    if (event.matches) {
      destroySlider();
      infoSlider.empty();
      infoSlider.html(tabContent)
    } else {
      initSlider();
      openText();
    }
  }

  mediaQuery.addListener(handleScreenChange);
  handleScreenChange(mediaQuery);
});


let ulContent = ` <ul class="succes-cases__items">
<li class="succes-cases__item item-1">
    <h4 class="succes-cases__title">Успішні кейси</h4>
</li>
<li class="succes-cases__item item-2">
    <p class="succes-cases__text">Супровід проекту з купівлі-продажу сільськогосподарської продукції</p>
    <span class="succes-cases__work">Hillel IT School</span>
</li>
<li class="succes-cases__item item-3">
    <p class="succes-cases__text">Підготовка комплексного юридичного висновку для європейського банку</p>
    <span class="succes-cases__work">WannaBiz</span>
</li>
<li class="succes-cases__item item-4">
    <p class="succes-cases__text">Супровід проекту з купівлі-продажу сільськогосподарської продукції</p>
    <span class="succes-cases__work">tapgerine</span>
</li>
<li class="succes-cases__item item-5">
    <p class="succes-cases__text">Оскарження податкових повідомлень-рішень ДФС</p>
    <span class="succes-cases__work">adtelligent</span>
</li>
<li class="succes-cases__item item-6">
    <p class="succes-cases__text">Супровід проекту з кредитування агротрейдерів мальтійським банком</p>
    <span class="succes-cases__work">Clikky</span>
</li>
<li class="succes-cases__item item-7">
    <p class="succes-cases__text">Супровід проекту з купівлі-продажу сільськогосподарської продукції</p>
    <span class="succes-cases__work">tapgerine</span>
</li>
</ul>`;


let gridContent = `<div class="succes-cases__items text-center">
<div class="row">
  <div class="succes-cases__item item-1 col">
    <h4 class="succes-cases__title">Успішні кейси</h4>
  <div class="succes-cases__item item-4 item col">
    <p class="succes-cases__text">Супровід проекту з купівлі-продажу сільськогосподарської продукції</p>
    <span class="succes-cases__work">Hillel IT School</span>
  </div>
</div>
  <div class="succes-cases__item item-2 item col">
    <p class="succes-cases__text">Підготовка комплексного юридичного висновку для європейського банку</p>
    <span class="succes-cases__work">WannaBiz</span>
  </div>
  <div class="succes-cases__item item-3 item col">
    <p class="succes-cases__text">Супровід проекту з купівлі-продажу сільськогосподарської продукції</p>
    <span class="succes-cases__work">tapgerine</span>
  </div>
</div>
<div class="row">
  <div class="succes-cases__item item-5 item col">
    <p class="succes-cases__text">Оскарження податкових повідомлень-рішень ДФС</p>
    <span class="succes-cases__work">adtelligent</span>
  </div>
  <div class="succes-cases__item item-6 item col">
    <p class="succes-cases__text">Супровід проекту з кредитування агротрейдерів мальтійським банком</p>
    <span class="succes-cases__work">Clikky</span>
  </div>
  <div class="succes-cases__item item-7 item col">
    <p class="succes-cases__text">Супровід проекту з купівлі-продажу сільськогосподарської продукції</p>
    <span class="succes-cases__work">tapgerine</span>
  </div>
</div>
</div>
</div>`;

// const mediaForGrid = window.matchMedia('(min-width: 1360px)')
// const divElement = document.querySelector('.succes-cases__box-content')

// function initGrid(event) {
//   if (event.matches) {
//     divElement.innerHTML = gridContent;
//     divElement.classList.add('grid-layout');
//   } else {
//     divElement.innerHTML = '';
//     divElement.classList.remove('grid-layout');
//     divElement.innerHTML = ulContent
//   }
// }

// mediaForGrid.addListener(initGrid);
// initGrid(mediaForGrid);




function openText() {
  const textElements = document.querySelectorAll('.totell__text');
  const imgElements = document.querySelectorAll('.totell__item');
  const winElement = window.matchMedia('(max-width: 900px)');

  imgElements.forEach(function(imgElement, index) {
    imgElement.addEventListener('click', function() {
      let element = textElements[index];
      if(winElement .matches){
      if(element.style.display == 'block'){
        element.style.display = 'none';
      }else{
        element.style.display = 'block';
      }
    }
    });
  });
}
winElement .addListener(openText)
openText();



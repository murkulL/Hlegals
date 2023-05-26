"use strict";

var anchors = document.querySelectorAll('a[href*="#"]');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var blockID = anchor.getAttribute('href').substr(1);
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  for (var _iterator = anchors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

window.addEventListener('load', function () {
  buttonLanguage();
  menuActive();
  hiddenContent();
  handleScreenChange();
});
var buttonLangu = document.querySelectorAll('.header__language-btn');

function buttonLanguage() {
  buttonLangu.forEach(function (item) {
    item.addEventListener('click', function () {
      item.classList.toggle('header__language-btn--active');
    });
  });
}

var btnPrimary = document.querySelector('.btn-totell');
var containerToTel = document.querySelector('.hidden-content');

function hiddenContent() {
  btnPrimary.addEventListener('click', function () {
    if (containerToTel.classList.contains('hidden-content')) {
      containerToTel.classList.remove('hidden-content');
      btnPrimary.innerHTML = 'Згорнути';
    } else {
      containerToTel.classList.add('hidden-content');
      btnPrimary.innerHTML = 'Ще публікації';
    }
  });
}

var menu = document.querySelector('.header__nav-items');
var buttom = document.querySelector('.burger');
var buttomAbout = document.querySelector('.burger-about');

function menuActive() {
  buttom.addEventListener('click', function () {
    menu.classList.toggle('header__nav-items--active');
    buttom.classList.toggle('burger--active');
    buttomAbout.classList.toggle('burger-about--active');
  });
}

var tabContent = "<div class=\"d-flex align-items-start\">\n<div class=\"nav flex-column nav-pills me-3\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\n  <button class=\"nav-link active\" id=\"v-pills-home-tab\" data-bs-toggle=\"pill\" data-bs-target=\"#v-pills-home\" type=\"button\" role=\"tab\" aria-controls=\"v-pills-home\" aria-selected=\"true\">\u041F\u043E\u0441\u043B\u0456\u0434\u043E\u0432\u043D\u0456</button>\n  <button class=\"nav-link\" id=\"v-pills-profile-tab\" data-bs-toggle=\"pill\" data-bs-target=\"#v-pills-profile\" type=\"button\" role=\"tab\" aria-controls=\"v-pills-profile\" aria-selected=\"false\">\u041A\u043B\u0456\u0454\u043D\u0442\u043E\u043E\u0440\u0456\u0454\u043D\u0442\u043E\u0432\u0430\u043D\u0456</button>\n  <button class=\"nav-link\" id=\"v-pills-messages-tab\" data-bs-toggle=\"pill\" data-bs-target=\"#v-pills-messages\" type=\"button\" role=\"tab\" aria-controls=\"v-pills-messages\" aria-selected=\"false\">\u0406\u043D\u043D\u043E\u0432\u0430\u0446\u0456\u0439\u043D\u0456</button>\n  <button class=\"nav-link\" id=\"v-pills-settings-tab\" data-bs-toggle=\"pill\" data-bs-target=\"#v-pills-settings\" type=\"button\" role=\"tab\" aria-controls=\"v-pills-settings\" aria-selected=\"false\">\u0411\u0456\u0437\u043D\u0435\u0441-\u043E\u0440\u0456\u0454\u043D\u0442\u043E\u0432\u0430\u043D\u0456 \u044E\u0440\u0438\u0441\u0442\u0438</button>\n</div>\n<div class=\"tab-content\" id=\"v-pills-tabContent\">\n  <div class=\"tab-pane fade show active\" id=\"v-pills-home\" role=\"tabpanel\" aria-labelledby=\"v-pills-home-tab\" tabindex=\"0\"><b class=\"info__post-title\">\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u0442\u0430\u0454\u043C\u043E \u0443\u044F\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u043E \u044E\u0440\u0438\u0434\u0438\u0447\u043D\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438 - 1</b>\n  <p class=\"info__text\">\u041A\u043E\u043D\u0441\u043E\u043B\u0456\u0434\u0443\u044E\u0447\u0438 \u0431\u0430\u0433\u0430\u0442\u043E\u0440\u0456\u0447\u043D\u0438\u0439 \u0434\u043E\u0441\u0432\u0456\u0434 \u0456 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0443, \u044E\u0440\u0438\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457 \u0441\u0443\u043F\u0440\u043E\u0432\u043E\u0434\u0436\u0443\u044E\u0442\u044C \u0441\u043A\u043B\u0430\u0434\u043D\u0456 \u043F\u0440\u043E\u0435\u043A\u0442\u0438 \u0456 \u0434\u043E\u0441\u044F\u0433\u0430\u044E\u0442\u044C \u043F\u0440\u0438\u0439\u043D\u044F\u0442\u0442\u044F \u0440\u044F\u0434\u0443 \u0432\u0430\u0436\u043B\u0438\u0432\u0438\u0445 \u0434\u043B\u044F \u0433\u0430\u043B\u0443\u0437\u0456 \u0440\u0456\u0448\u0435\u043D\u044C. \u0411\u0430\u0433\u0430\u0442\u043E \u0437 \u043D\u0438\u0445 \u0444\u043E\u0440\u043C\u0443\u044E\u0442\u044C \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0443 \u0437\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u043E\u0440\u0441\u044C\u043A\u043E\u0433\u043E \u043F\u0440\u0430\u0432\u0430 \u0432 \u0423\u043A\u0440\u0430\u0457\u043D\u0456.</p></div>\n  <div class=\"tab-pane fade\" id=\"v-pills-profile\" role=\"tabpanel\" aria-labelledby=\"v-pills-profile-tab\" tabindex=\"0\"><b class=\"info__post-title\">\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u0442\u0430\u0454\u043C\u043E \u0443\u044F\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u043E \u044E\u0440\u0438\u0434\u0438\u0447\u043D\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438 - 2</b>\n  <p class=\"info__text\">\u041A\u043E\u043D\u0441\u043E\u043B\u0456\u0434\u0443\u044E\u0447\u0438 \u0431\u0430\u0433\u0430\u0442\u043E\u0440\u0456\u0447\u043D\u0438\u0439 \u0434\u043E\u0441\u0432\u0456\u0434 \u0456 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0443, \u044E\u0440\u0438\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457 \u0441\u0443\u043F\u0440\u043E\u0432\u043E\u0434\u0436\u0443\u044E\u0442\u044C \u0441\u043A\u043B\u0430\u0434\u043D\u0456 \u043F\u0440\u043E\u0435\u043A\u0442\u0438 \u0456 \u0434\u043E\u0441\u044F\u0433\u0430\u044E\u0442\u044C \u043F\u0440\u0438\u0439\u043D\u044F\u0442\u0442\u044F \u0440\u044F\u0434\u0443 \u0432\u0430\u0436\u043B\u0438\u0432\u0438\u0445 \u0434\u043B\u044F \u0433\u0430\u043B\u0443\u0437\u0456 \u0440\u0456\u0448\u0435\u043D\u044C. \u0411\u0430\u0433\u0430\u0442\u043E \u0437 \u043D\u0438\u0445 \u0444\u043E\u0440\u043C\u0443\u044E\u0442\u044C \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0443 \u0437\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u043E\u0440\u0441\u044C\u043A\u043E\u0433\u043E \u043F\u0440\u0430\u0432\u0430 \u0432 \u0423\u043A\u0440\u0430\u0457\u043D\u0456.</p></div>\n  <div class=\"tab-pane fade\" id=\"v-pills-messages\" role=\"tabpanel\" aria-labelledby=\"v-pills-messages-tab\" tabindex=\"0\"><b class=\"info__post-title\">\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u0442\u0430\u0454\u043C\u043E \u0443\u044F\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u043E \u044E\u0440\u0438\u0434\u0438\u0447\u043D\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438 - 3</b>\n  <p class=\"info__text\">\u041A\u043E\u043D\u0441\u043E\u043B\u0456\u0434\u0443\u044E\u0447\u0438 \u0431\u0430\u0433\u0430\u0442\u043E\u0440\u0456\u0447\u043D\u0438\u0439 \u0434\u043E\u0441\u0432\u0456\u0434 \u0456 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0443, \u044E\u0440\u0438\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457 \u0441\u0443\u043F\u0440\u043E\u0432\u043E\u0434\u0436\u0443\u044E\u0442\u044C \u0441\u043A\u043B\u0430\u0434\u043D\u0456 \u043F\u0440\u043E\u0435\u043A\u0442\u0438 \u0456 \u0434\u043E\u0441\u044F\u0433\u0430\u044E\u0442\u044C \u043F\u0440\u0438\u0439\u043D\u044F\u0442\u0442\u044F \u0440\u044F\u0434\u0443 \u0432\u0430\u0436\u043B\u0438\u0432\u0438\u0445 \u0434\u043B\u044F \u0433\u0430\u043B\u0443\u0437\u0456 \u0440\u0456\u0448\u0435\u043D\u044C. \u0411\u0430\u0433\u0430\u0442\u043E \u0437 \u043D\u0438\u0445 \u0444\u043E\u0440\u043C\u0443\u044E\u0442\u044C \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0443 \u0437\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u043E\u0440\u0441\u044C\u043A\u043E\u0433\u043E \u043F\u0440\u0430\u0432\u0430 \u0432 \u0423\u043A\u0440\u0430\u0457\u043D\u0456.</p></div>\n  <div class=\"tab-pane fade\" id=\"v-pills-settings\" role=\"tabpanel\" aria-labelledby=\"v-pills-settings-tab\" tabindex=\"0\"><b class=\"info__post-title\">\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u0442\u0430\u0454\u043C\u043E \u0443\u044F\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u043E \u044E\u0440\u0438\u0434\u0438\u0447\u043D\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438 - 4</b>\n  <p class=\"info__text\">\u041A\u043E\u043D\u0441\u043E\u043B\u0456\u0434\u0443\u044E\u0447\u0438 \u0431\u0430\u0433\u0430\u0442\u043E\u0440\u0456\u0447\u043D\u0438\u0439 \u0434\u043E\u0441\u0432\u0456\u0434 \u0456 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0443, \u044E\u0440\u0438\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457 \u0441\u0443\u043F\u0440\u043E\u0432\u043E\u0434\u0436\u0443\u044E\u0442\u044C \u0441\u043A\u043B\u0430\u0434\u043D\u0456 \u043F\u0440\u043E\u0435\u043A\u0442\u0438 \u0456 \u0434\u043E\u0441\u044F\u0433\u0430\u044E\u0442\u044C \u043F\u0440\u0438\u0439\u043D\u044F\u0442\u0442\u044F \u0440\u044F\u0434\u0443 \u0432\u0430\u0436\u043B\u0438\u0432\u0438\u0445 \u0434\u043B\u044F \u0433\u0430\u043B\u0443\u0437\u0456 \u0440\u0456\u0448\u0435\u043D\u044C. \u0411\u0430\u0433\u0430\u0442\u043E \u0437 \u043D\u0438\u0445 \u0444\u043E\u0440\u043C\u0443\u044E\u0442\u044C \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0443 \u0437\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u043E\u0440\u0441\u044C\u043A\u043E\u0433\u043E \u043F\u0440\u0430\u0432\u0430 \u0432 \u0423\u043A\u0440\u0430\u0457\u043D\u0456.</p></div>\n</div>\n</div>";
var sliderContent = "<div class=\"info__slider-item\">\n<h4 class=\"info__title\">\u041F\u043E\u0441\u043B\u0456\u0434\u043E\u0432\u043D\u0456</h4>\n\n<b class=\"info__post-title\">\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u0442\u0430\u0454\u043C\u043E \u0443\u044F\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u043E \u044E\u0440\u0438\u0434\u0438\u0447\u043D\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438</b>\n<p class=\"info__text\">\u041A\u043E\u043D\u0441\u043E\u043B\u0456\u0434\u0443\u044E\u0447\u0438 \u0431\u0430\u0433\u0430\u0442\u043E\u0440\u0456\u0447\u043D\u0438\u0439 \u0434\u043E\u0441\u0432\u0456\u0434 \u0456 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0443, \u044E\u0440\u0438\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457 \u0441\u0443\u043F\u0440\u043E\u0432\u043E\u0434\u0436\u0443\u044E\u0442\u044C \u0441\u043A\u043B\u0430\u0434\u043D\u0456 \u043F\u0440\u043E\u0435\u043A\u0442\u0438 \u0456 \u0434\u043E\u0441\u044F\u0433\u0430\u044E\u0442\u044C \u043F\u0440\u0438\u0439\u043D\u044F\u0442\u0442\u044F \u0440\u044F\u0434\u0443 \u0432\u0430\u0436\u043B\u0438\u0432\u0438\u0445 \u0434\u043B\u044F \u0433\u0430\u043B\u0443\u0437\u0456 \u0440\u0456\u0448\u0435\u043D\u044C. \u0411\u0430\u0433\u0430\u0442\u043E \u0437 \u043D\u0438\u0445 \u0444\u043E\u0440\u043C\u0443\u044E\u0442\u044C \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0443 \u0437\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u043E\u0440\u0441\u044C\u043A\u043E\u0433\u043E \u043F\u0440\u0430\u0432\u0430 \u0432 \u0423\u043A\u0440\u0430\u0457\u043D\u0456.</p>\n</div>\n<div class=\"info__slider-item\">\n<h4 class=\"info__title\">\u041A\u043B\u0456\u0454\u043D\u0442\u043E\u043E\u0440\u0456\u0454\u043D\u0442\u043E\u0432\u0430\u043D\u0456</h4>\n\n<b class=\"info__post-title\">\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u0442\u0430\u0454\u043C\u043E \u0443\u044F\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u043E \u044E\u0440\u0438\u0434\u0438\u0447\u043D\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438</b>\n<p class=\"info__text\">\u041A\u043E\u043D\u0441\u043E\u043B\u0456\u0434\u0443\u044E\u0447\u0438 \u0431\u0430\u0433\u0430\u0442\u043E\u0440\u0456\u0447\u043D\u0438\u0439 \u0434\u043E\u0441\u0432\u0456\u0434 \u0456 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0443, \u044E\u0440\u0438\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457 \u0441\u0443\u043F\u0440\u043E\u0432\u043E\u0434\u0436\u0443\u044E\u0442\u044C \u0441\u043A\u043B\u0430\u0434\u043D\u0456 \u043F\u0440\u043E\u0435\u043A\u0442\u0438 \u0456 \u0434\u043E\u0441\u044F\u0433\u0430\u044E\u0442\u044C \u043F\u0440\u0438\u0439\u043D\u044F\u0442\u0442\u044F \u0440\u044F\u0434\u0443 \u0432\u0430\u0436\u043B\u0438\u0432\u0438\u0445 \u0434\u043B\u044F \u0433\u0430\u043B\u0443\u0437\u0456 \u0440\u0456\u0448\u0435\u043D\u044C. \u0411\u0430\u0433\u0430\u0442\u043E \u0437 \u043D\u0438\u0445 \u0444\u043E\u0440\u043C\u0443\u044E\u0442\u044C \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0443 \u0437\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u043E\u0440\u0441\u044C\u043A\u043E\u0433\u043E \u043F\u0440\u0430\u0432\u0430 \u0432 \u0423\u043A\u0440\u0430\u0457\u043D\u0456.</p>\n</div>\n<div class=\"info__slider-item\">\n<h4 class=\"info__title\">\u0406\u043D\u043D\u043E\u0432\u0430\u0446\u0456\u0439\u043D\u0456</h4>\n\n<b class=\"info__post-title\">\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u0442\u0430\u0454\u043C\u043E \u0443\u044F\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u043E \u044E\u0440\u0438\u0434\u0438\u0447\u043D\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438</b>\n<p class=\"info__text\">\u041A\u043E\u043D\u0441\u043E\u043B\u0456\u0434\u0443\u044E\u0447\u0438 \u0431\u0430\u0433\u0430\u0442\u043E\u0440\u0456\u0447\u043D\u0438\u0439 \u0434\u043E\u0441\u0432\u0456\u0434 \u0456 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0443, \u044E\u0440\u0438\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457 \u0441\u0443\u043F\u0440\u043E\u0432\u043E\u0434\u0436\u0443\u044E\u0442\u044C \u0441\u043A\u043B\u0430\u0434\u043D\u0456 \u043F\u0440\u043E\u0435\u043A\u0442\u0438 \u0456 \u0434\u043E\u0441\u044F\u0433\u0430\u044E\u0442\u044C \u043F\u0440\u0438\u0439\u043D\u044F\u0442\u0442\u044F \u0440\u044F\u0434\u0443 \u0432\u0430\u0436\u043B\u0438\u0432\u0438\u0445 \u0434\u043B\u044F \u0433\u0430\u043B\u0443\u0437\u0456 \u0440\u0456\u0448\u0435\u043D\u044C. \u0411\u0430\u0433\u0430\u0442\u043E \u0437 \u043D\u0438\u0445 \u0444\u043E\u0440\u043C\u0443\u044E\u0442\u044C \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0443 \u0437\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u043E\u0440\u0441\u044C\u043A\u043E\u0433\u043E \u043F\u0440\u0430\u0432\u0430 \u0432 \u0423\u043A\u0440\u0430\u0457\u043D\u0456.</p>\n</div>\n<div class=\"info__slider-item\">\n<h4 class=\"info__title\">\u0411\u0456\u0437\u043D\u0435\u0441-\u043E\u0440\u0456\u0454\u043D\u0442\u043E\u0432\u0430\u043D\u0456 \u044E\u0440\u0438\u0441\u0442\u0438</h4>\n\n<b class=\"info__post-title\">\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u0442\u0430\u0454\u043C\u043E \u0443\u044F\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u043E \u044E\u0440\u0438\u0434\u0438\u0447\u043D\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438</b>\n<p class=\"info__text\">\u041A\u043E\u043D\u0441\u043E\u043B\u0456\u0434\u0443\u044E\u0447\u0438 \u0431\u0430\u0433\u0430\u0442\u043E\u0440\u0456\u0447\u043D\u0438\u0439 \u0434\u043E\u0441\u0432\u0456\u0434 \u0456 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0443, \u044E\u0440\u0438\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457 \u0441\u0443\u043F\u0440\u043E\u0432\u043E\u0434\u0436\u0443\u044E\u0442\u044C \u0441\u043A\u043B\u0430\u0434\u043D\u0456 \u043F\u0440\u043E\u0435\u043A\u0442\u0438 \u0456 \u0434\u043E\u0441\u044F\u0433\u0430\u044E\u0442\u044C \u043F\u0440\u0438\u0439\u043D\u044F\u0442\u0442\u044F \u0440\u044F\u0434\u0443 \u0432\u0430\u0436\u043B\u0438\u0432\u0438\u0445 \u0434\u043B\u044F \u0433\u0430\u043B\u0443\u0437\u0456 \u0440\u0456\u0448\u0435\u043D\u044C. \u0411\u0430\u0433\u0430\u0442\u043E \u0437 \u043D\u0438\u0445 \u0444\u043E\u0440\u043C\u0443\u044E\u0442\u044C \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0443 \u0437\u0430\u0441\u0442\u043E\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u043E\u0440\u0441\u044C\u043A\u043E\u0433\u043E \u043F\u0440\u0430\u0432\u0430 \u0432 \u0423\u043A\u0440\u0430\u0457\u043D\u0456.</p>\n</div>";
$(document).ready(function () {
  $('.achieve__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    appendDots: '.achieve__slider-dots',
    mobileFirst: true,
    responsive: [{
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    }]
  });
  $('.team__slider').slick({
    arrows: false,
    dots: true,
    appendDots: '.team__slider-dots'
  });
});
$(document).ready(function () {
  var infoSlider = $('.info__slider');
  var sliderInitialized = false;

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

  var mediaQuery = window.matchMedia('(min-width: 900px)');

  function handleScreenChange(event) {
    if (event.matches) {
      destroySlider();
      infoSlider.empty();
      infoSlider.html(tabContent);
    } else {
      initSlider();
      openText();
    }
  }

  mediaQuery.addListener(handleScreenChange);
  handleScreenChange(mediaQuery);
});
var ulContent = " <ul class=\"succes-cases__items\">\n<li class=\"succes-cases__item item-1\">\n    <h4 class=\"succes-cases__title\">\u0423\u0441\u043F\u0456\u0448\u043D\u0456 \u043A\u0435\u0439\u0441\u0438</h4>\n</li>\n<li class=\"succes-cases__item item-2\">\n    <p class=\"succes-cases__text\">\u0421\u0443\u043F\u0440\u043E\u0432\u0456\u0434 \u043F\u0440\u043E\u0435\u043A\u0442\u0443 \u0437 \u043A\u0443\u043F\u0456\u0432\u043B\u0456-\u043F\u0440\u043E\u0434\u0430\u0436\u0443 \u0441\u0456\u043B\u044C\u0441\u044C\u043A\u043E\u0433\u043E\u0441\u043F\u043E\u0434\u0430\u0440\u0441\u044C\u043A\u043E\u0457 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0456\u0457</p>\n    <span class=\"succes-cases__work\">Hillel IT School</span>\n</li>\n<li class=\"succes-cases__item item-3\">\n    <p class=\"succes-cases__text\">\u041F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u043E\u0433\u043E \u044E\u0440\u0438\u0434\u0438\u0447\u043D\u043E\u0433\u043E \u0432\u0438\u0441\u043D\u043E\u0432\u043A\u0443 \u0434\u043B\u044F \u0454\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u044C\u043A\u043E\u0433\u043E \u0431\u0430\u043D\u043A\u0443</p>\n    <span class=\"succes-cases__work\">WannaBiz</span>\n</li>\n<li class=\"succes-cases__item item-4\">\n    <p class=\"succes-cases__text\">\u0421\u0443\u043F\u0440\u043E\u0432\u0456\u0434 \u043F\u0440\u043E\u0435\u043A\u0442\u0443 \u0437 \u043A\u0443\u043F\u0456\u0432\u043B\u0456-\u043F\u0440\u043E\u0434\u0430\u0436\u0443 \u0441\u0456\u043B\u044C\u0441\u044C\u043A\u043E\u0433\u043E\u0441\u043F\u043E\u0434\u0430\u0440\u0441\u044C\u043A\u043E\u0457 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0456\u0457</p>\n    <span class=\"succes-cases__work\">tapgerine</span>\n</li>\n<li class=\"succes-cases__item item-5\">\n    <p class=\"succes-cases__text\">\u041E\u0441\u043A\u0430\u0440\u0436\u0435\u043D\u043D\u044F \u043F\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0438\u0445 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u044C-\u0440\u0456\u0448\u0435\u043D\u044C \u0414\u0424\u0421</p>\n    <span class=\"succes-cases__work\">adtelligent</span>\n</li>\n<li class=\"succes-cases__item item-6\">\n    <p class=\"succes-cases__text\">\u0421\u0443\u043F\u0440\u043E\u0432\u0456\u0434 \u043F\u0440\u043E\u0435\u043A\u0442\u0443 \u0437 \u043A\u0440\u0435\u0434\u0438\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u0433\u0440\u043E\u0442\u0440\u0435\u0439\u0434\u0435\u0440\u0456\u0432 \u043C\u0430\u043B\u044C\u0442\u0456\u0439\u0441\u044C\u043A\u0438\u043C \u0431\u0430\u043D\u043A\u043E\u043C</p>\n    <span class=\"succes-cases__work\">Clikky</span>\n</li>\n<li class=\"succes-cases__item item-7\">\n    <p class=\"succes-cases__text\">\u0421\u0443\u043F\u0440\u043E\u0432\u0456\u0434 \u043F\u0440\u043E\u0435\u043A\u0442\u0443 \u0437 \u043A\u0443\u043F\u0456\u0432\u043B\u0456-\u043F\u0440\u043E\u0434\u0430\u0436\u0443 \u0441\u0456\u043B\u044C\u0441\u044C\u043A\u043E\u0433\u043E\u0441\u043F\u043E\u0434\u0430\u0440\u0441\u044C\u043A\u043E\u0457 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0456\u0457</p>\n    <span class=\"succes-cases__work\">tapgerine</span>\n</li>\n</ul>"; // let gridContent = `<div class="succes-cases__items text-center">
// <div class="row">
//   <div class="succes-cases__item item-1 col">
//     <h4 class="succes-cases__title">Успішні кейси</h4>
//   <div class="succes-cases__item item-4 item col">
//     <p class="succes-cases__text">Супровід проекту з купівлі-продажу сільськогосподарської продукції</p>
//     <span class="succes-cases__work">Hillel IT School</span>
//   </div>
// </div>
//   <div class="succes-cases__item item-2 item col">
//     <p class="succes-cases__text">Підготовка комплексного юридичного висновку для європейського банку</p>
//     <span class="succes-cases__work">WannaBiz</span>
//   </div>
//   <div class="succes-cases__item item-3 item col">
//     <p class="succes-cases__text">Супровід проекту з купівлі-продажу сільськогосподарської продукції</p>
//     <span class="succes-cases__work">tapgerine</span>
//   </div>
// </div>
// <div class="row">
//   <div class="succes-cases__item item-5 item col">
//     <p class="succes-cases__text">Оскарження податкових повідомлень-рішень ДФС</p>
//     <span class="succes-cases__work">adtelligent</span>
//   </div>
//   <div class="succes-cases__item item-6 item col">
//     <p class="succes-cases__text">Супровід проекту з кредитування агротрейдерів мальтійським банком</p>
//     <span class="succes-cases__work">Clikky</span>
//   </div>
//   <div class="succes-cases__item item-7 item col">
//     <p class="succes-cases__text">Супровід проекту з купівлі-продажу сільськогосподарської продукції</p>
//     <span class="succes-cases__work">tapgerine</span>
//   </div>
// </div>
// </div>
// </div>`;
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
  var textElements = document.querySelectorAll('.totell__text');
  var imgElements = document.querySelectorAll('.totell__item');
  var winElement = window.matchMedia('(max-width: 900px)');
  imgElements.forEach(function (imgElement, index) {
    imgElement.addEventListener('click', function () {
      var element = textElements[index];

      if (winElement.matches) {
        if (element.style.display == 'block') {
          element.style.display = 'none';
        } else {
          element.style.display = 'block';
        }
      }
    });
  });
}

winElement.addListener(openText);
openText();
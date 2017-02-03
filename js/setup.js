'use strict';

var openSetupWindow = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var closeSetupWindow = document.querySelector('.setup-close');
var setupOverlay = document.querySelector('.overlay');
// одежда
var wizardCoat = document.getElementById('wizard-coat');
// глаза
var wizardEyes = document.getElementById('wizard-eyes');
// мячик
var wizardFireboll = document.querySelector('.setup-fireball-wrap');
// кнопка "Сохранить"
// var buttonSetupSubmit = document.querySelector('.setup-submit');

var ENTER_KEY_CODE = 13;
var ESC_KEY_CODE = 27;

var isActivateEvent = function (evt) {
  return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
};

var hideSetupElement = function () {
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode && evt.keyCode === ESC_KEY_CODE) {
      setupOverlay.classList.add('invisible');
    }
  });
};

// массив значений цвета одежды
var colorWizardCoat = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];
// массив значений цвета глаз
var colorWizardEyes = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'];
// массив значений цвета мячика
var colorWizardFireboll = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'];

// обработчик клика на аватарку
openSetupWindow.addEventListener('click', function () {
  setup.classList.remove('invisible');
  hideSetupElement();
});
// обработчик клика на аватаркус клавиатуры
openSetupWindow.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    openSetupWindow.setAttribute('aria-pressed', 'true');
    setup.classList.remove('invisible');
    hideSetupElement(evt);
    openSetupWindow.setAttribute('aria-pressed', 'false');
  }
});
// обработчик клика на кнопку "Закрыть"
closeSetupWindow.addEventListener('click', function () {
  setup.classList.add('invisible');
});
// обработчик клика на кнопку "Закрыть" с клавиатуры
closeSetupWindow.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    closeSetupWindow.setAttribute('aria-pressed', 'true');
    setup.classList.add('invisible');
    closeSetupWindow.setAttribute('aria-pressed', 'false');
  }
});
// обработчик клика на одежду
wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = colorWizardCoat[(Math.random() * colorWizardCoat.length).toFixed(0)];
});
// обработчик клика на одежду с клавиатуры
wizardCoat.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    wizardCoat.setAttribute('aria-pressed', 'true');
    wizardCoat.style.fill = colorWizardCoat[(Math.random() * colorWizardCoat.length).toFixed(0)];
    wizardCoat.setAttribute('aria-pressed', 'false');
  }
});
// обработчик клика на глаза
wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = colorWizardEyes[(Math.random() * colorWizardEyes.length).toFixed(0)];
});
// обработчик клика на глаза с клавиатуры
wizardEyes.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    wizardEyes.setAttribute('aria-pressed', 'true');
    wizardEyes.style.fill = colorWizardEyes[(Math.random() * colorWizardEyes.length).toFixed(0)];
    wizardEyes.setAttribute('aria-pressed', 'false');
  }
});
// обработчик клика на мячик
wizardFireboll.addEventListener('click', function () {
  wizardFireboll.style.backgroundColor = colorWizardFireboll[(Math.random() * colorWizardFireboll.length).toFixed(0)];
});
// обработчик клика на мячик с клавиатуры
wizardFireboll.addEventListener('keydown', function (evt) {
  if (isActivateEvent(evt)) {
    wizardFireboll.setAttribute('aria-pressed', 'true');
    wizardFireboll.style.backgroundColor = colorWizardFireboll[(Math.random() * colorWizardFireboll.length).toFixed(0)];
    wizardFireboll.setAttribute('aria-pressed', 'false');
  }
});

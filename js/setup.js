'use strict';

var openSetupWindow = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var closeSetupWindow = document.querySelector('.setup-close');

// одежда
var wizardCoat = document.getElementById('wizard-coat');
// глаза
var wizardEyes = document.getElementById('wizard-eyes');
// мячик
var wizardFireboll = document.querySelector('.setup-fireball-wrap');

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
});
// обработчик клика на кнопку "Закрыть"
closeSetupWindow.addEventListener('click', function () {
  setup.classList.add('invisible');
});
// обработчик клика на одежду
wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = colorWizardCoat[(Math.random() * colorWizardCoat.length).toFixed(0)];
});
// обработчик клика на глаза
wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = colorWizardEyes[(Math.random() * colorWizardEyes.length).toFixed(0)];
});
// обработчик клика на мячик
wizardFireboll.addEventListener('click', function () {
  wizardFireboll.style.backgroundColor = colorWizardFireboll[(Math.random() * colorWizardFireboll.length).toFixed(0)];
});

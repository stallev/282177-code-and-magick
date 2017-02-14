'use strict';

var openSetup = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var closeSetup = document.querySelector('.setup-close');
var setupOverlay = document.querySelector('.overlay');
var wizardCoat = document.getElementById('wizard-coat');
var wizardEyes = document.getElementById('wizard-eyes');
var wizardFireboll = document.querySelector('.setup-fireball-wrap');

var ENTER_KEY_CODE = 13;
var ESC_KEY_CODE = 27;

var colorWizardCoat = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];

var colorWizardEyes = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'];

var colorWizardFireboll = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'];

openSetup.addEventListener('click', onOpen);
openSetup.addEventListener('keydown', onOpenByEnter);
closeSetup.addEventListener('click', onClose);
closeSetup.addEventListener('keydown', onCloseByEnter);
wizardCoat.addEventListener('click', onGetWizardCoatColor);
wizardCoat.addEventListener('keydown', onGetWizardCoatColorByEnter);
wizardEyes.addEventListener('click', onGetWizardEyesColor);
wizardEyes.addEventListener('keydown', onGetWizardEyesColorByEnter);
wizardFireboll.addEventListener('click', onGetWizardFirebollColor);
wizardFireboll.addEventListener('keydown', onGetWizardFirebollColorByEnter);

document.addEventListener('keydown', onCloseByEsc);

function isEnterEvent(evt) {
  return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
}

function isEscapeEvent(evt) {
  return evt.keyCode && evt.keyCode === ESC_KEY_CODE;
}

function onCloseByEsc(evt) {
  if (isEscapeEvent(evt)) {
    setupOverlay.classList.add('invisible');
  }
}

function onClose() {
  close();
}

function onCloseByEnter(evt) {
  if (isEnterEvent(evt)) {
    close();
  }
}
function onOpen() {
  open();
}
function open() {
  setup.classList.remove('invisible');
  openSetup.setAttribute('aria-pressed', 'true');
}

function onOpenByEnter(evt) {
  if (isEnterEvent(evt)) {
    open();
  }
}

function close() {
  setup.classList.add('invisible');
  openSetup.setAttribute('aria-pressed', 'false');
}

function getRandomColor(element, property, array) {
  var color = array[(Math.random() * array.length).toFixed(0)];
  element.style[property] = color;
}

function onGetWizardCoatColor() {
  getRandomColor(wizardCoat, 'fill', colorWizardCoat);
}

function onGetWizardCoatColorByEnter(evt) {
  if (isEnterEvent(evt)) {
    getRandomColor(wizardCoat, 'fill', colorWizardCoat);
  }
}

function onGetWizardEyesColor() {
  getRandomColor(wizardEyes, 'fill', colorWizardEyes);
}

function onGetWizardEyesColorByEnter(evt) {
  if (isEnterEvent(evt)) {
    getRandomColor(wizardEyes, 'fill', colorWizardEyes);
  }
}

function onGetWizardFirebollColor() {
  getRandomColor(wizardFireboll, 'backgroundColor', colorWizardFireboll);
}

function onGetWizardFirebollColorByEnter(evt) {
  if (isEnterEvent(evt)) {
    getRandomColor(wizardFireboll, 'backgroundColor', colorWizardFireboll);
  }
}

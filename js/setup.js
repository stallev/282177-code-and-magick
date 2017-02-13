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

openSetup.addEventListener('click', open);
openSetup.addEventListener('keydown', openByEnter);
closeSetup.addEventListener('click', close);
closeSetup.addEventListener('keydown', closeByEsc);
wizardCoat.addEventListener('click', getWizardCoatColor);
wizardCoat.addEventListener('keydown', getWizardCoatColorByEnter);
wizardEyes.addEventListener('click', getWizardEyesColor);
wizardEyes.addEventListener('keydown', getWizardEyesColorByEnter);
wizardFireboll.addEventListener('click', getWizardFirebollColor);
wizardFireboll.addEventListener('keydown', getWizardFirebollColorByEnter);
document.addEventListener('keydown', hideSetupElement);

function togglingAria(label) {
  var pressed = (label.getAttribute('aria-pressed') === 'true');
  label.setAttribute('aria-pressed', !pressed);
}

function isActivateEvent(evt) {
  return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
}

function isEscapeEvent(evt) {
  return evt.keyCode && evt.keyCode === ESC_KEY_CODE;
}

function hideSetupElement(evt) {
  if (isEscapeEvent) {
    setupOverlay.classList.add('invisible');
  }
}

function closeByEsc(evt) {
  if (isActivateEvent(evt)) {
    close();
  }
}

function open() {
  setup.classList.remove('invisible');
  openSetup.setAttribute('aria-pressed', 'true');
}

function openByEnter(evt) {
  if (isActivateEvent(evt)) {
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

function getWizardCoatColor() {
  getRandomColor(wizardCoat, 'fill', colorWizardCoat);
}

function getWizardCoatColorByEnter(evt) {
  if (isActivateEvent(evt)) {
    getRandomColor(wizardCoat, 'fill', colorWizardCoat);
    togglingAria(wizardCoat);
  }
}

function getWizardEyesColor() {
  getRandomColor(wizardEyes, 'fill', colorWizardEyes);
}
function getWizardEyesColorByEnter(evt) {
  if (isActivateEvent(evt)) {
    getRandomColor(wizardEyes, 'fill', colorWizardEyes);
    togglingAria(wizardEyes);
  }
}

function getWizardFirebollColor() {
  getRandomColor(wizardFireboll, 'backgroundColor', colorWizardFireboll);
}

function getWizardFirebollColorByEnter(evt) {
  if (isActivateEvent(evt)) {
    getRandomColor(wizardFireboll, 'backgroundColor', colorWizardFireboll);
    togglingAria(wizardFireboll);
  }
}

'use strict';

var OpenSetupWindow = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var CloseSetupWindow = document.querySelector('.setup-close');
var WizardCoat = document.getElementById('wizard-coat');
var WizardEyes = document.getElementById('wizard-eyes');
var WizardFireboll = document.querySelector('.setup-fireball-wrap');
var ColorWizardCoat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var ColorWizardEyes = ['black', 'red', 'blue', 'yellow', 'green'];
var ColorWizardFireboll = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
OpenSetupWindow.addEventListener('click', function () {
  setup.classList.remove('invisible');
});
CloseSetupWindow.addEventListener('click', function () {
  setup.classList.add('invisible');
});
WizardCoat.addEventListener('click', function () {
  WizardCoat.style.fill = ColorWizardCoat[(Math.random() * ColorWizardCoat.length).toFixed(0)];
});
WizardEyes.addEventListener('click', function () {
  WizardEyes.style.fill = ColorWizardEyes[(Math.random() * ColorWizardEyes.length).toFixed(0)];
});
WizardFireboll.addEventListener('click', function () {
  WizardFireboll.style.fill = ColorWizardFireboll[(Math.random() * ColorWizardFireboll.length).toFixed(0)];
});

'use strict'

function createClock() {
  var clockFace = document.createElement('div');
  var clockFaceWidth = clockFace.style.width = 500 + 'px'; //Устанавливаем размер циферблата
  var clockFaceHeight = clockFace.style.height = 500 + 'px'; //Устанавливаем размер циферблата
  clockFace.className = "clock";
  document.body.appendChild(clockFace);

  createClockNum();
  createClockCenter();
  createHandHour();
  createHandMin();
  createHandSec();
  createDate();

  pos();
}
createClock();

function createClockNum() {
  var clockFace = document.querySelector('.clock');

  for (var i = 1; i <= 12; i++) {
    var clockNum = document.createElement('div');
    clockNum.style.width = clockFace.offsetWidth / 9 + 'px'; //Зависят от размера циферблата
    clockNum.style.height = clockFace.offsetHeight / 9 + 'px'; //Зависят от размера циферблата

    var clockNumText = document.createTextNode(i);
    clockNum.appendChild(clockNumText);
    clockNum.className = 'clock-num';

    clockFace.appendChild(clockNum);

    clockNum.style.fontSize = clockNum.offsetWidth / 1.5 + 'px'; //Размер шрифта для цифр на циферблате
  }
}

function createClockCenter() {
  var clockFace = document.querySelector('.clock');

  var clockCenter = document.createElement('div');
  clockCenter.style.width = 3 + 'px';
  clockCenter.style.height = 3 + 'px';
  clockCenter.className = 'clock-center';

  clockFace.appendChild(clockCenter);
}

function createHandHour() {
  var clockFace = document.querySelector('.clock');

  var handHour = document.createElement('div');
  handHour.style.width = 7 + 'px';
  handHour.style.height = clockFace.offsetWidth / 3 + 'px';
  handHour.className = 'hand-hour';
  clockFace.appendChild(handHour);
}

function createHandMin() {
  var clockFace = document.querySelector('.clock');

  var handMin = document.createElement('div');
  handMin.style.width = 5 + 'px';
  handMin.style.height = clockFace.offsetWidth / 2.5 + 'px';
  handMin.className = 'hand-min';
  clockFace.appendChild(handMin);
}

function createHandSec() {
  var clockFace = document.querySelector('.clock');

  var handSec = document.createElement('div');
  handSec.style.width = 3 + 'px';
  handSec.style.height = clockFace.offsetHeight / 2.1 + 'px';
  handSec.className = 'hand-sec';
  clockFace.appendChild(handSec);
}

function createDate() {
  var clockFace = document.querySelector('.clock');

  var date = document.createElement('div');
  date.style.width = 100 + '%';
  date.style.height = date.offsetHeight + 'px';
  date.className = 'clock-date';
  clockFace.appendChild(date);

  date.style.fontSize = clockFace.offsetHeight / 10 + 'px';
}

function pos() {
  var clockFace = document.querySelector('.clock');
  var clockNum = document.querySelectorAll('.clock-num');
  var clockDate = document.querySelector('.clock-date');
  var clockCenter = document.querySelector('.clock-center');
  var handHour = document.querySelector('.hand-hour');
  var handMin = document.querySelector('.hand-min');
  var handSec = document.querySelector('.hand-sec');

  // Центр часов
  var clockFaceCenterX = clockFace.offsetWidth / 2;
  var clockFaceCenterY = clockFace.offsetHeight / 2;

  // Позиционируем время
  clockDate.style.left = clockFaceCenterX - clockDate.offsetWidth / 2 + 'px';
  clockDate.style.top = clockFaceCenterY - clockFaceCenterY / 2 + 'px';

  // Позиционируем центр
  clockCenter.style.left = clockFaceCenterX - clockCenter.offsetWidth / 2 + 'px';
  clockCenter.style.top = clockFaceCenterY - clockCenter.offsetHeight / 2 + 'px';

  // Позиционируем часовую стрелку
  handHour.style.left = clockFaceCenterX - handHour.offsetWidth / 2 + 'px';
  handHour.style.top = clockFaceCenterY - (handHour.offsetHeight * 0.9) + 'px';

  handHour.style.transformOrigin = 'center 90%';

  // Позиционируем минутную стрелку 
  handMin.style.left = clockFaceCenterX - handMin.offsetWidth / 2 + 'px';
  handMin.style.top = clockFaceCenterY - (handMin.offsetHeight * 0.9) + 'px';

  handMin.style.transformOrigin = 'center 90%';

  // Позиционируем секундную стрелку
  handSec.style.left = clockFaceCenterX - handSec.offsetWidth / 2 + 'px';
  handSec.style.top = clockFaceCenterY - (handSec.offsetHeight * 0.9) + 'px';

  handSec.style.transformOrigin = 'center 90%';

  // Позиционируем часы циферблата
  for (var i = 0; i < clockNum.length; i++) {

    var angle = parseFloat(i * 30 + 30) / 180 * Math.PI;
    var radius = parseFloat(clockFace.offsetWidth / 2.5);

    var clockNumCenterX = clockFaceCenterX + radius * Math.sin(angle);
    var clockNumCenterY = clockFaceCenterY - radius * Math.cos(angle);

    clockNum[i].style.left = Math.round(clockNumCenterX - clockNum[i].offsetWidth / 2) + 'px';
    clockNum[i].style.top = Math.round(clockNumCenterY - clockNum[i].offsetHeight / 2) + 'px';
  }

  setHands(); //Позиционируем стрелки
}

function setHands() {
  var dateTime = new Date();

  var hour = dateTime.getHours();
  var min = dateTime.getMinutes();
  var sec = dateTime.getSeconds();

  var angleHour = (hour % 12) / 12 * 360 + min / 60 * 30;
  var angleMin = min / 60 * 360;
  var angleSec = sec / 60 * 360;

  document.querySelector('.clock-date').innerHTML = dateTime.toLocaleTimeString();
  document.querySelector('.hand-hour').style.transform = 'rotate(' + angleHour + 'deg)';
  document.querySelector('.hand-min').style.transform = 'rotate(' + angleMin + 'deg)';
  document.querySelector('.hand-sec').style.transform = 'rotate(' + angleSec + 'deg)';
}

setInterval(function () {
  setHands();
}, 1000);
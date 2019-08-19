'use strict'

function createSVG() {
  // Обертка
  var clockWrap = document.createElement('div');
  var clockWrapWidth = clockWrap.style.width = 500 + 'px'; //Устанавливаем размер обертки
  var clockWrapHeight = clockWrap.style.height = 500 + 'px'; //Устанавливаем размер обертки
  clockWrap.className = 'clock';

  document.body.appendChild(clockWrap);

  // Сам элемент SVG
  var svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgElem.setAttribute('width', clockWrapWidth);
  svgElem.setAttribute('height', clockWrapHeight);
  svgElem.id = 'clock';
  clockWrap.appendChild(svgElem);

  var clock = document.getElementById('clock');

  // Константы
  const CLOCK_WIDTH = parseInt(clock.getAttribute('width'));
  const CLOCK_HEIGHT = parseInt(clock.getAttribute('height'));
  const CLOCK_RADIUS = parseFloat(CLOCK_HEIGHT / 2);
  const CLOCK_CENTER_X = CLOCK_WIDTH / 2;
  const CLOCK_CENTER_Y = CLOCK_HEIGHT / 2;

  // Создаем циферблат
  var clockCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  clockCircle.setAttribute('fill', 'yellow');
  clockCircle.setAttribute('cx', CLOCK_CENTER_X);
  clockCircle.setAttribute('cy', CLOCK_CENTER_Y);
  clockCircle.setAttribute('r', CLOCK_RADIUS);

  clock.appendChild(clockCircle);

  // Создаем цифры на часах
  for (var i = 1; i <= 12; i++) {

    // Создаем обертку для цифр и текста
    var group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.setAttribute('class', 'group')
    clock.appendChild(group);

    // Создаем часовые деления
    var clockNum = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    var angle = parseFloat(i * 30) / 180 * Math.PI;

    clockNum.setAttribute('stroke', 'gray');
    clockNum.setAttribute('fill', 'lightblue');
    clockNum.setAttribute('cx', CLOCK_CENTER_X + (CLOCK_RADIUS - CLOCK_WIDTH / 10) * Math.sin(angle));
    clockNum.setAttribute('cy', CLOCK_CENTER_Y - (CLOCK_RADIUS - CLOCK_WIDTH / 10) * Math.cos(angle));
    clockNum.setAttribute('r', CLOCK_RADIUS / 10);

    group.appendChild(clockNum);

    var clockNumCenterX = clockNum.getAttribute('cx');
    var clockNumCenterY = clockNum.getAttribute('cy');
    var clockNumRadius = clockNum.getAttribute('r');

    // Создаем цифры начасах
    var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', clockNumCenterX);
    text.setAttribute('y', Number(clockNumCenterY) + clockNumRadius / 2);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('font-size', clockNumRadius * 1.55);

    text.textContent = [i];

    group.appendChild(text);
  }

  // Создаем часовую стрелку
  var handHour = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  handHour.setAttribute('stroke', 'green');
  handHour.setAttribute('stroke-width', CLOCK_RADIUS / 35);
  handHour.setAttribute('x1', CLOCK_CENTER_X);
  handHour.setAttribute('y1', CLOCK_CENTER_Y * 1.1);
  handHour.setAttribute('x2', CLOCK_CENTER_X);
  handHour.setAttribute('y2', CLOCK_CENTER_Y * 0.4);

  handHour.id = 'hand-hour';

  clock.appendChild(handHour);

  // Создаем минутную стрелку
  var handMin = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  handMin.setAttribute('stroke', 'red');
  handMin.setAttribute('stroke-width', CLOCK_RADIUS / 50);
  handMin.setAttribute('x1', CLOCK_CENTER_X);
  handMin.setAttribute('y1', CLOCK_CENTER_Y * 1.1);
  handMin.setAttribute('x2', CLOCK_CENTER_X);
  handMin.setAttribute('y2', CLOCK_CENTER_Y * 0.3);

  handMin.id = 'hand-min';

  clock.appendChild(handMin);

  // Создаем секундную стрелку
  var handSec = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  handSec.setAttribute('stroke', 'black');
  handSec.setAttribute('stroke-width', CLOCK_RADIUS / 83.33);
  handSec.setAttribute('x1', CLOCK_CENTER_X);
  handSec.setAttribute('y1', CLOCK_CENTER_Y * 1.1);
  handSec.setAttribute('x2', CLOCK_CENTER_X);
  handSec.setAttribute('y2', CLOCK_CENTER_Y * 0.15);

  handSec.id = 'hand-sec';

  clock.appendChild(handSec);

  // Показываем часы
  var date = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  date.setAttribute('x', CLOCK_CENTER_X);
  date.setAttribute('y', CLOCK_CENTER_Y - CLOCK_RADIUS / 2.75);
  date.setAttribute('text-anchor', 'middle');
  date.setAttribute('font-size', CLOCK_RADIUS / 5);
  date.id = 'date';

  svgElem.appendChild(date);

  // Расставляем стрелки при загрузке часов
  setHands();
}
createSVG();

// Заводим часы
function setHands() {
  var dateTime = new Date();

  var hour = dateTime.getHours();
  var min = dateTime.getMinutes();
  var sec = dateTime.getSeconds();
  var msec = dateTime.getMilliseconds();

  var angleHour = (hour % 12) / 12 * 360 + min / 60 * 30;
  var angleMin = min / 60 * 360;
  var angleSec = sec / 60 * 360;

  var clockCenterX = parseInt(document.getElementById('clock').getAttribute('width')) / 2;
  var clockCenterY = parseInt(document.getElementById('clock').getAttribute('height')) / 2;

  document.getElementById('date').textContent = dateTime.toLocaleTimeString();
  document.getElementById('hand-hour').setAttribute('transform', 'rotate(' + angleHour + ' ' + clockCenterX + ' ' + clockCenterY + ')');
  document.getElementById('hand-min').setAttribute('transform', 'rotate(' + angleMin + ' ' + clockCenterX + ' ' + clockCenterY + ')');
  document.getElementById('hand-sec').setAttribute('transform', 'rotate(' + angleSec + ' ' + clockCenterX + ' ' + clockCenterY + ')');
}

setInterval(function () {
  setHands();
}, 1000);
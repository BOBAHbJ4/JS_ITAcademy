'use strict'

var canvasElem = document.createElement('canvas');
canvasElem.id = 'clock';
canvasElem.width = 500;
canvasElem.height = 500;
document.body.appendChild(canvasElem);


function createClock() {
  var clock = document.getElementById('clock');
  var ctx = clock.getContext('2d');

  // Расчет координат центра и радиуса часов
  const CLOCK_RADIUS = clock.width / 2 - 10;
  const CLOCK_CENTER_X = clock.width / 2;
  const CLOCK_CENTER_Y = clock.height / 2;
  const CLOCK_WIDTH = clock.width;
  const CLOCK_HEIGHT = clock.height;

  // Очистка экрана
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, clock.width, clock.height);

  // Рисуем циферблат
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.fillStyle = 'yellow';
  ctx.lineWidth = 3;
  ctx.arc(CLOCK_CENTER_X, CLOCK_CENTER_Y, CLOCK_RADIUS, 0, 2 * Math.PI, false);
  ctx.moveTo(CLOCK_CENTER_X, CLOCK_CENTER_Y)
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  // Рисуем кружки для цифр
  for (var i = 1; i <= 12; i++) {

    var angle = parseFloat(i * 30) / 180 * Math.PI;
    var numX = CLOCK_CENTER_X + (CLOCK_RADIUS - CLOCK_WIDTH / 10) * Math.sin(angle);
    var numY = CLOCK_CENTER_Y - (CLOCK_RADIUS - CLOCK_WIDTH / 10) * Math.cos(angle);
    var numRadius = CLOCK_RADIUS / 10;

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'lightblue';
    ctx.lineWidth = 2;
    ctx.arc(numX, numY, numRadius, 0, 2 * Math.PI, false);
    ctx.moveTo(CLOCK_CENTER_X, CLOCK_CENTER_Y)
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }

  // Рисуем цифры на циферблате
  for (var i = 1; i <= 12; i++) {

    var angle = parseFloat(i * 30) / 180 * Math.PI;
    var textX = CLOCK_CENTER_X + (CLOCK_RADIUS - CLOCK_WIDTH / 10) * Math.sin(angle);
    var textY = CLOCK_CENTER_Y - (CLOCK_RADIUS - CLOCK_WIDTH / 10) * Math.cos(angle);
    var textSize = CLOCK_WIDTH / 12.9 + 'px';

    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.font = 'italic normal ' + textSize + ' Arial';
    if (i <= 9) {
      ctx.fillText(i, textX - CLOCK_WIDTH / 38.46, textY + CLOCK_WIDTH / 38.46);
    } else {
      ctx.fillText(i, textX - CLOCK_WIDTH / 20, textY + CLOCK_WIDTH / 38.46);
    }
    ctx.closePath();
  }

  // Устанавливаем время и угол наклона стрелок
  var time = new Date();

  var angleHour = (time.getHours() % 12) / 12 * 360 + time.getMinutes() / 60 * 30;
  var angleMin = time.getMinutes() / 60 * 360;
  var angleSec = time.getSeconds() / 60 * 360;

  // Рисуем стрелки
  var secLength = CLOCK_RADIUS - CLOCK_RADIUS / 5.5;
  var minLength = CLOCK_RADIUS - CLOCK_RADIUS / 2.8;
  var hourLength = minLength / 1.25;

  // Рисуем часовую стрелку
  ctx.beginPath();
  ctx.lineWidth = 6;
  ctx.moveTo(CLOCK_CENTER_X, CLOCK_CENTER_Y);
  ctx.lineTo(CLOCK_CENTER_X + hourLength * Math.cos(Math.PI / 2 - angleHour * (Math.PI / 180)),
    CLOCK_CENTER_Y - hourLength * Math.sin(Math.PI / 2 - angleHour * (Math.PI / 180)));
  ctx.stroke();
  ctx.closePath();

  // Рисуем минутную стрелку
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = 'blue';
  ctx.moveTo(CLOCK_CENTER_X, CLOCK_CENTER_Y);
  ctx.lineTo(CLOCK_CENTER_X + minLength * Math.cos(Math.PI / 2 - angleMin * (Math.PI / 180)),
    CLOCK_CENTER_Y - minLength * Math.sin(Math.PI / 2 - angleMin * (Math.PI / 180)));
  ctx.stroke();
  ctx.closePath();

  // Рисуем секундную стрелку
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'red';
  ctx.moveTo(CLOCK_CENTER_X, CLOCK_CENTER_Y);
  ctx.lineTo(CLOCK_CENTER_X + secLength * Math.cos(Math.PI / 2 - angleSec * (Math.PI / 180)),
    CLOCK_CENTER_Y - secLength * Math.sin(Math.PI / 2 - angleSec * (Math.PI / 180)));
  ctx.stroke();
  ctx.closePath();

  // Рисуем центр
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.fillStyle = 'lightblue';
  ctx.lineWidth = 1;
  ctx.arc(CLOCK_CENTER_X, CLOCK_CENTER_Y, 5, 0, 2 * Math.PI, false);
  ctx.moveTo(CLOCK_CENTER_X, CLOCK_CENTER_Y)
  ctx.stroke();
  ctx.fill();
  ctx.closePath();

  // Добавляем часы
  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.fillText(time.toLocaleTimeString(), CLOCK_CENTER_X - CLOCK_WIDTH / 6, CLOCK_CENTER_Y - CLOCK_HEIGHT / 6);
  ctx.font = 'italic normal ' + textSize + ' Arial';
  ctx.closePath();
}

// Запускаем часы
setTimeout(function run() {
  var time = new Date();
  var mSec = time.getMilliseconds()
  createClock();
  setTimeout(run, 1000 - mSec + 20);
}, 20);
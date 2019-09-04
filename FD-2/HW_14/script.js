'use strict'

const W = 500;
const H = 300;
const W_BALL = 15;
const H_BALL = 15;
const X_BALL = W / 2;
const Y_BALL = H / 2;
const R_BALL = W_BALL / 2;
const W_BRACKET = 10;
const H_BRACKET = 60;

var RAF =
  // находим, какой метод доступен
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  // ни один не доступен
  // будем работать просто по таймеру
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  }

// Создаем игровое поле
var canvas = document.getElementById('canvas');
canvas.width = W;
canvas.height = H;
var ctx = canvas.getContext('2d');

function clearAll() {
  ctx.clearRect(0, 0, W, H);
}

function drawRect(x, y, w, h, color) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
  ctx.strokeRect(x, y, w, h);
  ctx.closePath();
}

function drawCircle(x, y, r, color) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(x, y, r, 0, Math.PI * 2, false);
  ctx.fill();
  ctx.closePath();
}

// Создаем поле
var field = {
  width: W,
  height: H,
  color: 'yellow',

  draw: function () {
    drawRect(0, 0, this.width, this.height, this.color)
  }
}

// Создаем мяч
var ball = {
  posX: X_BALL,
  posY: Y_BALL,
  radius: R_BALL,
  speedX: 0,
  speedY: 0,
  color: 'red',

  draw: function () {
    drawCircle(this.posX, this.posY, this.radius, this.color);
  },

  run: function () {
    this.posX = X_BALL
    this.posY = Y_BALL;
    this.speedX = 2;
    this.speedY = 2;
  }
}

// Создаем левого игрока
var player1 = {
  width: W_BRACKET,
  height: H_BRACKET,
  posX: 0,
  posY: H / 2 - H_BRACKET / 2,
  speed: 0,
  color: 'blue',
  score: 0,

  draw: function () {
    drawRect(this.posX, this.posY, this.width, this.height, this.color)
  },

  updateScore: function () {
    var counter = document.getElementById('pl1');
    counter.innerHTML = this.score;
  }
}

// Создаем правого игрока
var player2 = {
  width: W_BRACKET,
  height: H_BRACKET,
  posX: W - W_BRACKET,
  posY: H / 2 - H_BRACKET / 2,
  speed: 0,
  color: 'green',
  score: 0,

  draw: function () {
    drawRect(this.posX, this.posY, this.width, this.height, this.color)
  },

  updateScore: function () {
    var counter = document.getElementById('pl2');
    counter.innerHTML = this.score;
  }
}

// Пуск шарика
function start() {
  ball.run();
}

// Отрисовка игрового процесса
function tick() {

  // Движение ракеток
  player1.posY += player1.speed;
  player2.posY += player2.speed;

  document.onkeydown = function (e) {
    // Shift-вверх
    if (e.keyCode === 16) {
      player1.speed = -3;
    }
    // Ctrl-вниз
    if (e.keyCode === 17) {
      player1.speed = 3;
    }
    // Up-вверх
    if (e.keyCode === 38) {
      player2.speed = -3;
    }
    // Down-вниз
    if (e.keyCode === 40) {
      player2.speed = 3;
    }
  }

  document.onkeyup = function (e) {
    // Shift-вверх
    if (e.keyCode === 16) {
      player1.speed = 0;
    }
    // Ctrl-вниз
    if (e.keyCode === 17) {
      player1.speed = 0;
    }
    // Up-вверх
    if (e.keyCode === 38) {
      player2.speed = 0;
    }
    // Down-вниз
    if (e.keyCode === 40) {
      player2.speed = 0;
    }
  }

  // Вышла ли ракетка выше стены?
  if (player1.posY <= 0) {
    player1.posY = 0;
  }
  if (player2.posY <= 0) {
    player2.posY = 0;
  }

  // Вышла ли ракетка ниже стены?
  if (player1.posY + player1.height > field.height) {
    player1.posY = field.height - player1.height;
  }
  if (player2.posY + player2.height > field.height) {
    player2.posY = field.height - player2.height;
  }

  // Движение шарика
  ball.posX += ball.speedX;
  ball.posY += ball.speedY;

  // вылетел ли мяч правее стены?
  if (ball.posX + ball.radius > field.width) {
    ball.speedX = 0;
    ball.speedY = 0;
    ball.posX = field.width - ball.radius;
    player1.score++;
    player1.updateScore();
  }

  // ударился ли мяч о правую ракетку?
  if (ball.posX + ball.radius >= player2.posX && ball.posX <= player2.posX + player2.width) {
    if (ball.posY >= player2.posY && ball.posY <= player2.posY + player2.height) {
      ball.speedX = -ball.speedX;
    }
  }

  // вылетел ли мяч левее стены?
  if (ball.posX - ball.radius < 0) {
    ball.speedX = 0;
    ball.speedY = 0;
    ball.posX = 0 + ball.radius;
    player2.score++;
    player2.updateScore();
  }

  // ударился ли мяч о левую ракетку?
  if (ball.posX - ball.radius <= player1.posX + player1.width) {
    if (ball.posY + ball.radius >= player1.posY && ball.posY - ball.radius <= player1.posY + player1.height) {
      ball.speedX = -ball.speedX;
    }
  }

  // вылетел ли мяч ниже пола?
  if (ball.posY + ball.radius > field.height) {
    ball.speedY = -ball.speedY;
    ball.posY = field.height - ball.radius;
  }

  // вылетел ли мяч выше пола?
  if (ball.posY - ball.radius < 0) {
    ball.speedY = -ball.speedY;
    ball.posY = 0 + ball.radius;
  }

  field.draw();
  ball.draw();
  player1.draw();
  player2.draw();

  RAF(tick);
}
tick();
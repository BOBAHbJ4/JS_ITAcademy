'use strict'
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

const W = 500;
const H = 300;
const W_BALL = 15;
const H_BALL = 15;
const X_BALL = W / 2;
const Y_BALL = H / 2;
const R_BALL = W_BALL / 2;
const W_BRACKET = 10;
const H_BRACKET = 60;


var svg = document.getElementById('svg');

// Создаем игровое поле
var field = {
  width: W,
  height: H,
  color: 'yellow',

  init: function () {
    var field = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    field.setAttribute('stroke', 'black');
    field.setAttribute('stroke-width', 1);
    field.setAttribute('fill', this.color);
    field.setAttribute('width', this.width);
    field.setAttribute('height', this.height);
    svg.appendChild(field)
  }
}
field.init();

// Создаем мяч
var ball = {
  posX: X_BALL,
  posY: Y_BALL,
  radius: R_BALL,
  speedX: 0,
  speedY: 0,
  color: 'red',

  init: function () {
    var ball = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    ball.setAttribute('fill', this.color);
    ball.setAttribute('cx', this.posX);
    ball.setAttribute('cy', this.posY);
    ball.setAttribute('r', this.radius);
    ball.id = 'ball';
    svg.appendChild(ball);
  },

  move: function () {
    var ball = document.getElementById('ball');
    ball.setAttribute('cx', this.posX);
    ball.setAttribute('cy', this.posY);
  },

  run: function () {
    this.posX = X_BALL
    this.posY = Y_BALL;
    this.speedX = 2;
    this.speedY = 2;
  }
}
ball.init();

// Создаем левого игрока
var player1 = {
  width: W_BRACKET,
  height: H_BRACKET,
  posX: 0,
  posY: H / 2 - H_BRACKET / 2,
  speed: 0,
  color: 'blue',
  score: 0,

  init: function () {
    var player1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    player1.setAttribute('stroke', 'black');
    player1.setAttribute('stroke-width', 1);
    player1.setAttribute('fill', this.color);
    player1.setAttribute('width', this.width);
    player1.setAttribute('height', this.height);
    player1.setAttribute('x', this.posX);
    player1.setAttribute('y', this.posY);
    player1.id = 'player1';
    svg.appendChild(player1);
  },

  move: function () {
    var player1 = document.getElementById('player1');
    player1.setAttribute('x', this.posX);
    player1.setAttribute('y', this.posY);
  },

  updateScore: function () {
    var counter = document.getElementById('pl1');
    counter.innerHTML = this.score;
  }
}
player1.init();

// Создаем правого игрока
var player2 = {
  width: W_BRACKET,
  height: H_BRACKET,
  posX: W - W_BRACKET,
  posY: H / 2 - H_BRACKET / 2,
  speed: 0,
  color: 'green',
  score: 0,

  init: function () {
    var player2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    player2.setAttribute('stroke', 'black');
    player2.setAttribute('stroke-width', 1);
    player2.setAttribute('fill', this.color);
    player2.setAttribute('width', this.width);
    player2.setAttribute('height', this.height);
    player2.setAttribute('x', this.posX);
    player2.setAttribute('y', this.posY);
    player2.id = 'player2';
    svg.appendChild(player2)
  },

  move: function () {
    var player2 = document.getElementById('player2');
    player2.setAttribute('x', this.posX);
    player2.setAttribute('y', this.posY);
  },

  updateScore: function () {
    var counter = document.getElementById('pl2');
    counter.innerHTML = this.score;
  }
}
player2.init();

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

  ball.move();
  player1.move();
  player2.move();

  RAF(tick);
}
tick();
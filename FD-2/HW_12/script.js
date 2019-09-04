'use strict'

const W = 500;
const H = 300;
const W_BALL = 15;
const H_BALL = 15;
const W_BRACKET = 10;
const H_BRACKET = 60;

// Создаем игровое поле
var IDField = document.createElement('div');
IDField.id = 'field';
document.body.appendChild(IDField);

var field = {
  width: W,
  height: H,

  update: function () {
    var field = document.getElementById('field');
    field.style.width = Math.round(this.width) + 'px';
    field.style.height = Math.round(this.height) + 'px';
  }
}

// Создаем мяч
var IDBall = document.createElement('div');
IDBall.id = 'ball';
IDField.appendChild(IDBall);

var ball = {
  width: W_BALL,
  height: H_BALL,
  posX: W / 2 - W_BALL / 2,
  posY: H / 2 - H_BALL / 2,
  speedX: 0,
  speedY: 0,

  update: function () {
    var ball = document.getElementById('ball');
    ball.style.left = Math.round(this.posX) + 'px';
    ball.style.top = Math.round(this.posY) + 'px';
    ball.style.width = Math.round(this.width) + 'px';
    ball.style.height = Math.round(this.height) + 'px';
  },

  run: function () {
    this.posX = W / 2 - W_BALL / 2;
    this.posY = H / 2 - H_BALL / 2;
    this.speedX = 5;
    this.speedY = 5;
  }
}

// Создаем левого игрока
var IDPlayer1 = document.createElement('div');
IDPlayer1.id = 'player1';
IDField.appendChild(IDPlayer1);

var player1 = {
  width: W_BRACKET,
  height: H_BRACKET,
  posX: 0,
  posY: H / 2 - H_BRACKET / 2,
  speed: 0,
  score: 0,

  update: function () {
    var player1 = document.getElementById('player1');

    player1.style.left = Math.round(this.posX) + 'px';
    player1.style.top = Math.round(this.posY) + 'px';
    player1.style.width = Math.round(this.width) + 'px';
    player1.style.height = Math.round(this.height) + 'px';
  },

  updateScore: function () {
    var counter = document.getElementById('pl1');
    counter.innerHTML = this.score;
  }
}

// Создаем правого игрока
var IDPlayer2 = document.createElement('div');
IDPlayer2.id = 'player2';
IDField.appendChild(IDPlayer2);

var player2 = {
  width: W_BRACKET,
  height: H_BRACKET,
  posX: W - W_BRACKET,
  posY: H / 2 - H_BRACKET / 2,
  speed: 0,
  score: 0,

  update: function () {
    var player2 = document.getElementById('player2');
    player2.style.left = Math.round(this.posX) + 'px';
    player2.style.top = Math.round(this.posY) + 'px';
    player2.style.width = Math.round(this.width) + 'px';
    player2.style.height = Math.round(this.height) + 'px';
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

  // Движение мяча
  ball.posX += ball.speedX;
  ball.posY += ball.speedY;

  // Движение ракеток
  player1.posY += player1.speed;
  player2.posY += player2.speed;

  document.onkeydown = function (e) {
    // Shift-вверх
    if (e.keyCode === 16) {
      player1.speed = -10;
    }
    // Ctrl-вниз
    if (e.keyCode === 17) {
      player1.speed = 10;
    }
    // Up-вверх
    if (e.keyCode === 38) {
      player2.speed = -10;
    }
    // Down-вниз
    if (e.keyCode === 40) {
      player2.speed = 10;
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

  // вылетел ли мяч правее стены?
  if (ball.posX + ball.width > field.width) {
    ball.speedX = 0;
    ball.speedY = 0;
    ball.posX = field.width - ball.width;
    player1.score++;
    player1.updateScore();
  }

  // ударился ли мяч о правую ракетку?
  if (ball.posX + ball.width >= player2.posX && ball.posX <= player2.posX + player2.width) {
    if (ball.posY >= player2.posY && ball.posY <= player2.posY + player2.height) {
      ball.speedX = -ball.speedX;
    }
  }

  // вылетел ли мяч левее стены?
  if (ball.posX < 0) {
    ball.speedX = 0;
    ball.speedY = 0;
    ball.posX = 0;
    player2.score++;
    player2.updateScore();
  }

  // ударился ли мяч о левую ракетку?
  if (ball.posX <= player1.posX + player1.width) {
    if (ball.posY + ball.height >= player1.posY && ball.posY <= player1.posY + player1.height) {
      ball.speedX = -ball.speedX;
    }
  }

  // вылетел ли мяч ниже пола?
  if (ball.posY + ball.height > field.height) {
    ball.speedY = -ball.speedY;
    ball.posY = field.height - ball.height;
  }

  // вылетел ли мяч выше пола?
  if (ball.posY < 0) {
    ball.speedY = -ball.speedY;
    ball.posY = 0;
  }

  ball.update();
  player1.update();
  player2.update();
}

// Расставляем все при загрузке страницы
var game = setInterval(tick, 40);

field.update();
ball.update();
player1.update();
player2.update();
'use strict';

function fib(n) {

  if (n >= 2) {
    userNum = fib(n - 1) + fib(n - 2);
  } else {
    userNum = n
  }

  return userNum;
}
var userNum = +prompt('Введите порядковый номер числа Фибоначчи');
alert(fib(userNum));
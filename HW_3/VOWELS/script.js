'use strict'
Func(prompt("Введите строку:"));

function Func(str) {
  var count = 0;
  var stroka = str.toLowerCase().split('');

  function F(Vowels) {
    var mass = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
    if (mass.indexOf(Vowels) != -1) {
      count++;
    }
  }
  stroka.forEach(F);
  return alert('You have: ' + count + ' ' + "vowel('s)");
}
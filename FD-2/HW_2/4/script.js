'use strict'
var number = prompt('Enter the number: ', 100);
var number = parseInt(number);
do {
  var number = prompt('Enter the number: ', 100);
} while (number == '' || number == null);

function getNumWord(num, word1, word2, word5) {
  var dd = num % 100;
  if ((dd >= 11) && (dd <= 19))
    return word5;
  var d = num % 10;
  if (d == 1)
    return word1;
  if ((d >= 2) && (d <= 4))
    return word2;
  return word5;

}

alert('You have a ' + number + ' ' + getNumWord(number, 'dollar', 'dollara', 'dollarov') + '!'); // чтобы заметить разницу напишу в транслите, а не на английском
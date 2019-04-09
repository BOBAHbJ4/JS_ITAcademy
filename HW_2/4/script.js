'use strict'
var x = Number(prompt('Enter the number: ', 100));

function wordend(num, words) {
  return words[((num % 100 > 10 && num % 100 < 15) || num % 10 > 4 || num % 10 == 0) ? 2 : (num % 10 == 1) ? 0 : 1];

}
alert(x + ' ' + wordend(x, ['dollar', 'dollara', 'dollarov'])); // чтобы заметить разницу напишу в транслите, а не на английском
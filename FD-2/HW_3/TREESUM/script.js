'use strict'

var arr = [ 5, 7, 
  [ 4, [2], 8, [1,3], 2 ], 
  [ 9, [] ], 
  1, 8
];
var sum = 0;

function arrMas(array) {

  array.forEach(function(value, index) {
    Array.isArray(value) ? arrMas(value) : sum += value; 
  });

  return sum;
}

alert(arrMas(arr));
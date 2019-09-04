'use strict'
var a = Number(prompt('Enter the first number: ', 1));
var b = Number(prompt('Enter the second number: ', 1));
var sum = 0;
if (a <= b) {
  for (var i = a; i <= b; i++) {
    sum += i;
  }
  alert(sum);
}
/*else if (a == b) {
  sum = Number(a) + Number(b);
  alert(sum);
} */
else {
  alert('First number cannot be greater than the second');
}
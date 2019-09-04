'use strict'
for (var x = 1; x <= 100; x++) {
  if (x % 3 == 0 && x % 5 == 0) {
    console.log('ThreeFive');
  } else if (x % 3 == 0) {
    console.log('Three');
  } else if (x % 5 == 0) {
    console.log('five');
  } else {
    console.log(x);
  }
}
'use strict'
var season = prompt('Write month');

switch (season) {
  case 'Decamber':
  case 'January':
  case 'February':
    alert('The season of year is Winter')
    break;
  case 'March':
  case 'April':
  case 'May':
    alert('The season of year is Spring')
    break;
  case 'June':
  case 'July':
  case 'August':
    alert('The season of year is Summer')
    break;
  case 'September':
  case 'October':
  case 'November':
    alert('The season of year is Autumn')
    break;
  default:
    alert('unknown month')
    break;
}
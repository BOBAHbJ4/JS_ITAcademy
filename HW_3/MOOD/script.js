"use strict";

function randomDiap(n, m) {
  return Math.floor(Math.random() * (m - n + 1)) + n;
}

function mood(colorsCount) {
  var colors = {
    red: 'красный',
    orange: 'оранжевый',
    yellow: 'жёлтый',
    green: 'зелёный',
    cyan: 'голубой',
    blue: 'синий',
    purple: 'фиолетовый'
  };
  console.log('цветов: ' + colorsCount);

  for (var choose in colors) {
      choose = randomDiap(1, 7);
      //colorName = colors[n];
      /*if (count[colors] > 1){

      }*/
      console.log(choose);
    }
  }

mood(5);
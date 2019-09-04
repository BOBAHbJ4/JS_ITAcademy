'use strict';

function randomDiap(n, m) {
  return Math.floor(Math.random() * (m - n + 1)) + n;
}

function mood(colorsCount) {
  var colors = ['', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];

  console.log( 'цветов: ' + colorsCount );
  for ( var i=1; i<=colorsCount;) {
    var n=randomDiap(1,7);                             ////random select
    var colorName=colors[n];
    if (colorName in colors) {
      continue;
    } else {
      colors[colorName]=colorName;
    }
    console.log(colors[colorName]);
    i++;
  }
}
mood(3);
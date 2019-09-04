'use strict'

var pics = document.getElementsByTagName('img');

for (var i = pics.length - 1; i >= 0; i--) {
  var pic = pics[i];
  pic.style.position = 'absolute'
  pic.style.left = pics.offsetLeft + 'px';
  pic.style.top = pics.offsetTop + 'px';
  pic.style.cursor = 'pointer';
  pic.style.margin = '0px';

  pic.addEventListener('mousedown', mouseDown, false)

  pic.ondragstart = function () {
    return false;
  };
}

function mouseDown(EO) {
  EO = EO || window.event;
  var elem = EO.target;
  var posElem = getElementPos(elem);
  var offsetX = EO.pageX - posElem.left;
  var offsetY = EO.pageY - posElem.top;

  document.body.appendChild(elem);

  function moveElem(EO) {
    elem.style.left = EO.pageX - offsetX + 'px';
    elem.style.top = EO.pageY - offsetY + 'px';
  }

  document.onmousemove = function (EO) {
    EO = EO || window.event;
    moveElem(EO);
  };

  elem.onmouseup = function () {
    document.onmousemove = null;
    elem.onmouseup = null;
  };

}

function getElementPos(elem) {
  var bbox = elem.getBoundingClientRect();
  return {
    left: bbox.left + window.pageXOffset,
    top: bbox.top + window.pageYOffset
  };
}
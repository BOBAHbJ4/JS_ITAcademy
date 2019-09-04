"use strict";
/*Разработать класс HashStorage (в файле HashStorage.js) для хранения в хэше произвольных пар ключ-значение.
Ключ может быть любой строкой; значение может иметь любой тип, в том числе векторный (хэш, массив и т.д.)
Класс должен иметь следующий интерфейс (т.е. иметь следующие публичные методы):
addValue(key,value) — сохраняет указанное значение под указанным ключом;
getValue(key) — возвращает значение по указанному ключу либо undefined;
deleteValue(key) — удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище;
/getKeys() — возвращает массив, состоящий из одних ключей.
/Класс должен быть чистым (не должен использовать никаких глобальных переменных, не, должен «пачкать экран»).
 Класс должен быть универсальным, т.е. не зависеть ни от структуры хранимых данных, ни от способа их последующего использования (в т.ч. не должен содержать никаких ссылок на DOM, т.к. может использоваться и вообще без веб-страницы).
*/
function HashStorage() {
  this.storage = {};
}

HashStorage.prototype.addValue = function (key,value) {
  // сохраняет указанное значение под указанным ключом;
  this.storage[key]=value;
}

HashStorage.prototype.getValue = function (key) {
  // возвращает значение по указанному ключу либо undefined;
  if (key in this.storage) {
    return this.storage[key];
  }
  return undefined
}
HashStorage.prototype.deleteValue = function (key) {
  // удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище;
  if (key in this.storage) {
    delete this.storage[key];
    return true
  } 
  return false
}
HashStorage.prototype.getKeys = function () {
  // возвращает массив, состоящий из одних ключей.
  return Object.keys(this.storage);
}
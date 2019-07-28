var gender = 'Male';
var object = {};
object.gender = 'Male';
object['gender'] = 'Male';
for (var key in object) {
	console.log(object[key]);
}

/*----*/
"use strict";

function randomDiap(n,m) {
		return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
	var colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
	
	if (colorsCount > 7) {
		alert('Incorrect');
		return false;
	}
	
	console.log( 'цветов: ' + colorsCount );
	/*for ( var i=1; i<=colorsCount; i++ ) {
		var n=randomDiap(1,7);
		var colorName=colors[n];
		if (colorName in used) {
			colorsCount++;
			continue;
		}
		used[colorName] = true;
		console.log( colorName );
	}*/
	var i =0;
	do {
		var n=randomDiap(1,7);
		var colorName=colors[n];
		if (colorName in used) {
			continue;
		}
		used[colorName] = true;
		console.log( colorName );
		i++;
	} while (i<colorsCount)
}
var used={}; 
mood(7);
/*----*/

var volwes = {
	'а': 0,
	'о': 0,
	'у': 0,
	'ы': 0,
	'э': 0
}

for (var i=0; i< str.length; i++) {
	if (str[i] in volwes) {
		volwes[str[i]]++;
	}
}
/*----*/
var s = 'asd';
s[0]
/*---*/
var a = 10;
if (true) {
	let b = 15;
	var c = 10;
}

try {
	console.log(b);
}
catch ( error ) {
	console.log(error);
}
finally {
  console.log('освобождаем ресурсы');
}

throw {id: 'NameError', text: 'не верное имя'}
/*----*/

/**
  * x - string
  * return string
*/
function foo(x) {
	switch(typeOf x) {
		case 'number':
		
			break;
		case 'string':
		
			break;
	}
	return x;
}
/*----*/

var user = {
	name: 'Alex',
	email: 'alex@example.com',
	age: 27
};
var users = [
	{
		name: 'Alex',
		email: 'alex@example.com',
		age: 27
	},
	{
		name: 'Nick',
		email: 'nick@example.com',
		age: 32
	}
];

for(var i=0; i<users.length; i++) {
	console.log(users[i].name);
	console.log(users[i].age);
}

/*---*/
var listItem = {
	text: '',
	date: '',
	priority: 10,
	deadline: ''
}

/*----*/
function Human(name, weight, height, say) {
	this.name = name || 'Noname';
  //Human.name = name || 'Noname';
	this.weigth = weight || 70;
	this.height = height || 175;
	this.asd = this.weight + this.height;
	this.steps = 0;
	this.say = function() {
		console.log(say);
	}
}

var human = new Human('Alex', 70, 175, 'Hi');
var human2 = new Human('Nick', 80, 165, 'Hello');
human2.weight = 90;
human2.age = 30;
human2.walk = function() {
	this.steps++;
}
human2.walk();

/*----*/
var a = 10;
var b = 15;
var c = () => a+b;
c() -> 25
/*----*/
function Human(name) {
	this.name = name;
}

function Car(name) {
	this.name = name;
}
var engeneer = new Human('Alex');
var programmer = new Human('Nick');
var car = new Car('Ford'); 

engeneer.makeDetail = function() {};
programmer.makeProgramm = function() {};

function getName(obj) {
	return obj.name;
}
getName(engeneer); //Alex
getName(programmer); //Nick
getName(car); //Ford

engeneer.name = 'Genry';

/*------*/
var obj = {
	name: 'Alex'
};
var obj2 = obj;
obj2.name = 'Nick';
console.log(obj);//Nick
console.log(obj2);//Nick
/*-----*/
function Human(name, say) {
	var a = 10;
	this.name = name;
	this.say = say;
	function foo() {
		
	}
	this.say = function() {
		console.log(this.say + a);
	}
}

class Human {
	constructor(name, say) {
		var a = 10;
		this.name = name;
		this.say = say;
		this.getA = function() {
			return a;
		}
		
		this.setA = function(newA) {
			a = newA;
		}
		function asd() {}
		
		asd();
	}
	
	say() {
		console.log(this.say + this.getA());
	}
}

var human = new Human('Alex', 'Hi');
human.name = 'Nick';
human.say = 'Hello';
human.say();
human.getA();
human.setA(15);
/*----*/

class Animal {
	constructor(name, legs) {
		this.name = name;
		this.legs = legs;
	}
	
	walk() {
		...
	}
}

class Tiger extends Animal {
	constructor() {
		super();
	}
	
	roar() {
		cosnole.log('ROar');
	}
}

class Butterfly extends Animal {
	constructor() {
		super();
	}
	
	fly() {
		
	}
}

var tiger = new Tiger('tiger', 4);
var butterfly = new Butterfly('butter', 6);

function getLegs(obj) {
	return obj.legs;
}
/*------*/
.call(), .apply(), .bind();

var obj = {
	a: 10,
	b: 15,
	sum: function() {
		return this.a + this.b;
	}
};
console.log(obj.sum);//25

var obj2 = {
	a: 20,
	b: 45
};
console.log(obj.sum.call(obj2));//65
console.log(obj.sum.apply(obj2));//65
/*---*/
var obj = {
	a: 10,
	b: 15,
	sum: function(c, d) {
		return this.a + this.b + c + d;
	}
};
obj.sum(20, 10);//55
var obj2 = {
	a: 20,
	b: 45
};
obj.sum.call(obj2, 20, 10);//95
obj.sum.apply(obj2, [20, 10]);//95

var newFunction = obj.sum.bind(obj2);
newFunction(20, 10);//95
/*----*/
var obj = new Object()
/*----*/
if ( s == s.split('').reverse().join('')) {
console.log('полиндром')
}


var date = new Date();
date.getFullYear();
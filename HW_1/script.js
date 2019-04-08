var a = 10;
var b = 2;
let sum = a + b;
let sub = a - b;
let mult = a * b;                    //the first exercise
let del = a % b;
alert ('a + b = ' + sum + 'a - b = ' + sub + 'a * b = ' + mult + 'a % 2 = ' + del); 
var a2 = 17;
var b2 = 10;
var c = a2 - b2;                      //the second exercise
var d = 7;
res = c + d;
alert ('result is ' + res);
var hour = 60 * 60;         //for better using create variables
var day = hour * 24;                                                               //the first exercise with strings
var month = day * 30;
alert ('sec in hour: '+ hour + ' ' + 'sec in a day: ' + day +' ' + 'sec in month: ' + month);
var hour2 = '22';
var min2 = '21';                         //the second exercise with strings
var sec2 = '42';
alert(hour2 + ':' + min2 + ':' + sec2);
var ver = 15;
alert('res is ' + (ver * ver));          //the third exercise with strings

//the fourth exercise:
var number = 1;
number += 12;  //number = number + 12;
number -= 14; //number = number - 14;                    
number *= 5; //number = number * 5;
number /= 7; //number = number / 7;
number ++;  //number = number + 1;
number --; //number = number - 1;
alert(number);
'use strict'
var name = prompt('Enter your name: ', 'Ivan');
var surname = prompt('Enter your surname: ', 'Ivanov');
var secondName = prompt('Enter your Second Name: ', 'Ivanovich');
var age = Number(prompt('Enter your age: ', 18));
var sex = confirm('Are you male?');
var pensioner = 'No';
var pol;
if (sex == true) {
  pol = 'male';
  if (age >= 60) {
    pensioner = 'YES';
  }
} else {
  pol = 'female';
  if (age >= 55) {
    pensioner = 'YES';
  }
}
alert('Your full name is ' + surname + ' ' + name + ' ' + secondName + '\n' + 'Your age in years: ' + age + '\n' + 'Your age in days: ' + (age * 365) + '\n' + 'You are ' + pol + '\n' + "You're retired: " + pensioner);
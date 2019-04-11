'use strict'
var name = prompt('Enter your name:', 'Ivan');
var surname = prompt('Enter your surname: ', 'Ivanov');
var secondName = prompt('Enter your Second Name: ', 'Ivanovich');
var age = Number(prompt('Enter your age: ', 18));
var sex = confirm('Are you male?');
var pensioner = 'No';
if (surname == '') {
  surname = prompt('field surname must not be empty:', 'Ivan');
}
if (age < 3 || age > 122) {
  age = Number(prompt('you may have entered an incorrect age: ', 18));
}
if (sex == true) {
  sex = 'male';
  if (age >= 60) {
    pensioner = 'YES';
  }
} else {
  sex = 'female';
  if (age >= 55) {
    pensioner = 'YES';
  }
}
alert('Your full name is ' + surname + ' ' + name + ' ' + secondName + '\n' + 'Your age in years: ' + age + '\n' + 'Your age in days: ' + (age * 365) + '\n' + 'You are ' + sex + '\n' + "You're retired: " + pensioner);
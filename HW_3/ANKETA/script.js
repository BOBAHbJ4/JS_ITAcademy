'use strict'

var myData = new Object();
myData.name = prompt('Enter your name:', 'Ivan');
myData.surname = prompt('Enter your surname: ', 'Ivanov');
myData.secondName = prompt('Enter your Second Name: ', 'Ivanovich');
myData.age = Number(prompt('Enter your age: ', 18));
myData.gender = confirm('Are you male?');
myData.pensioner = 'No';
do {
  surname = prompt('Field surname must not be empty:', 'Ivanov');
} while (surname == null || surname == '');
do {
  age = Number(prompt('You maybe entered an incorrect age: ', 18));
} while (age < 3 || age > 122);

if (gender == true) {
  gender = 'male';
  if (age >= 60) {
    pensioner = 'YES';
  }
} else {
  gender = 'female';
  if (age >= 55) {
    pensioner = 'YES';
  }
}
function showProps(obj, objName) {
  var result = "";
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
        result += objName + "." + i + " = " + obj[i] + "\n";
    }
  }
 return result;
} alert(showProps(myData, 'myData'));
//alert('Your full name is ' + surname + ' ' + name + ' ' + secondName + '\n' + 'Your age in years: ' + age + '\n' + 'Your age in days: ' + (age * 365) + '\n' + 'You are ' + gender + '\n' + "You're retired: " + pensioner);
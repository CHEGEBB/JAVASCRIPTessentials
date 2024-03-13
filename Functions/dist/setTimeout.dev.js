"use strict";

//the setTimeout function is used to delay the execution of a function
//the setTimeout function takes two arguments: a function and a time in milliseconds
//example
function sayHi() {
  console.log('Hi');
}

setTimeout(sayHi, 3000); //explanation of the above code
//the sayHi function is passed to the setTimeout function
//the setTimeout function then executes the sayHi function after 3000 milliseconds
//the setTimeout function is used to delay the execution of a function
//example2

function setAlarm() {
  console.log('Wake up!');
}

function snooze() {
  console.log('Snooze');
}

setTimeout(setAlarm, 3000);
setTimeout(snooze, 3000);
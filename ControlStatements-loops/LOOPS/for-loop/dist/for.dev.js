"use strict";

//The  for loop is used to execute a block of code a number of times. The for loop has the following syntax:
// for (initialization; condition; increment/decrement) {
//   // code block to be executed
// }
// The initialization statement is executed before the loop starts. It is only executed once.
// The condition is evaluated at the beginning of every loop iteration and will continue as long as it is true.
//example 1
for (var i = 0; i < 5; i++) {
  console.log(i);
} //output
//0
//example 2 a more complex example


var sum = 0;

for (var _i = 0; _i < 5; _i++) {
  sum += _i;
}

console.log(sum); //output
//10
//example 3

var sum2 = 0;

for (var _i2 = 0; _i2 <= 100; _i2++) {
  if (_i2 % 2 === 0) {
    sum2 += _i2;
  }
}

console.log("The sum of even numbers between 0 and 100 is: " + sum); //output
//The sum of even numbers between 0 and 100 is: 2550
"use strict";

//a function is a block of code that can be called and executed at any time it can perform a task or return a value
//function declaration
//syntax for function declaration
//function name(parameters){//this is callled a function statement
//    code to be executed
//}
//A function statement starts with the function keyword followed by the function name.
// Function names need to follow the same rules as variable names, and should also be meaningful.
// After the function name, there are parentheses that can optionally have function parameters.
// After the parentheses comes the function body, which is made from any number of statements (a code block).
//declaration
var temperatures = [32, 45, 50, 60, 70, 80, 90, 100];
var sum;
var meanTemp;

function sumOfTemps() {
  sum = 0;

  for (var i = 0; i < temperatures.length; i++) {
    sum += temperatures[i];
  }

  meanTemp = sum / temperatures.length;
} //calling the function


sumOfTemps(); //function declaration usually automatically hoisted to the top of the code so no matter what order you call the function it will still work

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var total;
var average;

function sumOfNumbers() {
  total = 0;

  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  average = total / numbers.length;
}

sumOfNumbers(); //will work the same as

sumofNumbers2();
var numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var total2;
var average2;

function sumofNumbers2() {
  total2 = 0;

  for (var i = 0; i < numbers2.length; i++) {
    total2 += numbers2[i];
  }

  average2 = total2 / numbers2.length;
} //this is because function declarations are hoisted to the top of the code no matter what order you call the function it will still work
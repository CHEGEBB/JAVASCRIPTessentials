"use strict";

//javascript jusst like any other language has errors and exceptions
//An error is an object which is thrown when an exception occurs
//the following are the types of errors in javascript
//1. EvalError: An error has occurred in the eval() function
//example
try {
  eval('alert("Hello")');
} catch (e) {
  console.log(e);
} //2. RangeError: An error has occurred when a number is not in the correct range
//example


try {
  var num = 1;
  if (num > 10) throw "Number is too big";
} catch (e) {
  console.log(e);
}

; //Number is too big
//3. ReferenceError: An error has occurred when an invalid reference is used
//example

"let x =10";
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
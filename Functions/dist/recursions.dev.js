"use strict";

//to recur  means to repeat
function factorial(n) {
  var result = 1;

  while (n > 1) {
    result *= n;
  }

  return result;
}

console.log(factorial(6)); //720

console.log(result); //the same using recursion
"use strict";

//The break statement is used to terminate the loop and continue with the next statement outside the loop.
//syntax
//break;
//example
var i = 0;

while (i < 10) {
  if (i === 3) {
    break;
  }

  i++;
}

; //i = 3
//The continue statement is used to skip the current iteration of the loop and continue with the next iteration.
//syntax
//continue;
//example

for (var _i = 0; _i < 10; _i++) {
  if (_i === 3) {
    continue;
  }

  console.log(_i);
}

; //0, 1, 2, 4, 5, 6, 7, 8, 9
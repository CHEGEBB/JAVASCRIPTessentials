"use strict";

for (var i = 100; i >= 0; i -= 10) {
  console.log(i);
}

var first = prompt("What is the first number?");
var last = prompt("What is the last number?");

for (var j = first; j >= last; j -= 10) {
  console.log(j);
}

var x = 100;
if (x < 100) x = 20;
console.log(x);
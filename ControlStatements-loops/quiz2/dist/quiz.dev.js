"use strict";

for (var i = 100; i >= 0; i -= 10) {
  console.log(i);
}

var first = parseFloat(prompt("What is the first number?"));
var last = parseFloat(prompt("What is the last number?"));

for (var j = first; j >= last; j -= 10) {
  console.log(j);
}
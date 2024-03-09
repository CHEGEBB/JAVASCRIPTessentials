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
var a = 5;

while (a > 1) {
  console.log(a--);
}

var car = {
  make: "Citroen",
  model: "DS"
};

for (var f in car) {
  console.log(f);
}

var steps = [3, 2, 1];

for (var _i = 0, _steps = steps; _i < _steps.length; _i++) {
  var n = _steps[_i];
  console.log(n);
}
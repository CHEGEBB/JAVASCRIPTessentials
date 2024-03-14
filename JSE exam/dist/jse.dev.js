"use strict";

var m = 3e-3;
console.log(m); //0.003

var msg1 = 'hello';
var msg2 = msg1.slice(-1);
console.log(msg2 ? msg2 : msg2 + msg1); //o

var test = prompt("Run", "code"); //Run

var x = false || true;
var y = "true" && "false";
var z = false && true;
console.log("".concat(x, " ").concat(y, " ").concat(z));
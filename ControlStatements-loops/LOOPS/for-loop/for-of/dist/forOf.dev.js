"use strict";

//in the for ...of loop we dont specify any conditions or number of iterations
//it is used to iterate over the elements of an array or the properties of an object
//syntax
//for (variable declaration of array or object) { //code block to be executed}
//example
var arr = [1, 2, 3, 4, 5];
var sum = 0;

for (var _i = 0, _arr = arr; _i < _arr.length; _i++) {
  var val = _arr[_i];
  sum += val;
}

; //sum = 15
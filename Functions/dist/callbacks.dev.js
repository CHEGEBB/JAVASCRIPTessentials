"use strict";

//callbacks are functions that are passed as arguments to other functions
//callbacks are not executed immediately
//callbacks are executed at a later time
//there are two types of callbacks: synchronous and asynchronous
//synchronous callbacks are executed immediately
//asynchronous callbacks are executed at a later time
//callbacks are used to make sure that certain code doesn't execute until other code has already finished
//syncronous callback example
function greeting(name) {
  console.log('Hello ' + name);
}

function processUserInput(callback) {
  var name = 'John';
  callback(name);
}

processUserInput(greeting); //Hello John
//explanation of the above code
//the processUserInput function takes a callback function as an argument
//the processUserInput function then calls the callback function and passes a name to it
//the greeting function is the callback function
//the greeting function is passed to the processUserInput function
//example2

var inner = function inner() {
  console.log('inner 1');
};

var outer = function outer(callback) {
  console.log('outer 1');
  callback();
  console.log('outer 2');
};

console.log('test 1');
outer(inner);
console.log('test 2'); //asynchronous callbacks are executed at a later time
//this is to say that the callback function is not executed immediately
//example
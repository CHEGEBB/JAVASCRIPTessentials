//the setInterval function is used to delay the execution of a function at regular intervals or periodically
//the setInterval function takes two arguments: a function and a time in milliseconds
//example 
let inner = function() {
    console.log('inner 1');
    }
    let outer = function(callback) {
    console.log('outer 1');
    let timerId = setInterval(callback, 1000) /*ms*/;
    console.log('outer 2');
    setTimeout(function(){
         clearInterval(timerId);
    }, 5500);
    }
    console.log('test 1');
    outer(inner);
    console.log('test 2');
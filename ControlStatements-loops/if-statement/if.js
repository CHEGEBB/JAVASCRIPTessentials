//The if satement checks  a given satement and executes a block of code depending on the result of the condition.
//The if statement is used to execute a block of code if a condition is true.
//Syntax
// if (condition) {
//   // block of code to be executed if the condition is true
// }
//The condition is a boolean expression that evaluates to either true or false.
let isReady = confirm('Are you ready to learn?');
if (isReady){
    alert('Welcome to the class');
}
let isLearning = confirm('Are you learning?');
if (isLearning){
    alert('Keep up the good work');
}

let unitPrice = 100;
let quantity = prompt('Enter the quantity',0);
if(quantity > 0){
    let total= unitPrice * quantity;
    console.log(total);
}
console.log(total);
//university grading system using if statement
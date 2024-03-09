"use strict";

//The switch case is a conditional statement that executes different blocks of code depending on value of an expression
//simple calculator  using switch case 
var welcome = confirm("Welcome to  the simple calculator press ok to continue");

if (welcome == true) {
  var operator = prompt("Choose the operators to use +,- , * , / , **, %");
  var num1 = parseFloat(prompt("Enter the first number:")); //prompt takes strings so parseFloat converts the string to number for calculations

  var num2 = parseFloat(prompt("Enter the second number:"));

  switch (operator) {
    case '+':
      var sum = num1 + num2;
      alert("The sum of ".concat(num1, " ").concat(operator, " ").concat(num2, " is ").concat(sum));
      break;

    case '-':
      var diff = num1 - num2;
      alert("The difference between ".concat(num1, " ").concat(operator, " ").concat(num2, "is ").concat(diff));
      break;

    case '*':
      var mul = num1 * num2;
      alert("The multiplication of ".concat(num1, " ").concat(operator, " ").concat(num2, " is ").concat(mul));
      break;

    case '/':
      var div = num1 / num2;
      alert("The divison of ".concat(num1).concat(operator).concat(num2, " is ").concat(div));
      break;

    case '**':
      var exp = Math.pow(num1, num2);
      alert("The value of ".concat(num1, " ").concat(operator, " ").concat(num2, " is ").concat(exp));
      break;

    case '%':
      var mod = num1 % num2;
      alert("The remainder after dividing ".concat(num1, " ").concat(operator, " ").concat(num2, " is ").concat(mod));
      break;

    default:
      alert("The operator you selected doesnt exists");
  }
}
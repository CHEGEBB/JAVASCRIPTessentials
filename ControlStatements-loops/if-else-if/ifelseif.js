//The if...else if... statement (also called as if...else ladder)is an advanced form of if…else that allows
// JavaScript to make a correct decision out of several conditions.
//syntax
//if (expression 1) {
//     Statement(s) to be executed if expression 1 is true
// } else if (expression 2) {
//    Statement(s) to be executed if expression 2 is true
// } else if (expression 3) {
//    Statement(s) to be executed if expression 3 is true
// } else {
//    Statement(s) to be executed if no expression is true
// }
//simple calculator using the if---else--if statement
//simple calculator using the if---else--if statement
let calculator = prompt("Welcome to the smart-calculator. What is your name?");
let num1 = parseFloat(prompt("Enter the first number"));
let num2 = parseFloat(prompt("Enter the second number"));
let list = ["Addition", "Subtraction", "Multiplication", "Division", "Exponential", "Modulus"];
let identity = prompt(`Welcome ${calculator}, what arithmetic operation can I help you with?\n${list.map((item, index) => `${index + 1}. ${item}`).join("\n")}`);

if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid input. Please enter valid numbers.");
} else if (identity === list[0]) {
    let sum = num1 + num2;
    alert(`The addition of ${num1} and ${num2} is ${sum}`);
} else if (identity === list[1]) {
    let diff = num1 - num2;
    alert(`The subtraction of ${num2} from ${num1} is ${diff}`);
} else if (identity === list[2]) {
    let mul = num1 * num2;
    alert(`The multiplication of ${num1} and ${num2} is ${mul}`);
} else if (identity === list[3]) {
    if (num2 === 0) {
        alert("Division by zero is not allowed.");
    } else {
        let div = num1 / num2;
        alert(`The division of ${num1} by ${num2} is ${div}`);
    }
} else if (identity === list[4]) {
    let expo = Math.pow(num1, num2);
    alert(`The value of ${num1} raised to ${num2} is ${expo}`);
} else if (identity === list[5]) {
    let mod = num1 % num2;
    alert(`The remainder after dividing ${num1} by ${num2} is ${mod}`);
} else {
    alert("Error!! Unknown arithmetic operation");
}

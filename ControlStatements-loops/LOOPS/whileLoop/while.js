//The while loop is a loop in javascript that repeats execution of a given block of code so long as the condition is true
//example:a program that adds all even numbers between 0 and 100 and gives the result
let sum = 0; // Initialize a variable to hold the sum of even numbers
let number = 1; // Initialize a variable to start from 1

while (number <= 100) {
    if (number % 2 === 0) {

        sum += number;
    }
    number++;
}
console.log("The sum of even numbers between 1 and 100 is: " + sum);

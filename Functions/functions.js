//a function is a block of code that can be called and executed at any time it can perform a task or return a value
//function declaration
//syntax for function declaration
//function name(parameters){//this is callled a function statement
//    code to be executed
//}
//A function statement starts with the function keyword followed by the function name.
// Function names need to follow the same rules as variable names, and should also be meaningful.
// After the function name, there are parentheses that can optionally have function parameters.
// After the parentheses comes the function body, which is made from any number of statements (a code block).
let temperatures = [32, 45, 50, 60, 70, 80, 90, 100];
let sum;
let meanTemp;
function sumOfTemps() {
    sum = 0;
    for (let i = 0; i < tempeatures.length; i++) {
        sum += tempeatures[i];
    }
    meanTemp = sum / tempeatures.length;
}
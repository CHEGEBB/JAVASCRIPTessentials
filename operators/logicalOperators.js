//They work with boolean values and are used to make decisions in JavaScript programs.
//The logical operators are:
// && (logical and)
// || (logical or)
// ! (logical not)
//The logical operators are used to determine the logic between variables or values.
//The && (logical and) operator is used to check if two or more conditions are true.
//The || (logical or) operator is used to check if one or more conditions are true.
//The ! (logical not) operator is used to check if a condition is false.
//example
let x = 5;
let y = 10;
// && (logical and) operator
console.log(x < 10 && y > 5);//true 
console.log(x > 10 && y > 5);//false
// || (logical or) operator
console.log(x < 10 || y > 5);//true
console.log(x > 10 || y > 5);//true
// ! (logical not) operator
console.log(!(x === y));//true
console.log(!(x === x));//false
//The && (logical and) operator returns true if and only if all the expressions are true. Otherwise, it returns false.
//The || (logical or) operator returns true if at least one of the expressions is true. Otherwise, it returns false.
//The ! (logical not) operator returns true if the expression is false. Otherwise, it returns false.
//The logical operators are often used in conditional statements, such as if...else statements and switch statements.
//That's all for the logical operators.
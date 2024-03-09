//The  for loop is used to execute a block of code a number of times. The for loop has the following syntax:
// for (initialization; condition; increment/decrement) {
//   // code block to be executed
// }
// The initialization statement is executed before the loop starts. It is only executed once.
// The condition is evaluated at the beginning of every loop iteration and will continue as long as it is true.
//example 1
for (let i = 0; i < 5; i++) {
  console.log(i);
}
//output
//0
//example 2 a more complex example
let sum = 0;
for (let i = 0; i < 5; i++) {
  sum += i;
}
console.log(sum);
//output
//10
//example 3
let sum2 = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sum2 += i;
    }
}

console.log("The sum of even numbers between 0 and 100 is: " + sum);
//output
//The sum of even numbers between 0 and 100 is: 2550
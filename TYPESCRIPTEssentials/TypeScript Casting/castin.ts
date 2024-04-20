//casting in typescript is the process of converting one data type to another data type.
//we say its the process of overriding the default data type of a variable.
//example
var num = 2;
console.log(num);
//casting
var num1 = num;
console.log(num1);
//casting
var num2 = num1;
console.log(num2);
//casting
//Using <> works the same as casting with as.
let x: unknown = 'hello';
console.log((<string>x).length);
// Force casting
//To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
let y: unknown = 'hello';
console.log((y as string).length);

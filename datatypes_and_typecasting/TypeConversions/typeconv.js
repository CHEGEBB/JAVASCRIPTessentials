//variables in javascript are declared using let,const and var keywords,using literals however
// we can  create variables using constructor functions such as Number(),String(),Boolean() etc
//1.String() function
let str = String();
let str2 = String('Hello World');
console.log(str);//empty string
console.log(str2);//Hello World 
console.log(typeof str);//string
//2.Number() function
let num = Number();//0
let num2 = Number(123);
console.log(num);//0
console.log(num2);//123
console.log(typeof num);//number
//3.Boolean() function
let bool = Boolean();
let bool2 = Boolean(true);
console.log(bool);//false
console.log(bool2);//true

//4.BigInt() function
//for the BigInt()function  we must give it an intial value otherwise this will return an uncaught error
let bigInt= BigInt();
let bigInt2 = BigInt(12);
// console.log(bigInt);//uncaught TypeError
console.log(bigInt2);//12
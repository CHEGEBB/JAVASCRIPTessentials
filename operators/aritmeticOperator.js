//these opeartors are used to perfirm arithmetic operations on numbers
//they include addition, subtraction, multiplication, division, and modulus
//They adhere to the BODMAS rule as in maths
//parentheses forces precedence
//1.Addition operator for  addind two numbers together it converts type to number
let sum = 15 + 25;
console.log(sum);//40
//however the addition operator  when used in strings is just used for concatenation
let greetings = "Hello" + "World";
console.log(`${typeof greetings} : ${greetings}`);//string : HelloWorld
//2.Subtraction operator subtracting two numbers
let diff = 20 - 5;
console.log(diff);
//3.multiplication,,this is used to multiply two numbers
let mul = 2*5*8*10;
console.log(mul);//800
//4.divison
let div = 24/7;//3.4285714285714284
console.log(div);
let div2 = 8/10;//0.8
console.log(div2);
//5.modulus,,,remainder after division
let mod = 30 % 2;
console.log(mod);//0
let mod2 = 35 % 2;
console.log(mod2);//1
//the precedence bodmas
let math = (2*2+3-6);//1
let math2 =(2*2+(3-6));//1
let math3 = ((2*2)+3-6)//1
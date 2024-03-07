//Compound assignment operators are used to show the equality and inequality of two values.
//The compound assignment operators are:
//identity operator (===)
//equality operator (==)
//non-identity operator (!==)
//inequality operator (!=)
//greater than operator (>)
//greater than or equal to operator (>=)
//less than operator (<)
//less than or equal to operator (<=)
//1.returns true if operands are equal and of the same type(identical)this is strict equality
console.log(33 === 33);//true
console.log("33" === 33);//false as these two are of different types hence not identical
console.log("30" === "60");//false as they are not equal
console.log(10 === 10n);//false they are not of same type
//2.returns true if the operands have the same value(equal) even if they have or are of different types 
console.log(10 == 10);//true
console.log(10 == "10");//true
console.log(5 == 25);//false
console.log(10 == 10n);//true
console.log("10" == "10");//true
//3.returns true if the operands are not equal and/or not of the same type
console.log(10 !== 10);//false
console.log(7 !== "10");//true
console.log(10 !== 10n);//true  as they are not of the same type
console.log(100 !== 101);//true not equal
console.log("25" !== 25);//true not of same type
//4.returns true if the operands are not equal and/or not of the same type
console.log(10 != 10);//false
console.log(10 != "10");//false
console.log(10 != 10n);//true as they are not of the same type
console.log("10" != "10");//false
console.log(25 != 25);//false
console.log(25 != "25");//false
//5.returns true if the left operand is greater than the right operand
console.log(10 > 10);//false
console.log(10 > 5);//true
console.log(10 > 20);//false

//6.returns true if the left operand is greater than or equal to the right operand
console.log(10 >= 10);//true
console.log(10 >= 5);//true
console.log(10 >= 20);//false
//7.returns true if the left operand is less than the right operand
console.log(10 < 10);//false
console.log(10 < 5);//false
console.log(10 < 20);//true
//8.returns true if the left operand is less than or equal to the right operand
console.log(10 <= 10);//true
console.log(10 <= 5);//false
console.log(10 <= 20);//true
// Path: String_operators/concatenation.js
// Write a code that will create variables and initialize them with values of Boolean, Number, BigInt, String, and undefined types using (when possible) literals and constructor 
//using constructors
let language =String();
let isTrue = Boolean();
let isFalse = Boolean();
let number = Number();
let bigInt = BigInt(42n);
let nothing = null;
let notDefined = undefined;
let language2 = "python"
let isTrue2 = true;
let isFalse2 = false;
let number2 = 42;
let bigInt2 = 42n;
let nothing2 = null;
let notDefined2 = undefined;
console.log(`${typeof language} : ${language2}`);
console.log(`${typeof isTrue} : ${isTrue2}`);
console.log(`${typeof isFalse} : ${isFalse2}`);
console.log(`${typeof number} : ${number2}`);
console.log(`${typeof bigInt} : ${bigInt2}`);
console.log(`${typeof nothing} : ${nothing2}`);
console.log(`${typeof notDefined} : ${notDefined2}`);
let trial = "1234";
let trialNum = Number(trial);
let trialBigInt = BigInt(trialNum);
let trialBool = Boolean(trialBigInt);


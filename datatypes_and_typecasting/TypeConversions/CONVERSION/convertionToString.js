let one = "One is the loneliest number";
let two = String(one);
//converting a string into a string remains the same
console.log(`${typeof one } : ${one}`); //string : One is the loneliest number 
console.log(`${typeof two} : ${two}`); //string : One is the loneliest number
//converting a number into a string 
let three = 3;
let four = String(three);
console.log(`${typeof three} : ${three}`); //number : 3
console.log(`${typeof four}: ${four}`); //string : 3
//converting a boolean into a string
let five = true;
let six = String(five);
console.log(`${typeof five} : ${five}`); //boolean : true
console.log(`${typeof six} : ${six}`); //string : true
//converting a null into a string
let seven = null;
let eight = String(seven);
console.log(`${typeof seven} : ${seven}`); //object : null
console.log(`${typeof eight} : ${eight}`); //string : null
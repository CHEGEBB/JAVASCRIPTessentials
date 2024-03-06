//operators that operate on a single operand
//the convert to values oroperands to the number type
let x = "123";
let y = +x;
let z = -x;
console.log(`${x} : ${typeof x}`);// 123 : string
console.log(`${y} : ${typeof y}`);// 123 : number
console.log(`${z} : ${typeof z}`);//-123 : number
//unary increment and decrement operators
//increment ++ increases the value of operand by one

let money = 99999;
money++;
console.log(money);//100000

let m = 3e-3;
console.log(m);//0.003
let msg1 = 'hello';
let msg2 = msg1.slice(-1);
console.log(msg2 ? msg2 : msg2 + msg1);//o
let test = prompt("Run", "code");//Run
let x = false || true;
let y = "true" && "false";
let z = false && true;
console.log(`${x} ${y} ${z}`);

let a = 20 + "10";
let b = 20 + +"10";
let c = 20 + -"10" + "10";
let d = "10" - "10" + "100";
let e = "A" - "B" + 0xA;
console.log(`${a}, ${b}, ${c}, ${d}, ${e}`);//2010, 30, 1010, 0100, 5

const y = "hello";
    console.log(a.toUpperCase());
}
} catch (error) {
    console.log(y)
} finally {
    console.log(y);
}
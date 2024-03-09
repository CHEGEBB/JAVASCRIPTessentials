for (let i=100; i>=0; i-=10) {
    console.log(i);
}
let first = prompt("What is the first number?");
let last =  prompt("What is the last number?");
for (let j = first; j>=last;j-=10){
    console.log(j);
}

let x = 100;
if (x < 100)
    x = 20;
console.log(x);

let a = 5; while (a > 1)
     console.log(a--);

let car = {make: "Citroen", model: "DS"};
     for (let f in car)
     console.log(f);
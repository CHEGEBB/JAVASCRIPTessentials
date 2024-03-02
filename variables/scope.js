// Objective: Understanding the scope of variables in JavaScript

// Scope of a variable is the region of the program where the variable is accessible. In JavaScript, there are two types of scope:
// Global scope: Variables declared outside of a function are accessible from anywhere in the program.
// Local scope: Variables declared inside a function are accessible only within that function.
// In JavaScript, variables declared using var are function-scoped, while variables declared using let and const are block-scoped.
let counter;
console.log(counter);// here counter is undefined as it has not been assigned a value
//below is called a program block
{
    counter = 1;// here counter is assigned a value
    console.log(counter);
}
counter = counter + 1;// here counter is assigned a value
console.log(counter);

//nested blocks
let counter1;
console.log(counter1);
{ 
    counter1 = 1;
    console.log(counter1);
    {
        counter1 = counter1 + 1;
        console.log(counter1);
    }
}
counter1 = counter1 + 1;
console.log(counter1);

//demostrating the difference between global and local scope
let age = 21;//global variable
{  
    //local variable accessible only within the block
    let height = 180;
    console.log(age);
    console.log(height);
}
console.log(age);
// console.log(height);//this will throw an error because height is not defined in the global scope

let height2 = 200;
{
    let weight2 = 100;
    {
    let info = "tall";
    console.log(height2); // -> 200
    console.log(weight2); // -> 100
    console.log(info); // -> tall
    }
    console.log(height2); // -> 200
    console.log(weight2); // -> 100
    // console.log(info); // -> Uncaught ReferenceError: info is not defined
   }
//funny thing about var keyword in relation to scope is that it does not respect block scope
//this is what i mean when var is outside a block it is accessible from anywhere in the program and when it is inside a block it is accessible from anywhere in the block (global everywhere)
//funny ,,,right ? :)
   var school= "dekut";
   {
         var course= "computer science";
            console.log(school);
            console.log(course);
   }
    console.log(school);
    console.log(course);
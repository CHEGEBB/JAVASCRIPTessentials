//Typescript has a feature called function overloading. This is a feature that allows us to define multiple function signatures and implementations for a function.
//Function overloading is a way to define multiple function signatures and implementations for a function.

//Function Overloading example in TypeScript

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}
console.log(add(1, 2)); //3
console.log(add('Hello', 'World')); //HelloWorld
// console.log(add(1, 'Hello')); //error
// console.log(add('Hello', 1)); //error
// Return Type
// The return type of a function is the type of the value that the function returns.
// In TypeScript, we can specify the return type of a function using a colon (:) followed by the return type.
// If a function does not return a value, we can specify the return type as void.
//example
function greet(name: string): string {
  return `Hello, ${name}!`;
}
console.log(greet('John')); //Hello, John!

// the `: number` here specifies that this function returns a number
function getTime(): number {
    return new Date().getTime();
  }
  
  console.log(getTime()); // 1632210730000

//   The type void can be used to indicate a function doesn't return any value.
function printHello(): void {
    console.log('Hello!');
  }
  
  printHello();

//   Parameters
// Parameters are the values that are passed to a function when it is called.
// In TypeScript, we can specify the types of the parameters of a function.
//example
function multiply(x: number ,y : number): number {
    return x * y;
  }
  console.log(multiply(2, 3)); // 6
//   If no parameter type is defined, TypeScript will default to using any, unless additional type information is available as shown in the Default Parameters and Type Alias sections below.
//  Optional Parameters
// Optional parameters are parameters that can be omitted when calling a function.
// the `?` operator here marks parameter `c` as optional
function sum(a: number, b: number, c?: number) {
    return a + b + (c || 0);
  }
  
  console.log(sum(2,5))//7console.log(sum(2,5,3))//10
  //void is a type that represents the absence of a value. It is used to indicate that a function does not return a value.
  function printHi(): void {
    console.log('Hello!');
  }
  //optional parameters
  function multiplication (a: number, b: number, c?: number): number {
    return a * b * (c || 1);
  }
  console.log(multiplication(2, 3)); // 6
  console.log(multiplication(2, 3, 4)); // 24
  //Default Parameters
// Default parameters are parameters that have default values.
// If a default value is provided for a parameter, the parameter becomes optional.
//example
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}

    
//parameters are the values that are passed to the function when it is called
//parameters are used in the function definition
//arguments are the values that are passed to the function when it is called
//arguments are used in the function call
function myFunction(x, y) {
    return x * y;
}
myFunction(3, 4);//12

let ages = [32, 33, 16, 40];
let age = getElement(ages, 2);
console.log(age);//16

function getElement(arr, index) {
    return arr[index];
}

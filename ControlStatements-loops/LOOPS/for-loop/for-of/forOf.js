//in the for ...of loop we dont specify any conditions or number of iterations
//it is used to iterate over the elements of an array or the properties of an object
//syntax
//for (variable declaration of array or object) { //code block to be executed}
//example
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let val of arr) {
  sum += val;
};//sum = 15

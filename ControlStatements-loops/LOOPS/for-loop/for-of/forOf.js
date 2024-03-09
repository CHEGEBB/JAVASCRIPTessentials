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

//example2
let cities  =[
    {name : "New York", population :18.65e6},
    {name : "cairo", population :18.82e6},
    {name : "London", population :8.982e6},
    {name : "Paris", population :2.141e6},
    {name : "Tokyo", population :13.51e6},
    {name : "Beijing", population :21.54e6},
    {name : "Mumbai", population :20.7e6},
    {name : "Lagos", population :21e6},
];
for (let city of cities) {
    if (city.population > 10e6)
    console.log(`${city.name} : ${city.population}`);
}
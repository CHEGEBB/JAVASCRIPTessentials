//an array is used in javascript as a collection of data items
//it is a collection of data items
//declaring a simple array
let languages = ["python", "javascript", "c++", "java", "c#"];
console.log(languages[3]);
console.log(languages[0]);
//changing items in an array 
languages [2] = "c";
//adding items in an array
languages [5] = "Ruby";
console.log(languages);
//removing data items from an array
delete languages[5];
console.log(languages);
//to initialize an empty array
let ages= [];
let names =new Array("John","Doe","Jane","Doe");
console.log(names);
console.log(ages);
console.log(typeof names);
console.log(typeof ages);
//an array can acually contain data items of different data types
let arr1 =[1,"Hello world",false, 3.14];
//arrays can also conatin arrays as data items this creates a multi-dimensional array
let people = [[ "joseph","arimthea","judas","kioko"], ["john","peter","james","andrew"]];
//so the first array is actually in index 0 and the second one in index 1
//accessing data items we must give it the index of the array and the index of the data item
console.log(people [0] [1]);//arimthea
console.log(people [1] [2]);//james
console.log(people [0] [3]);//kioko
console.log(people [1] [4]);//andrew
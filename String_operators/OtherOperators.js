//typeof operator
//The typeof operator is used to get the data type of its operand.
//The operand can be either a literal or a data structure such as a variable, a function, or an object.
//example
let course = "Computer Science";
let number = 10;
let boolean = true;
let object = {name: "John", age: 25};
console.log(`${typeof course} : ${course}`);//string : Computer Science
console.log(`${typeof number} : ${number}`);//number : 10
console.log(`${typeof boolean} : ${boolean}`);//boolean : true
console.log(`${typeof object} : ${object}`);//object : [object object]
//index of
//shows the index of the first instance or appearance of a value 
let languages = ["Javascript","Java","Python","C","Java","Typescript"];
console.log(languages.indexOf("Java"));//1
//delete
//used to delete a field in an object
let person = {
    firstName : "John ",
    lastName : "Wanyonyi" ,
    occupation : "webdeveloper",
    nationality : "kenyan",
};
delete person.occupation;//deletes the occupation field
console.log(person);//{firstName: "John ", lastName:
//ternary operator
//used to assign a value to a variable based on a condition
let age = 20;
let status = (age >= 18) ? "adult" : "minor";
console.log(status);//adult
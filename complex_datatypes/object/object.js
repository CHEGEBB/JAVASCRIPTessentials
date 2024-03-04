//Objects,,,:),,
//an object is a collection of key-value pairs. The key is a string and the value can be anything.
//objects are used in creatig records of data items
//a record is a collection of data items
//syntax
// let object_name = {};
//we use dot notation to access the data items in an object
// console.log(object_name.key);
//declaring an object
let student1 ={
    university : "Dkut",
    course: "computer science",
    year : 3,
    name : "John"
} ;
let student2 = {
    university : "Mku",
    course: "computer science",
    year : 3,
    name : "Jane"
}
let student3 = {
    university : "Jkuat",
    course : "Nursing",
    year : 3,
    name : "Judas"
}
console.log("The Student is  " + student1.name + " and the course is " + student1.course + " and the year is " + student1.year + " and the name is " + student1.name);
console.log("The Student is  " + student2.name + " and the course is " + student2.course + " and the year is " + student2.year + " and the name is " + student2.name);
console.log("The Student is  " + student3.name + " and the course is " + student3.course + " and the year is " + student3.year + " and the name is " + student3.name);
//objects can also have their properties be changed that is added or deleted
//adding a property
student1.age = 23;
console.log(student1.age);
student2.interest = "web development";
console.log(student2.interest);
//deleting a property
delete student1.age;
console.log(student1.age);
delete student2.interest;
console.log(student2.interest);

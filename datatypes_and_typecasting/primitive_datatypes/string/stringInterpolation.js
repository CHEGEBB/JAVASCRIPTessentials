let course = "Computer Science";
let unit ="Introduction to Programming";
let schedule = "Monday, Wednesday, Friday";
//below depicts string interpolation which is a way of embedding expressions into string literals
let student= "My name is Brian , a " + `${course}\t` + "student\t" + "taking\t" + `${unit}` + "and my classes are on\t" + `${schedule}`;
console.log(student);
console.time();
console.log("test console"); // -> test console
console.timeEnd(); // -> default: 0.108154296875 ms
//outboxing
let river = "Nile";
let character = river.charAt(0);
console.log(character);
//the for ... in loop is used to loop through an object's properties.
//syntax
//for (variable declaration in object) { //code block to be executed}
//example
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
for (let key in person) {
    console.log(key, person[key]);
};//name John, age 30, city New York
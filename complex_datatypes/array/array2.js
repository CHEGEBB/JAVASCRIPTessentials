//how arays can be used 
//an array is used in javascript as a collection of data items in collection with objects
let users = [
    {
        firstname : "Kelvin",
        lastname : "Hart",
        age : 39,
        occupation : "developer"
    },
    {
        firstname :"Dwayne ",
        lastname : "The Rock Johnson",
        age : 43,
        occupation : "programmer"
    }
];

console.log(users[1].firstname);//Dwayne
console.log(users[0].occupation);//developer
//operators methods and other functions can be used in arrays
//1.instanceof operator
//the instanceof operator returns true if an object is an instance of an array
let fruits = ["apple","banana","orange","mango"];
console.log(fruits instanceof Array);//true
//2.length
//this returns the length of an array
let cars = ["toyota","nissan","subaru","honda"];
console.log(cars.length);//4
//3.index of()
//this returns the index of a specified value in an array if it does not exist it returns -1
let languages = ["python","javascript","c++","java","c#"];
console.log(languages.indexOf("ruby"));//-1
console.log(languages.indexOf("javascript"));//1
//4.push
//this adds an item to the end of an array
let jsFrameworks = ["react","angular","vue","ember"];
jsFrameworks.push("backbone");
console.log(jsFrameworks);//["react","angular","vue","ember","backbone"]
//5.pop
//this removes the last item from an array
jsFrameworks.pop();
console.log(jsFrameworks);//["react","angular","vue","ember"]
//6.shift
//this removes the first item from an array
jsFrameworks.shift();
console.log(jsFrameworks);//["angular","vue","ember"]
//7.unshift
//this adds an item to the beginning of an array
jsFrameworks.unshift("react");
console.log(jsFrameworks);//["react","angular","vue","ember"]
//8.splice
//this adds or removes items from an array
jsFrameworks.splice(1,1);
console.log(jsFrameworks);//["angular","vue","ember"]
//9.reverse
//this reverses the order of the items in an array
jsFrameworks.reverse();
console.log(jsFrameworks);//["ember","vue","angular"]
//10.sort
//this sorts the items in an array
jsFrameworks.sort();
console.log(jsFrameworks);//["angular","ember","vue"]
//11.slice
//this returns a copy of a part of an array
jsFrameworks.slice(0,2);
console.log(jsFrameworks);//["angular","ember"]
//12.concat
//this joins two or more arrays
jsFrameworks.concat(["react","angular","vue"]);
console.log(jsFrameworks);//["angular","ember","vue","react","angular","vue"]
//13.join
//this joins all the items in an array into a string
console.log(jsFrameworks.join("-"));//angular-ember-vue-react-angular-vue
//and many more :),,,:)

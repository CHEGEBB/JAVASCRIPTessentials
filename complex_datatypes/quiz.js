//Create an object that describes a train ticket and store it in the ticket variable. The object must have three fields:
 let trainTicket = {
    from :"nairobi",
    to :"Mombasa",
    price :600,
 };
console.log(`Ticket from : ${trainTicket.from}`);
console.log(`Ticket to : ${trainTicket.to}`);
console.log(`Ticket price : ${trainTicket.price}`);

//Declare an empty object and save it to a person variable.
// Using dot notation, add the name and surname fields to the object by entering your data as values.
// Try to display the individual fields on the console.
let person = {};
person.name = "Kelvin";
person.surname = "Hart";
console.log(person.name);
console.log(person.surname);
console.log(`name:  ${person.name}  surname:  ${person.surname} `);

//library of books about JavaScript programming. 
let library = [
    {
        title : "Speaking JavaScript",
        author : "Axel Rauschmayer,",
        pages : 460,
    },
    {
        title : "Programming JavaScript Applications",
        author : "Eric Elliott",
        pages : 254,
    },
    {
        title : "Understanding ECMAScript 6",
        author : "Nicholas C. Zakas",
        pages :352,
    }
];
library.push({title : "Learning JavaScript Design Patterns", author : "Addy Osmani", pages : 254});
console.log(library[0].title);
console.log(library[1].title);
console.log(library[2].title);
console.log(library[3].title);
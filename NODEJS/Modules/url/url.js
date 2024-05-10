// The URL module splits up a web address into readable parts.

// To include the URL module, use the require() method:

const url = require('url');

const adr = 'http://localhost:8080/default.htm?year=2021&month=february';
// Parse the address:

const q =url.parse(adr , true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2021&month=february'

const qdata = q.query; //returns an object: { year: 2021, month: 'february' }
console.log(qdata.month); 
console.log(qdata);
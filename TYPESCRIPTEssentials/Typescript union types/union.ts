//Union types are used when a value can be more than a single type.
//Union types are defined by using a pipe (|) between the types.
//Union types are used to define a variable with multiple types.
//Using the | we are saying our parameter is a string or number
//example 
function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`)
}

printStatusCode(404);
printStatusCode('404');
//Union Type Errors
//If we try to pass a boolean value to the function, we will get an error.
//example
// printStatusCode(true);
//another example
function printStatusMessage(status: string | number) {
  console.log(`My status is ${status}.`)
}
console.log(typeof status); //string
printStatusMessage('404');
printStatusMessage(404);
//javascript jusst like any other language has errors and exceptions
//An error is an object which is thrown when an exception occurs
//the following are the types of errors in javascript
//1. EvalError: An error has occurred in the eval() function
//example
try {
    eval('alert("Hello")')
}
catch (e) {
    console.log(e)
}
//2. RangeError: An error has occurred when a number is not in the correct range
//example
try {
    var num = 1
    if (num > 10) throw "Number is too big"
}
catch (e) {
    console.log(e)
};//Number is too big
//3. ReferenceError: An error has occurred when an invalid reference is used
//example
"let x =10";
try {
    console.log(x)
};
catch (e) {
    console.log(e)
};//ReferenceError: x is not defined
//4. SyntaxError: An error has occurred when a syntax error occurs while parsing code
//example
try {
    eval("alert('Hello)")
}
catch (e) {
    console.log(e)
};//SyntaxError: Unexpected token )
//5. TypeError: An error has occurred when a value is not of the expected type
//example
try {
    var num = 10
    num.toUpperCase()
}
catch (e) {
    console.log(e)
}
//6. URIError: An error has occurred when encodeURI() or decodeURI() are passed invalid parameters
//example
try {
    decodeURI("%%%")
}
catch (e) {
    console.log(e)
}
//7. InternalError: An error has occurred which is caused by an internal error in the JavaScript engine
//example
try {
    throw new InternalError('An internal error occurred')
}
catch (e) {
    console.log(e)
}
//8. Error: An error has occurred which is the generic error type and the base type for all other error types
//example
try {
    throw new Error('An error occurred')
}
catch (e) {
    console.log(e)
}
//9. AggregateError: An error that is the base type for all errors that occur for multiple asynchronous operations
//example
try {
    throw new AggregateError('An error occurred')
}
catch (e) {
    console.log(e)
}
//and many more
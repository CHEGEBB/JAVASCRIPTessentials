var globalGreeting = "Good";

function testFunction () {
    var localGreeting = "Morning";
    console.log(globalGreeting);
    console.log(localGreeting);
    
}
testFunction();
console.log(globalGreeting);
console.log(localGreeting);//generates an error because localGreeting is not defined in the global scope
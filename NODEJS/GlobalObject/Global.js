// In node js we have a global object which is called as global
// In browser we have window object
// In node js we have global object

// console.log(global);
setTimeout(() => {
    console.log('In the timeout');
},3000);

const int = setInterval(() =>{
    console.log('In the interval');
},1000);
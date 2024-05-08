// In node js we have a global object which is called as global
// In browser we have window object
// In node js we have global object

// console.log(global);
setTimeout(() => {
    console.log('In the timeout');
    clearInterval(int);
},3000);

const int = setInterval(() =>{
    console.log('In the interval');
},1000);

//we also have the __dirname and __filename
console.log(__dirname);
console.log(__filename);
// These are not global objects but they are available in every file they serve this purposes to get the directory name and file name

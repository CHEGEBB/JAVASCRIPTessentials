//to recur  means to repeat
function factorial (n){
    let result = 1;
    while(n>1){
        result*= n;
    }
    return result;
}
console.log(factorial(6));//720
console.log(result);
//the same using recursion
function factorial (n){
    if(n===1){
        return 1;
    }
    return n * factorial(n-1);
}
console.log(factorial(6));//720
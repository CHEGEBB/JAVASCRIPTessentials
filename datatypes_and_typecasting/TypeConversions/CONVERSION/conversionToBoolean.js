console.log(Boolean(true));  //  ->  true
   
console.log(Boolean(42));  //  ->  true
console.log(Boolean(0));  //  ->  false
console.log(Boolean(NaN));  //  ->  false
   
console.log(Boolean("text"));  //  ->  true
console.log(Boolean(""));  //  ->  false
   
console.log(Boolean(undefined));  //  ->  false
   
console.log(Boolean(null));  //  ->  false
console.log(Boolean(1n));
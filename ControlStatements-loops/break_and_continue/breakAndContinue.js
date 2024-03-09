//The break statement is used to terminate the loop and continue with the next statement outside the loop.
//syntax
//break;
//example
let i = 0;
while (i < 10) {
  if (i === 3) {
    break;
  }
  i++;
};//i = 3
//The continue statement is used to skip the current iteration of the loop and continue with the next iteration.
//syntax
//continue;
//example
for(let i=0; i<10; i++){
    if(i===3){
        continue;
    }
    console.log(i);
};//0, 1, 2, 4, 5, 6, 7, 8, 9
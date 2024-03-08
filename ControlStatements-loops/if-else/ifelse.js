//the if ...else statement is or works very like the if statement but the if checks if a given condition is met
//if the condition is met,,the code block after if executes and if it is not met the code block after else is executed
//syntax
//if(condition){
    //statements to execute if a condition evaluates to true
//}
//else{
//stements to execute if condition eveluates to false
//}
//university garding using if ---else
let unit = prompt("Enter the unit to calculate the grade:");
let grade = prompt(`Enter the marks you got in ${unit}` );
if(grade >=0 && grade < 40){
    alert(`You scored a D in ${unit}`);

}
if(grade >=40 && grade < 60){
    alert(`You scored a C in ${unit}`);
}
if(grade >=60 && grade < 70){
    alert(`You scored a B in ${unit}`);
}
if(grade >=70 && grade < 100){
    alert(`You scored an A in ${unit}`)
}
else{
    alert(`The marks for ${unit} you input are out of range`);
}
//The switch case is a conditional statement that executes different blocks of code depending on value of an expression
//simple calculator  using switch case 
let welcome = confirm("Welcome to  the simple calculator press ok to continue")
if(welcome == true){
let operator = prompt("Choose the operators to use +,- , * , / , **, %");
let num1 = parseFloat(prompt("Enter the first number:"));//prompt takes strings so parseFloat converts the string to number for calculations
let num2 = parseFloat(prompt("Enter the second number:"));
switch(operator){
    case '+' :
    let  sum = num1 + num2;
    alert(`The sum of ${num1} ${operator} ${num2} is ${sum}`);
    break;

    case '-' :
    let diff = num1 - num2 ;
    alert(`The difference between ${num1} ${operator} ${num2}is ${diff}`);
    break;

    case '*' :
    let mul = num1*num2;
    alert(`The multiplication of ${num1} ${operator} ${num2} is ${mul}`);
    break;

    case '/' :
    let div = num1/num2;
    alert(`The divison of ${num1}${operator}${num2} is ${div}`);
    break;

    case '**' :
    let exp = num1**num2;
    alert(`The value of ${num1} ${operator} ${num2} is ${exp}`);
    break;


    case '%' :
    let mod = num1%num2;
    alert(`The remainder after dividing ${num1} ${operator} ${num2} is ${mod}`);
    break;

    default :
    alert("The operator you selected doesnt exists");

    
}
}
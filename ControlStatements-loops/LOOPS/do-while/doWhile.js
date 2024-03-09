//The do ... while statement is a loop in javascript and most programming languages in which a given piece of code is executed atleast onec before the
//condition is checked
//syntax
//do{
    //statements to execute
//}while(Condition/expression)
//example:rolling a die
let rollCount = 0;
let isSixRolled = false;

do {
    // Simulate rolling the die (generate a random number between 1 and 6)
    let dieResult = Math.floor(Math.random() * 6) + 1;

    // Increment the roll count
    rollCount++;

    // Check if the rolled number is 6
    if (dieResult === 6) {
        // If a six is rolled, set isSixRolled to true
        isSixRolled = true;
    }
} while (!isSixRolled);

alert("It took " + rollCount + " rolls to roll a six.");

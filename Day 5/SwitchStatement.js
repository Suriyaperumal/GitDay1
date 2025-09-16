//Switch Statement

// Based on a condition, switch selects one or more code blocks to be executed.

// switch executes the code blocks that matches an expression.

// switch is often used as a more readable alternative to many if...else if...else statements, especially when dealing with multiple possible values.


let day ="Sunday";

switch(day){
    case "Monday" :
        console.log("Monday");
        break;

    case "Tuesday" :
        console.log("Tuesday");
        break;

    case "Sunday" :
        console.log("Sunday");
        break;
    default :
    console.log("Print other days");

}
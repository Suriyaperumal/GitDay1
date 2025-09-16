//Function Expression or Anonymous Function

// An anonymous function does not have a name.
// It is often used as a assigned to a variable.

//  let exp=function(parlour,movie,loans){
//  console.log("Total expense",(parlour,movie,loans))
//  }
// exp(23,34,56);

let Expense=function(ticket,snack,petrol){
    console.log("Total expense",(ticket+snack+petrol))
}
Expense(45,90,50);
Expense(45,380,50);
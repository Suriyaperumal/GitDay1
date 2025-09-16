// String 

// Template Literals

// let a ='Hi' ==> single quotes (' ');
// let b ="Hello" ==>double quotes(" ");
// let c =`bye` ==>Backticks(` `);

// Features of Template Literals:

// String Interpolation : using ${} to insert variables or expressions.
// multi-line Strings : Strings can span multiple lines without special characters.

let details = {item:"pen",price:25}
console.log("The cost of "+ details.item + " is Rs "+details.price);

let output=`The cost of ${details.item} is Rs ${details.price}`
console.log(output);

let poem=`johnny johnny,
yes yes,
no no,
okay okay
`
console.log(poem);
//Equality Operator

// ==(equal to) : checks if two values are equal (ignores data type)
// ===(Strict equal to) : Checks if two values and their data types are equal.

function equality(){
    let a=10;
    let b =20;
    let c="10";

    console.log(a==c) // check only two values are equal
    console.log(a===c) // check both values and datatypes are equal
}
equality()
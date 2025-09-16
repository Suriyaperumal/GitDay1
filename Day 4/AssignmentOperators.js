//Assignment Operators

// += (Add and assign) : Adds the right value to the left variable and assign the result to the left variable.
// -=(Subtract and assign) : Subtracts the right value from the left variable and assign the result to the left variable.

function assignment(){
    let a =10;
    let b=15;

    a+=b // Another way a=a+b;
    console.log(a);

    b-=a // Another way b=b-a;
    console.log(b);
}
assignment()
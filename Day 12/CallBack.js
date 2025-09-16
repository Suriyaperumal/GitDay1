// Call Back

// A callBack function is simply a function that you pass as an argument to another function.
// The function you pass the callback to will call it back after it has finished its task.

function name1(dummy){
    setTimeout(()=>{
        dummy() // creating dummy parameter to call one by one
 console.log("First name")
    },3000)
   
}

function name2(){
    setTimeout(()=>{
 console.log("Second name")
    },2000)
   
}
name1(name2);
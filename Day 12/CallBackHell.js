//CallBack Hell

// CallBack Hell in JavaScript occurs when multiple callbacks are nested inside each other,

// leads to create a complex and hard to manage code.

function name(a){
    setTimeout(()=>{
 a()
    console.log("Name")
    },3000)
   
}
function name1(b){
    setTimeout(()=>{
 b()
    console.log("Name1")
    },2000)
}
function name2(c){
    setTimeout(()=>{
 c()
    console.log("Name2")
    },1000)
}
function name3(d){
    setTimeout(()=>{
 d()
    console.log("Name3")
    },3000)
}
function name4(){
   setTimeout(()=>{
    console.log("Name4")
    },900)
}
name(()=>{
    name1(()=>{
        name2(()=>{
            name3(name4)
        })
    })
})

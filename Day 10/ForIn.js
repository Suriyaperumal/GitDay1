//For In 

let obj={
    name:"Trendnologies",
    domain:"IT Supporting Institute",
    course:"Testing"
}

for(let key in obj){
   console.log(key) // prints only the key 
    console.log(obj[key]) // print only the value
   console.log(key,":",obj[key]) // prints both 

}
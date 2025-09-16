let StudentDetails=(Name,Age,Tamil,English,Maths,Science,SS)=>{
    console.log("Name : "+Name);
    console.log("Age : "+Age);
    console.log("Total Mark : ",Tamil+English+Maths+Science+SS);
    console.log("Percentage :",(450)/500*100+" %");
    

}
StudentDetails("Perumal",27,90,90,90,90,90);

let Percentage = 90;

if(Percentage>=91 && Percentage<=100){
    console.log("Excellent");
}
else if(Percentage>=71 && Percentage<=90){
    console.log("very Good");
}
else if(Percentage>=51 && Percentage<=70){
    console.log("Good");
}
else if(Percentage>=35 && Percentage<=50){
    console.log("Average");
}
else if(Percentage<=34){
    console.log("Fail");
}
else{
 console.log("Check given number");
}



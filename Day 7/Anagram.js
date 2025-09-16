// Anagram

let A = "listen";
let B = "silent";

let sortA=A.split("").sort().join("").toUpperCase();
let sortB=B.split("").sort().join("").toUpperCase();

console.log(sortA);
console.log(sortB);

if(sortA===sortB){
    console.log("It is Anagram")
}
else{
    console.log("It is not a Anagram")
}

let fruits =["Apple","Orange","Kiwi","Plum"]
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}

let Name ="Perumal"
let rev= ""

for(let i=Name.length-1;i>=0;i--){
    rev=rev+Name[i];
}
console.log(rev);
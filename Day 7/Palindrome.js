// Palindrome

let Name ="MADAM";
let reverseName=Name.split("").reverse().join("");
console.log(reverseName);
if(Name==reverseName){
    console.log("It is Palindrome");
}
else{
    console.log("It is not a palindrome");
}
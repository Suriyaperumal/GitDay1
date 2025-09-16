//Class 

//A class in JavaScript can be defined using the class keyword.
//  The class body is enclosed in curly braces {} and contains methods and a special method called constructor. 
// The constructor method is used to initialize the object's properties.

class Car {
constructor(name, year) {
this.name = name;
this.year = year;
}

age() {
console.log("My car name",this.name)
console.log("and the manufacture year",this.year)
}
}

let myCar = new Car("Ford", 2014);
myCar.age()




































class Students{
    constructor(name,section,Tamil,English,Maths,Science,SS){
        this.name=name;
        this.section=section;
        this.Tamil=Tamil;
        this.English=English;
        this.Maths=Maths;
        this.Science=Science;
        this.SS=SS;
    }
    studentDetails(){
        console.log("Name : ",this.name)
        console.log("Section : ",this.section)
        console.log("Percentage : ",(this.Tamil+this.English+this.Maths+this.Science+this.SS)/500*100,"%")
    }
}

let students1 = new Students("Siva","A",90,78,94,84,88)
students1.studentDetails()


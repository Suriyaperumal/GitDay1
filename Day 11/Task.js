//Class Task

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

let students2 = new Students("peru","B",80,98,94,96,99)
students2.studentDetails()

let students3 = new Students("Jack","E",90,88,98,87,78)
students3.studentDetails()

let students4 = new Students("Peter","D",90,78,94,84,88)
students4.studentDetails()

let students5 = new Students("Hazel","C",90,98,94,99,88)
students5.studentDetails()
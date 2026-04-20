
// 1. Encapsulation

// Creating dependency between the methods 

// Binding the data between the Methods 

//Setter 
//Getter 


class Student{

    getstudentdetails(name, place, course ){

        this.stuname = name 
        this.stuplace = place
        this.stucourse = course
    }

    printStudetails(){

        console.log(this.stuname, this.stuplace, this.stucourse )

    }

}


const stu1 = new Student()

//stu1.getstudentdetails("Sangeetha", "Blr" , "AI")  // setter - set the data 

stu1.printStudetails() // getter get the data 
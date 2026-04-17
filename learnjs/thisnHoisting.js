

class student{


    x = 45
 
   institute= "DBS QA technologies"

    printstudentname(){

        console.log("Student name : Sainath")
        console.log("Name of the Institure: "+ this.institute)

        this.printstuplace()
    }

    printcoursename(){

        console.log("Course name : Playwright")
    }

    printstuplace(){

        console.log("Student Place : Bangalore")
    }

}

const stu = new student()

stu.printstudentname()


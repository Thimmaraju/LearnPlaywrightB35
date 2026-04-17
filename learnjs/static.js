

class employee {

    x = 45 // non static variable 
   static y = 39  // static variable 

    m1() {

        console.log("this is method 1 - non Static ")
    }

    static m2() {

       this.m4()
        console.log("this is method 2 - static method ")
    }


    m3() {

        console.log("this is method 3 - non static method")
    }


    static m4() {

        console.log("this is method 4 - static method ")
    }
}

//now 

employee.m2()


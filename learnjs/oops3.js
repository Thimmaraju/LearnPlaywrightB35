class A {

    printMessage() {

        console.log("This is simple Method from Parent")
    }

    add(n1, n2) {


        console.log(n1 + n2)

    }

}



class B extends A {



    printMessage() {

        console.log("This is simple Method from Child")
    }

    add(n1, n2, n3) {


        console.log(n1 + n2 + n3)

    }


}


// const obj = new B()

// obj.printMessage()  // Method Overrding 


// obj.add(3,8)  // Method Overrding 



const obj = new A()

obj.printMessage()  

obj.add(3,8,8)    // Method Overloading 


function createemp(firstname , lastname , empid){
    
    console.log(firstname)

     console.log(lastname)

      console.log(empid)
}

createemp("Raju", "G", "24345", "thimmaraju418")
class A{

    m1(){

        console.log("This is M1 Method ")
    }

     m2(){

        console.log("This is M2 Method ")
    }

     m3(){

        console.log("This is M3 Method ")
    }

}



class B extends A{


     m4(){

        console.log("This is M4 Method ")
    }

     m5(){

        console.log("This is M5 Method ")
    }

     m6(){

        console.log("This is M6 Method ")
    }

}


class C extends B {


     m7(){

        console.log("This is M7 Method ")
    }

     m8(){

        console.log("This is M8 Method ")
    }



}

const obj = new C()

obj.m1()  // from A 

obj.m5() // from B

obj.m8() // From C
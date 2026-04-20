class A{

    x = 5
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


A.prototype.y = 45   // prototyped variable 
A.prototype.m4 = function (){

        console.log("This is M4 Method ")
    }  // Prototyped method 

const obj = new A()

obj.m1()

console.log(obj.y  ) //

obj.m4()


const obj2 = new A()

obj2.m1()

console.log(obj2.y  ) //

obj2.m4()
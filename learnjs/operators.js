

// // Operators :

// // arthemetic Operators
//   // Coersion 

// // comparision operators 

// // Logical 

// // Assignment Operators 

// // conditional Operator  / ternary 

// // + - addition / concatination operator 

// // - - Substraction 

// // *  - Multiplication 

// // /  - devision 
// // %  - remainder 
// // ++ - Increement 
// // -- - decrement 


// x = 5

// y = 25

// z = 10

// console.log(x+y+z)

// console.log(5+"10")  //"510"  // Coersion in JS 
//                               // Type conversion 

// console.log( 2+4+5+"6")  //116

// console.log(2+3+5+"6"+6+4+7+2)  // 10619   //1066472  
// console.log(2+4+5+undefined)  // NaN - Not a number 

// console.log(2+4+5+null)  //11

// // vehiclePrice = 23456
// // deliveryfee = undefined

// // totalprice = vehiclePrice + deliveryfee

// // console.log(totalprice)


// console.log(20-"raju")  //NaN 

// //- , * , /, %  -- string will be converted number 

// console.log(3*7)

// console.log(15/2)

//   console.log( 20%5)  //- Modulus  remainder 


//   x = 5 

// //   x++   //=> x = x+1

// //     x++ 

// x--    //=> x = x-1
//   console.log(x)



// //  ==  and === 

// // == loose equality   compare only values but not data types 

// // === strict equality  - compare values and data types both

//  console.log( 5 === "5" )

//  console.log("Raju" == "RajU")

//  >   3>2  true        3>3 false

//  <   2<10  true 
//  >=     3>= 3 true     4>=2   true
//  <=

//  !=      3 != 5 true    3!=3 false 

// Logical operators 

// AND 
// OR 
// NOT 

// AND 

// x   y    result 

// t   f      f
// f   t      f
// f   f      f
// t   t      t

console.log( false && true)


//const status = await page.locator(xpath).isViSible()  // true 

// OR 

// x    y    result 

// 1    0       1 
// 0     1      1  
// 1     1      1 
// 0     0      0


console.log(true ||  false)

// NOT 

// x   result 

// 1    0

// 0    1


console.log(!false)



//Assignment Operators 

//= assignmnet 

x = 30

// +=
// -+
// *=
// /=

x+=5  // x = x+5   //35

x*=2  // x = x*2

console.log(x)


console.log(2**5)

//conditional operator / ternary Operator 




// x = 3 

// y = 5 

// z = 5

// condition = false 

//condition ? value1 : value2 


student1 = "Sangeetha"

student2 = "Amrutha"

finalstu = 4==="4" ? student1 : student2

console.log(finalstu)

//retries = condition ? 2 : 4

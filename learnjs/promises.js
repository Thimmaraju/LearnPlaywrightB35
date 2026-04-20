


// Primise{ "Raju"}

// function add(n1,n2){

//     return n1+n2

// }

// console.log(add(4,8))


// const p = new Promise((resolve, reject) => {

//     let x = 2
//       if(x==2){

//            resolve("Raju")
//       }
//       else{

//         reject("Sai")
//       }
// })

// //console.log(p)

// //.then()  // resolved 

// //.catch() // rejected 

// p.then( name => console.log(name))  /// to get the resolved 
//  .catch(name => console.log(name))  // to get the value from rejected promise 


//  p1 = Promise.resolve("Sangeetha")

//  p1.then(value => console.log(value))


//  p2 = Promise.reject("Amrutha")

// p2.catch(value => console.log(value))



async function add(n1,n2){

    return n1+n2

}
async function substrct(n1,n2){

    return n1-n2

}

// async function multiply(n1,n2){

//     return n1*n2

// }


// add(4,8).then(num => console.log(num))


// async function raju(){

//     x = await add(6,9)

//     console.log(x)

//     y = await  substrct(38,20)

//      console.log(y)
// }

// raju()
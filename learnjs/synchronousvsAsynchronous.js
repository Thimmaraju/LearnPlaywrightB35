

// JS is synchronous language 

// const { ReadingOrder } = require("exceljs")


// console.log("Raju")

// setTimeout(() => console.log("Saketh"), 4000)

// console.log("Shashi")

// To Make it Asynchronous we use 

// callbacks 


//callback hell 


// function (callback (callback (callback )))


// function step1(value, callback) {
//     callback(value + 10, false);
// }

// function step2(value, callback) {
//     callback(value + 10, false);
// }

// function step3(value, callback) {
//     callback(value + 10, false);  
// }

// step1(10, function (result1, boolvalue) {
//     if (!boolvalue) {
//         step2(result1, function (result2, boolvalue) {
//             if (!boolvalue) {
//                 step3(result2, function (result3, boolvalue) {
//                     if (!boolvalue) {
//                         console.log("Results " + result3);
//                     }
//                 })
//             }
//         })
//     }
// });  // 40


// console.log("Raju")
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data received");
//         }, 2000);
//     });
// }

// fetchData()
//     .then((data) => {
//         console.log(data);
//     });

    
// console.log("Shashi")



// function step1(value, error) {
//     return new Promise((resolve, reject) => {
//         if (error) {
//             reject('Something went wrong');
//         } else {
//             resolve(value + 10);   // promise {20 }
//         }
//     });
// }

// function step2(value, error) {
//     return new Promise((resolve, reject) => {
//         if (error) {
//             reject('Something went wrong');
//         } else {
//             resolve(value + 10);  // Promise {30}
//         }
//     });
// }

// function step3(value, error) {
//     return new Promise((resolve, reject) => {
//         if (error) {
//             reject('Something went wrong');
//         } else {
//             resolve(value + 10);  // Promise {40}
//         }
//     });
// }

// // Usage:
// step1(10, false)
//     .then((result1) => step2(result1, false))
//     .then((result2) => step3(result2, false))
//     .then((result3) => console.log(result3))
//     .catch((error) => console.log(error));



    //4 mthods for Promises 

    // .all()
    // .allsetteled()
    // . race()
    // .any()

   
async function step1(value) {
    return value + 10;
}


async function step2(value) {
    return value + 10;
}


async function step3(value) {
    return value + 10;
}



async function run() {

    let result1 = await step1(10);    //20
    let result2 = await step2(result1);  //30
    let result3 = await step3(result2); //40
    console.log("Results " + result3);

}

 run();


//  MAPs 
//  Set 
//  Regular expression 
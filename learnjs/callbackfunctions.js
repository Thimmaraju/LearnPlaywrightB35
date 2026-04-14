

function greet(name){

    console.log("Good Morning " +name )
}


function indiangreetings(name){

     console.log("Namaste " + name )
}


function Greetwithname(name, callback){

    const x  = name 
    console.log("Hey Hi ")

    callback(x)
}

Greetwithname("Sangeetha", greet)

Greetwithname("Amrutha", indiangreetings)

//when callback back access the data from higher order function then its closure function 

// callback 

// Higer order function 

// closure function 

//why callback used 

//JavaScript is synchronous language 

console.log("Raju")


setTimeout(function (){
    
    console.log("Punith")

}, 5000)



console.log("Shashi")


// Asynchronous language 

// Using callbacks 
// Using promises 
// Using Async and await 

//i click on download button 
//


// arrays 

// strings 

// numbers 

// oops 

// promises 
// async await 
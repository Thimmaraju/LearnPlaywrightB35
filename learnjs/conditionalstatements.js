

console.log("Raju")

if (false) {

    console.log("Sainath")

}
else {

    console.log("Vennela")
}


console.log("Azeem")




// marks >90 <=100   A+
// marks >75 <=90    A
// marks >60  <=75   B
// Marks >35   <=60  C 
// Fail
marks = 55

if (marks > 90 && marks <= 100) {

    console.log("A+")
}
else if (marks > 75 && marks <= 90) {
    console.log("A")

}
else if (marks > 60 && marks <= 75) {
    console.log("B")

}
else if (marks > 35 && marks <= 60) {
    console.log("C")

}
else {

    console.log("FAIL")
}



switch ("chromium") {
    case "chromium": {


        console.log("Browser is Chromium")

    }
        break;

    case "firefox": {


        console.log("Browser is Firefox")

    }
        break;

    case "Edge": {


        console.log("Browser is Edge")

    }
        break;

    default: {

        console.log("Invalid Name")
    }
        break;
}


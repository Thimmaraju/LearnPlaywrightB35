

// objectname = {

//     propertyname : "propertyvalue",

// }

const car = {

    make: "KIA",
    model: "Seltos",
    dealername: "Aravind",
    automatic: true,
    year: 2026
}

console.log(car.make)

console.log(car.year)

console.log(car['make'])

console.log(car['dealername'])

car['place'] = "Bangalore"

console.log(car)

delete car.dealername

car['model'] = 'Carens'

console.log(car)


const jobtitles = {

    title1: "SDET 1",
    title2: "Automation test Engineer",
    title3: "Sr Automation test Engineer",
    title4: "QA Lead Automation"
}

for(let i in jobtitles){

    console.log(i)

    console.log(jobtitles[i])
}


// Data driven testing 

// Excecuting same test with multiple set of data 
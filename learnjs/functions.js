

//function without parameters
function  printnames(){

    console.log("Raju")

    console.log("Shashi")

    console.log("Srinivas")

}





//function with Params 

function add(num1, num2){

    console.log(num1)
    console.log(num2)

    console.log(num1+num2)
}

// add(4,5)

// add(5,9)


// module.exports = {

//     printnames,
//     add
// } 


// function login(username, password){


//     await page.goto(url)
//     await page.locator(xpath).fill(username)
//      await page.locator(xpath).fill(password)
//       await page.locator(xpath).click()
// }


// login("Raju", "Raju@123234")

function multiply(v1=5, v2=4){

    return v1*v2
}

x = multiply(4,9)  // 36

//deafault Parameter 


console.log(x)


function generatePhoneNumber() {
    // Indian mobile numbers start with 6-9 and are followed by 9 more digits
    const firstDigit = Math.floor(Math.random() * 4) + 6; // 6-9
    let phoneNumber = firstDigit.toString();
    
    for (let i = 0; i < 9; i++) {
        phoneNumber += Math.floor(Math.random() * 10).toString();
    }
    
    return `${phoneNumber}`;
}

 generatePhoneNumber()  

//await page.locator(xpath).fill(generatePhoneNumber())

const firstNames = ['John', 'Jane', 'Michael', 'Sarah', 'David', 'Emily', 'Robert', 'Lisa'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis'];
const departments = ['HR', 'IT', 'Sales', 'Marketing', 'Finance', 'Operations'];
const jobTitles = ['Manager', 'Engineer', 'Analyst', 'Specialist', 'Director', 'Coordinator'];

function generateEmployeeData() {
    return {
        firstname: firstNames[Math.floor(Math.random() * firstNames.length)],
        lastname: lastNames[Math.floor(Math.random() * lastNames.length)],
        department: departments[Math.floor(Math.random() * departments.length)],
        jobTitle: jobTitles[Math.floor(Math.random() * jobTitles.length)]
    };
}

console.log(generateEmployeeData())
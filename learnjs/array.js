

arr = []  // empty array  in JS   

arr1 = [1, 2, 3, 4, 5, 6, 7]

arr2 = [1, 34, true, undefined, null, { firstname: "amrutha", lastname: "J" }]  // Mixed datatypes 


//count how manay elements 

console.log(arr1.length)  // 7

//index - always starts from 0 

console.log(arr2[1])  // 1

console.log(typeof (arr2[1]))   // object 

menuitems = [
    'Admin', 'PIM',
    'Leave', 'Time',
    'Recruitment', 'My Info',
    'Performance', 'Directory',
    'Maintenance', 'Claim',
    'Buzz'
]

newsortedmenuitems = menuitems.sort()

console.log(newsortedmenuitems)

arr4 = [9, 3, 1, 7, 2]

arr5 = arr4.sort()

console.log(arr5)

//reversing elements 

//reverse()

arr6 = arr5.reverse() // [ 1, 2, 3, 7, 9 ]

console.log(arr6)

//concat 

arr7 = menuitems.concat(arr4)

console.log(arr7)


// push , unshift 

// pop , shift

arr8 = ["read", "sleep"]

//push will add the elements the end 

// arr8.push("walk", "eat")

// arr8.push("jump")

// console.log(arr8)


// Unshift - will add elements at beginning 

//  arr8.unshift("walk", "eat")

//  arr8.unshift("jump")

//  console.log(arr8)


arr9 = [
    'Admin', 'PIM',
    'Leave', 'Time',
    'Recruitment', 'My Info',
    'Performance', 'Directory',
    'Maintenance', 'Claim',
    'Buzz'
]

// pop -mremoves the last element 
// arr9.pop()
// arr9.pop()
// arr9.pop()

arr9.shift()

arr9.shift()

arr9.shift()
console.log(arr9)


str = "Javascript language"

str2 = "this is js array class"

//ar1 = str2.split("a")

ar1 = str2.split(" ")


console.log(ar1)

ar2 = [1, 4, 5, 8]

st3 = ar2.join("")

console.log(st3)

//write a function to verify a string is palindrome 

str = "raju"

function palindromeornot(str) {

    revestr = str.split("").reverse().join("")

    if (str == revestr) {

        console.log("Given String is a palindrome")
    }
    else {

        console.log("Given String is not a palindrome")
    }
}

palindromeornot(str)


//anagrams 

str1 = "raju"
str2 = "sainath"

function anagramsornot(str1, str2) {


    str3 = str1.split("").sort().join("")  // amry

    str4 = str2.split("").sort().join("")  // amry

    if (str3 === str4) {

        console.log("both are anagrams ")
    }
    else {

        console.log("both are not anagrams ")

    }
}

anagramsornot(str1, str2)

//includes()

menuitems2 = [
    'Admin', 'PIM',
    'Leave', 'Time',
    'Recruitment', 'My Info',
    'Performance', 'Directory',
    'Maintenance', 'Claim',
    'Buzz'
]


console.log(menuitems2.includes("Raju") ) // true

menuitems2[1] = "Raju"


console.log(menuitems2.slice(5))

//slice 


const newarr = menuitems2.slice()


// Amrutha 
//filter 
//map 


// Sangeetha 
// some
// every


// Satish
// splice 
// find 
//findIndex


// Shashi
//reduce
//forEach

//for of  // es6 


ar2 = ["Raju", "Sai", "Nagaraju"]

for(let element of ar2){

    console.log(element)
}
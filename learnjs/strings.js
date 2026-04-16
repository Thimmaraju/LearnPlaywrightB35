

// ""
// ''
// ``

const { send } = require("node:process")

str = "Raju"

str2 = 'sai'

str3 = `Shashi's`

sentence= "This is JS class"

console.log(sentence.length)

str1 = "Raju"

str2 = "G"

// str3 = str1+" "+str2

str3 = str1.concat(str2)

console.log(str3)

str = "       Javascript          class    ".trim()

str = "       Javascript          class    ".trimStart()


str = "       Javascript          class    ".trimEnd()




str = "Javascript  class".toUpperCase()

str = "Javascript  CLASS".toLowerCase()
console.log(str)

num = Number("345") //34

console.log(num)
console.log(typeof(num))


num2 = String(546)

console.log(typeof(num2))



str = "Amrutha"

str = "javascript"

//index starts from 0

console.log(str[2])


console.log(str.charAt(2))

console.log(str.substring(0,4))

console.log(str.includes("raju"))

console.log("1. Understanding requirements\n2. Writing test cases\n3.  prepare Test plan\n4. test envt set up\n5. test exceution" )
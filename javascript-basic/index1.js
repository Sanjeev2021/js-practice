//variables
let age = 35;
console.log("Ag: " ,age)

age = 30
console.log("Age:" +age) 
// or u can also use + as well.

let fname = "sanjeev"
console.log(fname)

//constants
const points = 100
console.log(points)

//strings -- > 
let firstname = "Aleen"
let lastname = "mark"
let fullname = firstname+""+lastname
console.log(fullname)
console.log(fullname[0])
console.log(fullname.toUpperCase())

let email = "abc@gmail.com"
console.log(email.indexOf("@"))
console.log(email.slice(2,5))
console.log(email.substring(2,5))
console.log(email.replace('m','n'))
//replace by regular expression
let email1 = "nbc@gmnil.com"
console.log(email.replaceAll('a','n'))



//template string
const title = "Programming with js"
const author = "E. BalaSwamy"
let result = `The <b>book</b> called ${title} is written by ${author}`
console.log(result)
let htmlResult = "<h1>Hello</h1>"
let htmlResult1 = "<h1>${author}</h1>"

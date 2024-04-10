let players =["Sachin", "Rahul", "Sanjeev", "Virat"]
console.log(players)
console.log(players.length)
console.log(players.join("|"))
console.log(players.indexOf("Rahul"))
let additional = players.concat(["Rohit","Yuvraj"])
console.log(additional)
console.log(players)
let deletedItem=players.pop()
console.log(deletedItem)
console.log(players)
console.log(players.includes("Sachin"))
console.log(players.includes("Virat"))


//null and undefined
let age;
console.log(age , age+10+20)
let exp = null;
console.log(exp, exp+10+20)

//loose vs strict comparison
//loose--> value compare --> not datatype
let sAge = 18
console.log(sAge==18)
console.log(sAge=="18")

//strict--> value as well as type should be same
console.log(sAge===18)
console.log(sAge==="18")

//conversion
//Number , String ,Boolean
//str --> number
n = "hello"
console.log(typeof n)

n="100 hello"
console.log(Number(n))

//num--> str
m = 10001
console.log(typeof String(m))

console.log(Boolean(0))
console.log(Boolean(110))
console.log(Boolean("hi"))
console.log(Boolean(""))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean("hi" + 0))
console.log(Boolean(null , "hi"))
console.log(Boolean("hi" , null))
console.log(Boolean(null + "hi"))
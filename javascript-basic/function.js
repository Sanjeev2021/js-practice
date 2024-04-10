//regular function
function greet(name)
{
  console.log("Hello" +name)
}
greet("Sanjeev")

//function expression
const greet1=function(){
  console.log("Hello 2")
}
greet1()

//function exp with param and return value
const area = function(radius)
{
  return 3.14*radius*radius
}
console.log("Area of circle is:"+area(15))

//function for short hand version 
const area1=(radius)=> {
 return 3.14*radius*radius
}
console.log("Area of a cricle is: "+area(15))

const speak=(fname)=>{
  console.log(`Good day ! ${fname}`)
}

speak("Sanjeev")

//function with named argumemts/default params
const speak1=(fname="priyanka", time="Morning")=>{
  console.log(`Good ${time} ! ${fname}`)
}

speak1()
speak1("Sahil")
speak1("Sam","Evening")

//passing array to a function
const bill=(productPrices,tax)=>{
  let total=0
  for(let i=0 ; i<productPrices.length;i++){
    total+=productPrices[i]+productPrices[i]*tax
  }
  return total
}

console.log("Total is:" +bill([100,200,300],0.2))

//variable args --> rest operator -->(...)
function myFun(...myargs)
{
  console.log(myargs.length)
}

myFun()
myFun("Hello")
myFun(10,20,30)
myFun("hi",2024)
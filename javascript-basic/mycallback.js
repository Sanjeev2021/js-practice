//callback---> one function is passed to another function as a parameter
const myFunc=(callbackFn)=>{
  callbackFn(100)
}

function myCallBackFn(){
  console.log("This is a callback function sent as a param.")
}

function myCallBackFn2(val){
  console.log("Another callback with value:"+val)
}

const myCb1=function(val){
  console.log("cb1:"+val)
}

myFunc(myCallBackFn)
myFunc(myCallBackFn2)
myFunc(myCb1)
myFunc((val) => {
  console.log("cb2:"+val)
})
myFunc((val)=>console.log("cb3:"+val))
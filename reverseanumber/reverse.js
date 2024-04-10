function reverseNumber(){
  let result1 = document.querySelector("#result")
  let num = document.querySelector("#num").value
  console.log("the number is ", num)

  let result = 0
  while(num > 0 ) {
   let num1 = num % 10
    result = (result*10) + num1
    num = parseInt(num / 10)
  }
  result1.innerHTML = "The reversed number is:" +result
  console.log("the reversed number outside is:", result)

  if(num < 0){
    console.log("the number cant be less than 0")
    result1.innerHTML = "The number cant be less than 0"
  }
}

function fibonnaci(){
  let result = document.querySelector("#result")
  let num = document.querySelector("#num").value

  let n1 = 0
  let n2 = 1
  let nextsum

  let fibseries=n1+" "+n2+" "

  for(let i = 1 ; i <= num ; i++){
      nextsum = n1 + n2
      n1 = n2 
      n2 = nextsum
      fibseries+=nextsum+" "
  }

  console.log("the fibonnaci is", fibseries)
  result.innerHTML = "The fibonnaci series is :"  +fibseries


}
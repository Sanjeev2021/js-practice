function primeOrNot(){
  console.log("Inside function")
  let num = document.querySelector('#num').value
  let result = document.querySelector('#result')
  console.log("the value of num", num)
  isPrime = true
  
  for(let i = 2 ; i< num ; i++){
  if(num % i == 0){
    isPrime = false
  } 
}


  if (isPrime == true){
    console.log("It is a prime number.")
    result.innerHTML ="It is a prime number."
  } else {
    console.log("It is not a prime number")
    result.innerHTML = "It is not a prime number."
  }

}


function factorialNum(){
    let result = document.querySelector('#result')
    let num = document.querySelector("#num").value

    let ans = 1 ;
    if(num == 0 || num == 1){
      return 1;
    }

    for(let i = num ; i >= 1 ; i--){
        ans = ans*i;
    }

    // return ans

    console.log("the answer is :", ans)
    result.innerHTML = "the factorial of the number is  : " +ans
}




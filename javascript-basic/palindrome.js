// check palindrome

function checkPalindrome(str) {
    let j = str.length - 1
    for( let i = 0 ; i < j; i++ , j--){
      if (str[i] != str[j]){
        return "it is not palindrome."
      }
    }
    return "It is a palindrome"
}

const pal = checkPalindrome("kayagfk")
console.log(pal)
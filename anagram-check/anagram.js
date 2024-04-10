function areAnagram() {

  let word1 = document.querySelector("#word1").value
  let word2 = document.querySelector("#word2").value
  let result = document.querySelector('#result')

  let n1 = word1.length;
  let n2 = word2.length;

  if (n1 != n2) {
    result.style.color = "red"
    result.innerHTML = "It is not an anagram"
    console.log("not anagram");
    return false;
  }

  //frequency check 
  let freq1 = {} 
  for(let i =0 ; i < n1 ; i ++){
    if(freq1[word1[i]] == undefined ){ 
      freq1[word1[i]] = 1
    } else {
      freq1[word1[i]] += 1
    }
  }
  console.log("frequency of word1",freq1)


  let freq2= {}
  for(let j = 0 ; j < n2 ; j++){
    if(freq2[word2[j]] == undefined){
      freq2[word2[j]] = 1
    } else {
      freq2[word2[j]] += 1
    }
  }

  console.log("frequency of word2", freq2)

  
  for (const char in freq1) {
    if (freq1[char] !== freq2[char]) {
      result.style.color = "red";
      result.textContent = "It is not an anagram";
      return false;
    }
  }

 

  var flag = true 
  for(let i = 0 ; i < n1 ; i++){
    //string.indexof(char)
   if (word2.indexOf(word1[i]) == -1){
        flag = false
        break
   } 
  }

  if(flag){
    result.style.color = "green"
    result.innerHTML = "it is an anagram"
  } else {
    result.style.color = "red"
    result.innerHTML = "it is not an anagram"
  }

}




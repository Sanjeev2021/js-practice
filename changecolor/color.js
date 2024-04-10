// let b1 = document.querySelector("#btn1")
// let b2 = document.querySelector("#btn2")
// let b3 = document.querySelector("#btn3")
// let b4 = document.querySelector("#btn4")

// b1.addEventListener('click',(e) =>{
//   document.body.style.backgroundColor=e.target.value
// })

// b2.addEventListener('click',(e) =>{
//   document.body.style.backgroundColor=e.target.value
// })

// b3.addEventListener('click',(e) =>{
//   document.body.style.backgroundColor=e.target.value
// })

// b4.addEventListener('click',(e) =>{
//   document.body.style.backgroundColor=e.target.value
// })

let buttons = document.getElementsByTagName("button")
console.log(buttons)

Array.from(buttons).forEach((button) =>{
  button.addEventListener('click',(e)=>{
    document.body.style.backgroundColor = e.target.value
  })
})

let websites=[
  ["https://facebook.com","Facebook"],
  ["https://google.com","Google"],
  ["https://swabhavtechlabs.com","Swabhav Techlabs"]
]
//ref js var with div tag
let weblist=document.querySelector("#webs")
let html=``

websites.forEach((web)=>{
  html+= `<a href=${web[0]}>${web[1]}</a><br>`
})

weblist.innerHTML=html
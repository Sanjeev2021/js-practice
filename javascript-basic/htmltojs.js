let players = ["Sachin","Rahul","Virat"]

let playerList = document.querySelector(".topPlayers")
let html=``

players.forEach((playerName) => html+=`<li>${playerName}</li>`)
playerList.innerHTML=html
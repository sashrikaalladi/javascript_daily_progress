//HOW TO ACCEPT USERINPUT IN JAVASCRIPT

//1.window.prompt
//2.by implementing HTLM textbox

// let username

// username= window.prompt("Enter your username")
// console.log(username)
// document.getElementById("btn").onclick= function(){
//     username= document.getElementById("input").value
//     document.getElementById("myid").textContent=`hello ${username}`

// }

// COUNTER PROGRAM

// const decbtn= document.getElementById("decreasebtn")
// const incbtn= document.getElementById("increasebtn")
// const resetbtn= document.getElementById("resetbtn")
// const count=document.getElementById("count")

// let countvalue=0

// incbtn.onclick=function(){
//     countvalue++
//     count.textContent=countvalue
// }

// decbtn.onclick=function(){
//     countvalue--
//     count.textContent=countvalue
// }

// resetbtn.onclick=function(){
//     countvalue=0
//     count.textContent=countvalue
// }

//RANDOMNUMBER GENERATOR

// const btn = document.getElementById("btn")
// const label1 = document.getElementById("label1")
// const label2 = document.getElementById("label2")
// const label3 = document.getElementById("label3")

// const min = 1
// const max = 6
// let randomnumber;
// btn.onclick = function () {
//     randomnumber1 = Math.floor(Math.random() * max) + min
//     randomnumber2 = Math.floor(Math.random() * max) + min
//     randomnumber3 = Math.floor(Math.random() * max) + min

//     label1.textContent = randomnumber1;
//     label2.textContent = randomnumber2;
//     label3.textContent = randomnumber3;
// }

 
// age=21
//let message= age>=21 ? "eligible" : "not eligible"
//console.log(message)
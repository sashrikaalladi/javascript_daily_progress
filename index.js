//HOW TO ACCEPT USERINPUT IN JAVASCRIPT

//1.window.prompt
//2.by implementing HTLM textbox

let username

// username= window.prompt("Enter your username")
// console.log(username)
document.getElementById("btn").onclick= function(){
    username= document.getElementById("input").value
    document.getElementById("myid").textContent=`hello ${username}`

}
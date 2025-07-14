1 -Variables 
 document.getelementbyid 
 decleration let x
 assigment x=25 
 templateliterals   `${}`
 typeof--->to know abut type of the variable 

 2.operators +,-,*,**,/,% 
  AUgmented assigment operators +=,-=,*=./=,%=
  Increment and decrement operator ----> inc or dec by 1
  operator precedence 1.()  2.exponents  3.mul,div & %   4.addition,subtraction     

3.HOW TO ACCEPT USERINPUT IN JAVASCRIPT
     1.window.prompt
     2.by implementing HTLM textbox

4.Typeconversion = change dataype of a value to another datatype
  let x="sashrika" , x=Number(x)  console.log(x,typeof x)
  let y= "pizza"   ,  y=string(y)   console.log(x,typeof x)
  let z="sashrika" , z=Number(z)  console.log(z,typeof z) like this we can convert into another datatype 

5. consts in javscript is the value that cannot be changes 

6.counter program html,css and JS

7. MATH methods 
   x=3.21,y=2.89 , z=9
   Math.round(x)=3, Math.floor()=3,Math.celi()=4, Math.sin,cos,tan(), Math.abs(),Math.sign(),Math.sqrt(),
   Math.log(), Math.random()
   Math.max(x,y,z),Math.min(x,y,z)

8.RANDOM NUMBER GENERATOR 
  min=1 max=9      randomnumber1 = Math.floor(Math.random() * max) + min

9.IF Statements

10.Ternary operator ---> shortcut of if - else 
let x=5    x=>5 ? "yes" : "no"

11.Switch 
   let day=3
   switch(day){
    case 1:
    console.log("monday")
    break
    case2:
    console.log("tuesday")
    break
    case 3:
    console.log("wednesday")
    break
    default:
    console.log("invalid day")
   }

12.String methods -----> let str="sashrika"     
   |charAt()              | indexOf()--first Occurances       | lastIndexOf()--last occurance
str.charAT(3)--->h         str.indexOf("s")---> 0             str.indexOf("s")---> 2

  |length()               | trim()-->trim any white spaces    |toUppercase()
str.length()--->8            str.trim()--->sashrika           |repeat(2)-->sashrikasashrika

|startsWith()                |endsWith()                      |includes()
str.startsWith("s")--->true  str.endsWith("a")--->true         str.includes("")---true

|split()                      |replace()                      |replace.All()  
str.split("")--->["s","a","s","h","r","i","k"]             
str.replace("s","S")--->"SaShRiKa"  
sash-ri-ka --->str.replaceAll("-","")
|padStart(9,0)-->makes our stritn g until it is 9 charecters and fill thoses places with 0 --->00sashrika

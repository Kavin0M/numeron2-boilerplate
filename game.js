// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

// Iteration 3: Creating variables required to make the game functional

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional

const number1 = document.getElementById("number1")
const number2 = document.getElementById("number2")
const number3 = document.getElementById("number3")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const mul = document.getElementById("mul")
const divide = document.getElementById("divide")
const modulus = document.getElementById("modulus")
const timer = document.getElementById("timer")
var score = 0
var time = 20
let timeLimit = setInterval(()=>{
    timer.innerText = time
    time--
    timeLimitCheck()
},1000)



var num1 = num1Gen()
var num2 = num2Gen()
var num3 = num3Gen(num1,num2)


plus.addEventListener("click",()=>{
    if (num1+num2==num3){
        time = 20
        num1 = num1Gen()
        num2 = num2Gen()
        num3 = num3Gen(num1,num2)
        score++
        console.log(score)
    }
    else{
        localStorage.setItem("score",score)
        clearInterval(timeLimit)
        window.open("gameover.html","_self")
    }
})

minus.addEventListener("click",()=>{
    if (num1-num2==num3){
        time = 20
        num1 = num1Gen()
        num2 = num2Gen()
        num3 = num3Gen(num1,num2)
        score++
        console.log(score)
    }
    else{
        localStorage.setItem("score",score)
        clearInterval(timeLimit)
        window.open("gameover.html","_self")
    }
})

mul.addEventListener("click",()=>{
    if (num1*num2==num3){
        time = 20
        num1 = num1Gen()
        num2 = num2Gen()
        num3 = num3Gen(num1,num2)
        score++
        console.log(score)
    }
    else{
        localStorage.setItem("score",score)
        clearInterval(timeLimit)
        window.open("gameover.html","_self")
    }
})

divide.addEventListener("click",()=>{
    if (num1/num2==num3){
        time = 20
        num1 = num1Gen()
        num2 = num2Gen()
        num3 = num3Gen(num1,num2)
        score++
        console.log(score)
    }
    else{
        localStorage.setItem("score",score)
        clearInterval(timeLimit)
        window.open("gameover.html","_self")
    }
})

modulus.addEventListener("click",()=>{
    if (num1%num2==num3){
        time = 20
        num1 = num1Gen()
        num2 = num2Gen()
        num3 = num3Gen(num1,num2)
        score++
        console.log(score)
    }
    else{
        localStorage.setItem("score",score)
        clearInterval(timeLimit)
        window.open("gameover.html","_self")
    }
})





function timeLimitCheck(){
    if (time<0){
        localStorage.setItem("score",score)
        window.open("gameover.html","_self")
        clearInterval(timeLimit)
    }
}

function num1Gen(){
    num1 = Math.floor(Math.random()*101)
    number1.innerText = num1
    return num1
}

function num2Gen(){
    num2 = Math.floor(Math.random()*101)
    number2.innerText = num2
    return num2
}

function num3Gen(num1,num2){
    if (num1<num2){
        var arr = [num1+num2,num1*num2]
        num3 = arr[Math.floor(Math.random()*2)]
        number3.innerText = num3
        return num3
    }
    else{
        if ((num1/num2)%1 === 0){
            var arr = [num1+num2,num1*num2,num1/num2,num1-num2,num1%num2]
            num3 = arr[Math.floor(Math.random()*5)]
            number3.innerText = num3
            return num3
        }
        else{
            var arr = [num1+num2,num1*num2,num1-num2,num1%num2]
            num3 = arr[Math.floor(Math.random()*4)]
            number3.innerText = num3
            return num3
        }
    }
}
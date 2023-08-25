// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

// Iteration 3: Creating variables required to make the game functional

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional

const number1 = document.getElementById("number1")
const number2 = document.getElementById("number2")
const number3 = document.getElementById("number3")
const button = document.getElementById("buttons")
const timer = document.getElementById("timer")
let score = 0
let time = 20
let timeLimit = setInterval(()=>{
    timer.innerText = time
    time--
    timeLimitCheck()
},1000)




numGen()

button.addEventListener("click",(e)=>{``
    checkAns(e.target.id)
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
    arr = [num1+num2,num1*num2,(num1/num2).toFixed(1),num1-num2,num1%num2]
    num3 = arr[Math.floor(Math.random()*5)]
    number3.innerText = num3
    return num3
}

function numGen(){
    num1 = num1Gen()
    num2 = num2Gen()
    num3 = num3Gen(num1,num2)
}

function checkAns(id){
    const index = {plus:0, minus:3, mul:1, divide:2, modulus:4}
    if (arr[index[id]]==num3){
        time = 20
        numGen()
        score++
        console.log(score)
    }
    else{
        localStorage.setItem("score",score)
        clearInterval(timeLimit)
        window.open("gameover.html","_self")
    }
}
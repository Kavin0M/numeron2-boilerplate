// Iteration 8: Making scoreboard functional
const score_board = document.getElementById("score-board")
const play_again_button = document.getElementById("play-again-button")

score = localStorage.getItem("score")
score_board.innerText = score

play_again_button.addEventListener("click",()=>{
    window.open("index.html","_self")
})
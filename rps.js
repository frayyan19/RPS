

let playScore = 5;
let compScore = 5;
let str = ""
let playerSelection = ""
const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')

window.onload = () => {
    game()
}

function endGame(){
    
    if(compScore <= 0){
        const content = document.getElementById('score');
        content.innerHTML = `<a style="color: rgb(130, 224, 162)">YOU WIN!</a>`;
        const cont = document.getElementById('status');
        cont.innerHTML = ``;
        rockBtn.removeEventListener('click',handleClick) 
        paperBtn.removeEventListener('click',handleClick) 
        scissorsBtn.removeEventListener('click',handleClick) 
    }
    if(playScore <= 0){
        const content = document.getElementById('score');
        content.innerHTML = `<a style="color: rgb(222, 112, 112)">YOU LOST!</a>`;
        const cont = document.getElementById('status');
        cont.innerHTML = ``;
        rockBtn.removeEventListener('click',handleClick) 
        paperBtn.removeEventListener('click',handleClick) 
        scissorsBtn.removeEventListener('click',handleClick) 
    }
}

function handleClick(event){
    playerSelection = event.currentTarget.value
    str =  playRound(playerSelection,computerPlay())
    playerSelection = ""
    if(str[4] == 'W') --compScore;
    else if(str[4] == 'L') --playScore;
    const content = document.getElementById('score');
    content.innerHTML =
    `<i style=font-size:20px class="fa-solid fa-user-large">  ${playScore}  Lives  -</i>
    <i style=font-size:20px class="fa-solid fa-desktop">  ${compScore}  Lives</i>`;
    endGame()
}

function computerPlay() {
    const arr = ["Rock","Paper","Scissors"]
    let val = Math.floor(Math.random()*3)
    return arr[val]
}

function playRound(playerSelection, computerSelection) {
    const rs = playerSelection === 'Rock' && computerSelection === 'Scissors'
    const sp = playerSelection === 'Scissors' && computerSelection === 'Paper'
    const pr = playerSelection === 'Paper' && computerSelection === 'Rock'
    const status = document.getElementById('status');
    let winner = rs || sp || pr;
    if(winner){
            status.innerHTML = `<h2 style="color: rgb(130, 224, 162)">You Win!</h2>
${playerSelection} beats ${computerSelection}`
            return "You Win!"
        }
    if(playerSelection == computerSelection){
        status.innerHTML = `<h2 style="color: rgb(71, 71, 71)">You Tie!</h2>
${playerSelection} VS ${computerSelection}`
        return "You Tie!"
    }
    status.innerHTML = `<h2 style="color: rgb(222, 112, 112)">You Lose!</h2>
${computerSelection} beats ${playerSelection}`
    return "You Lose!"
}

function game() {
    rockBtn.addEventListener('click',handleClick)
    paperBtn.addEventListener('click',handleClick)
    scissorsBtn.addEventListener('click',handleClick)
    playScore = 5;
    compScore = 5;
    const content = document.getElementById('score');
    content.innerHTML = 
    `<i style=font-size:20px class="fa-solid fa-user-large">  ${playScore}  Lives  -</i>
    <i style=font-size:20px class="fa-solid fa-desktop">  ${compScore}  Lives</i>`;
    const status = document.getElementById('status');
    status.innerHTML = ""
}
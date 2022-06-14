

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
        content.innerHTML = `YOU WIN!`;
        rockBtn.removeEventListener('click',handleClick) 
        paperBtn.removeEventListener('click',handleClick) 
        scissorsBtn.removeEventListener('click',handleClick) 
    }
    if(playScore <= 0){
        const content = document.getElementById('score');
        content.innerHTML = `YOU LOSE!`;
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
    content.innerHTML = `P: ${playScore} Lives  - C: ${compScore} Lives`;
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
            status.innerHTML = `You Win!
${playerSelection} beats ${computerSelection}`
            return "You Win!"
        }
    if(playerSelection == computerSelection){
        status.innerHTML = `You Tie!
${playerSelection} VS ${computerSelection}`
        return "You Tie!"
    }
    status.innerHTML = `You Lose!
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
    content.innerHTML = `P: ${playScore} Lives  - C: ${compScore} Lives`;
    const status = document.getElementById('status');
    status.innerHTML = ""
}
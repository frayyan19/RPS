

let playScore = 5;
let compScore = 5;
let str = ""
let playerSelection = ""
const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')


function handleClick(rps){
    playerSelection = rps
    str =  playRound(playerSelection,computerPlay())
    playerSelection = ""
    console.log(str)
    if(str[4] == 'W') --playScore
    else if(str[4] == 'L') --compScore
    const content = document.getElementById('score');
    content.innerHTML = `P: ${playScore} Lives  - C: ${compScore} Lives`;
    
    if(compScore == 0) return alert("YOU WIN!")
    if(playScore == 0) return alert("YOU LOSE!")
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
    let winner = rs || sp || pr;
    if(winner){
            return "You Win! " + playerSelection + " beats " + computerSelection
        }
    if(playerSelection == computerSelection) return "You Tie! " + playerSelection

    return "You Lose! " + computerSelection + " beats " + playerSelection
}

function game() {
    rockBtn.addEventListener('click', () => handleClick('Rock'))
    paperBtn.addEventListener('click', () => handleClick('Paper'))
    scissorsBtn.addEventListener('click', () => handleClick('Scissors'))
}

function computerPlay() {
    const arr = ["Rock","Paper","Scissors"]
    let val = Math.floor(Math.random()*2)
    return arr[val]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.substing(1,playerSelection.length()).toLowerCase()
    const rs = playerSelection === 'Rock' && computerSelection === 'Scissors'
    const sp = playerSelection === 'Scissors' && computerSelection === 'Paper'
    const pr = playerSelection === 'Paper' && computerSelection === 'Rock'
    let winner = rs || sp || pr;
    if(winner){
            return "You Win! " + playerSelection + " beats " + computerSelection
        }
    if(playerSelection == computerSelection) return "Tie!"

    return "You Lose! " + computerSelection + " beats " + playerSelection
  }
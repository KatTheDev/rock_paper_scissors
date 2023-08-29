//get computer choice of rock, paper. scissors
let computerChoice
let randomNumber = Math.floor(Math.random() * 3) + 1;

function getComputerChoice() {
    
    if (randomNumber === 1) {
       return computerChoice = 'rock'
    }
    if (randomNumber === 2) {
       return computerChoice = 'paper'
    }
    if (randomNumber === 3) {
       return computerChoice = 'scissors'
    }
}


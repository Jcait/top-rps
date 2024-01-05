console.log("Hello World")

// CHoices are ROCK, PAPER, or SCISSORS
// The choices must be made randomly 

function getComputerChoice () {
    // use math to deice the which chouice is call
    //  0-99 to give each choice a 1/3rd chance
    let choice = Math.floor(Math.random() * 100);
    if( choice <= 33) {
        return 'rock'
    }
    else if (choice > 33 && choice <= 66) {
        return 'paper'
    } 
    else {
        return "scissors"
    }
    return choice
}

// using ASCII value to simplyfy conditionals
// rock > paper true
// paper > scissors true
// scissors > rock true

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return 'Tie Game!!"'
    }
    else if (playerSelection > computerSelection) {
        return `You selected ${playerSelection} and the computer selected ${computerSelection}, congrats you win!`
    } else {
        return `You selected ${playerSelection} and the computer selected ${computerSelection}, you lose!!`
    }
    
}

const playerSelection = 'rock'
const computerSelection = getComputerChoice()

console.log(playRound(playerSelection, computerSelection))
console.log(playerSelection)
console.log(computerSelection)
console.log("Hello World")

// CHoices are ROCK, PAPER, or SCISSORS
// The choices must be made randomly 

// function getComputerChoice () {
//     // use math to deice the which chouice is call
//     //  0-99 to give each choice a 1/3rd chance
//     let choice = Math.floor(Math.random() * 100);
//     if( choice <= 33) {
//         return 'rock'
//     }
//     else if (choice > 33 && choice <= 66) {
//         return 'paper'
//     } 
//     else {
//         return "scissors"
//     }
//     return choice
// }

// using ASCII value to simplyfy conditionals
// rock > paper true
// Scissors > paper true
// scissors > rock true

// function playRound(playerSelection, computerSelection) {
//     if(playerSelection == computerSelection) {
//         return 'Tie Game!!"'
//     }
//     else if (playerSelection > computerSelection) {
//         return `You selected ${playerSelection} and the computer selected ${computerSelection}, congrats you win!`
//     } else {
//         return `You selected ${playerSelection} and the computer selected ${computerSelection}, you lose!!`
//     }
    
// }

// const playerSelection = prompt().toLocaleLowerCase()
// const computerSelection = getComputerChoice()

function game() {


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


    let playerScore = 0;
    let computerScore = 0
    // Loops though 5 games
    for(i = 0; i < 6; i++) {
        let playerSelection = prompt().toLocaleLowerCase()
        let computerSelection = getComputerChoice()
        // Calls the player and computer to make their choice
        // ASCII values and score added if the player or computer win <-- DOesnt work
        // May make it first to five in future
        function playRound(playerSelection, computerSelection) {
            if(playerSelection !== computerSelection) {
                if (playerSelection == "rock" &&   computerSelection == "scissors" || 
                    playerSelection == "scissors" &&   computerSelection == "paper"||
                    playerSelection == "paper" &&   computerSelection == "rock") {
                playerScore ++
                return `You selected ${playerSelection} and the computer selected ${computerSelection}, congrats you win!`
                } else {
                    computerScore++
                    return `You selected ${playerSelection} and the computer selected ${computerSelection}, you lose!!`
                } 
        } else {
            return `Tie game!`
        }
        // Checks the result of each round for testing purposes
        // console.log(playRound(playerSelection, computerSelection))
        // console.log(playerSelection)
        // console.log(computerSelection)
    }

    console.log(playRound(playerSelection, computerSelection))
    console.log(playerSelection)
    console.log(computerSelection)
}

    

// Scpre calculating at the end
    if(playerScore > computerScore) {
        return `Great Job you scored ${playerScore} while the computer only scored ${computerScore}. A winner is you!`
    } else if (playerScore < computerScore)  {
        return `Tough break,  you scored ${playerScore} while the computer scored ${computerScore} you lose. `
    } else {
        return ' You Tied with the computer'
    }

}


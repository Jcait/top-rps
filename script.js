console.log("Hello World")
const btn = document.querySelectorAll("button")
const para = document.createElement('p')

let playerChoice
btn.forEach((currentBtn) => {
    currentBtn.addEventListener('click', () => {
        playerChoice = currentBtn.textContent.toLowerCase()
        console.log(playerChoice)
    })
})

let computerChoice






function getComputerChoice () {
    // use math to deice the which chouice is call
    //  0-99 to give each choice a 1/3rd chance
    let choice = Math.floor(Math.random() * 100);
    if( choice <= 33) {
       computerChoice = 'rock'
   }
    else if (choice > 33 && choice <= 66) {
            computerChoice = 'paper'
        } 
    else {
            computerChoice = "scissors"
        }
    }


function playRound(playerChoice, getComputerChoice) {
    if(playerChoice !== getComputerChoice) {
        if (playerChoice == "rock" &&   getComputerChoice == "scissors" || 
        playerChoice == "scissors" &&   getComputerChoice == "paper"||
        playerChoice == "paper" &&   getComputerChoice == "rock") {
                playerScore ++
                return `You selected ${playerSelection} and the computer selected ${computerSelection}, congrats you win!`
        } else {
            computerScore++
            return `You selected ${playerSelection} and the computer selected ${computerSelection}, you lose!!`
           } 
    } else {
        return `Tie game!`
    }

}




    btn.forEach((currentBtn) => {
    currentBtn.addEventListener('click', (getComputerChoice))
})

        function playRound(playerChoice, getComputerChoice) {
            if(playerChoice !== getComputerChoice) {
                if (playerChoice == "rock" &&   getComputerChoice == "scissors" || 
                playerChoice == "scissors" &&   getComputerChoice == "paper"||
                playerChoice == "paper" &&   getComputerChoice == "rock") {
                        playerScore ++
                        return `You selected ${playerSelection} and the computer selected ${computerSelection}, congrats you win!`
                } else {
                    computerScore++
                    return `You selected ${playerSelection} and the computer selected ${computerSelection}, you lose!!`
                } 
        } else {
            return `Tie game!`
        }

    }

    console.log(playRound(playerChoice, computerSelection))
    console.log(playerChoice)
    console.log(computerSelection)


    

// // Scpre calculating at the end
//     if(playerScore > computerScore) {
//         return `Great Job you scored ${playerScore} while the computer only scored ${computerScore}. A winner is you!`
//     } else if (playerScore < computerScore)  {
//         return `Tough break,  you scored ${playerScore} while the computer scored ${computerScore} you lose. `
//     } else {
//         return ' You Tied with the computer'
//     }



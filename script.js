console.log("Hello World")
const btn = document.querySelectorAll("button")
const para = document.createElement('p')
const result = document.querySelector('.results')
let computerScore = 0
let playerScore = 0
let computerChoice
let playerChoice




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

btn.forEach((currentBtn) => {
    currentBtn.addEventListener('click', () => {
       playerChoice = currentBtn.textContent
    })
})


function playRound(playerChoice, getComputerChoice) {
    console.log(`Player Score is ${playerScore}`)
    console.log(`Computer score is ${computerScore}`)
    // console.log(`Player chooice is${playerChoice}`)
    pChoice = playerChoice.target.innerText.toLowerCase()
    console.log(pChoice.toString().toLowerCase())
    console.log(`computer choice is ${computerChoice}`)
    if(pChoice !== computerChoice) {
        if (pChoice == "rock" &&   computerChoice == "scissors" || 
        pChoice == "scissors" &&   computerChoice == "paper"||
        pChoice == "paper" &&   computerChoice == "rock") {
                playerScore++
                para.textContent =`You selected ${pChoice} and the computer selected ${computerChoice}, congrats you win!`
        } else {
            computerScore++
            para.textContent = `You selected ${pChoice} and the computer selected ${computerChoice}, you lose!!`
           } 
    } else {
        para.textContent =  `Tie game!`
    } result.appendChild(para)

}


    btn.forEach((currentBtn) => {
    currentBtn.addEventListener('click', (getComputerChoice))
})


    btn.forEach((currentBtn) => {
        currentBtn.addEventListener('click', playRound)
    })









    

// // Scpre calculating at the end
//     if(playerScore > computerScore) {
//         return `Great Job you scored ${playerScore} while the computer only scored ${computerScore}. A winner is you!`
//     } else if (playerScore < computerScore)  {
//         return `Tough break,  you scored ${playerScore} while the computer scored ${computerScore} you lose. `
//     } else {
//         return ' You Tied with the computer'
//     }



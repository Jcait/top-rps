console.log("Hello World")

// CHoices are ROCK, PAPER, or SCISSORS
// The choices must be made randomly 

function getComputerChoice () {
    let choice = Math.floor(Math.random() * 100) +1;
    return choice
}

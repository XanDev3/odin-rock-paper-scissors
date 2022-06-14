let x = "You lose!";
let y = "You win!";
let z = "It's a draw!";
let computerScore = 0;
let playerScore = 0;

function computerPlay(){
    const items = ["Rock", "Paper", "Scissors"];
    var selection= items[Math.floor(Math.random()* items.length)];
    return selection;
}


function playRound(playerSelection, computerSelection){
 		playerRPS = playerSelection;
  	compRPS = computerSelection;
    if (playerRPS.toLowerCase() === "rock" && compRPS.toLowerCase() === "paper"){
        console.log( `${x} Paper covers Rock`);
        computerScore ++;
    } else if (playerRPS.toLowerCase() === "rock" && compRPS.toLowerCase() === "scissors"){
        console.log( `${y} Rock crushes Scissors`);
        playerScore ++;
    }
    if (playerRPS.toLowerCase() === "paper" && compRPS.toLowerCase() === "rock"){
        console.log(`${y} Paper covers Rock`);
        playerScore ++;
    } else if (playerRPS.toLowerCase() === "paper" && compRPS.toLowerCase() === "scissors"){
        console.log(`${x} Scissors slices Paper`);
        computerScore ++;
    }
    if (playerRPS.toLowerCase() === "scissors" && compRPS.toLowerCase() === "rock"){
        console.log(`${x} Rock crushes Scissors`);
        computerScore ++;
    } else if (playerRPS.toLowerCase() === "scissors" && compRPS.toLowerCase() === "paper"){
        console.log( `${y} Scissors slices Paper`);
        playerScore ++;
    }
    else if(playerRPS.toLowerCase() === compRPS.toLowerCase()){
        console.log(`${z} You both chose ${playerRPS}.`);
    } 
//     else{
//         console.log( `Could not determine the winner. Player chose ${playerRPS} and Computer chose ${compRPS}.`);
//     } 

}
function game(){
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Do you choose Rock, Paper, or Scissors?: ");
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    if(playerScore > computerScore){
        console.log(`You win the whole game with score: ${playerScore} to ${computerScore} `);
    }
    else if(playerScore < computerScore){
        console.log(`You lost the whole game with score: ${computerScore} to ${playerScore} `);
    }
    else if(playerScore === computerScore){
        console.log(`It's a Draw!`);
    }
}
game()
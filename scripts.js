const optionBtn = document.querySelectorAll('div.optionBtn button');
const playerPoints= document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const roundResults = document.querySelector('#roundResults');
const resetBtn = document.querySelector('#reset');
let x = "You lose!";
let y = "You win!";
let z = "It's a draw!";
let computerScore = 0;
let playerScore = 0;
let playerChoice;

//refresh page for new game
resetBtn.addEventListener('click',() => location.reload());

//add listener for clicks on each button
optionBtn.forEach(button => {button.addEventListener('click', getPlayerSelection)});

function computerPlay(){
    const items = ["Rock", "Paper", "Scissors"];
    var selection= items[Math.floor(Math.random()* items.length)];
    return selection;
}

function getPlayerSelection(e){
    // let playerSelection = (e.target.id);
    playerSelection = e.target.textContent;
    playRound(playerSelection, computerPlay());
}

function playRound(playerSelection, computerSelection){
 	playerRPS = playerSelection;
  	compRPS = computerSelection;
    if (playerRPS.toLowerCase() === "rock" && compRPS.toLowerCase() === "paper"){
        roundResults.textContent = `${x} Paper covers Rock`;
        computerPoints.textContent = ++computerScore;
    } else if (playerRPS.toLowerCase() === "rock" && compRPS.toLowerCase() === "scissors"){
        roundResults.textContent = `${y} Rock crushes Scissors`;
        playerPoints.textContent = ++playerScore;
    }
    if (playerRPS.toLowerCase() === "paper" && compRPS.toLowerCase() === "rock"){
        roundResults.textContent =`${y} Paper covers Rock`;
        playerPoints.textContent = ++playerScore;
    } else if (playerRPS.toLowerCase() === "paper" && compRPS.toLowerCase() === "scissors"){
        roundResults.textContent =`${x} Scissors slices Paper`;
        computerPoints.textContent = ++computerScore;
    }
    if (playerRPS.toLowerCase() === "scissors" && compRPS.toLowerCase() === "rock"){
        roundResults.textContent =`${x} Rock crushes Scissors`;
        computerPoints.textContent = ++computerScore;
    } else if (playerRPS.toLowerCase() === "scissors" && compRPS.toLowerCase() === "paper"){
        roundResults.textContent = `${y} Scissors slices Paper`;
        playerPoints.textContent = ++playerScore;
    }
    else if(playerRPS.toLowerCase() === compRPS.toLowerCase()){
        computerPoints.textContent = ++computerScore;
        playerPoints.textContent = ++playerScore;
        roundResults.textContent =`${z} You both chose ${playerRPS}.`;

    } 
    checkGameOver();
}
//checks if a player or computer has earned 5 points to end the game
function checkGameOver(){
    if(playerScore === 5 || computerScore === 5){
        if(playerScore === computerScore){
            updateResults('tie')
        }
        else{
            let winner = `${(computerScore > playerScore) ? 'computer' : 'player'}`;
            updateResults(winner);        
        }
    
    }
}
const winnerResults ={
    computer: ["You Lost the game to a computer!", 'red'],
    player: ["You Win the game!!!!", 'green'],
    tie: ["The game is a Tie!", 'blue']
  };

function updateResults(winner){
    roundResults.textContent = winnerResults[winner][0];
    roundResults.style.color = winnerResults[winner][1];
    optionBtn.forEach(button => { button.removeEventListener('click', getPlayerSelection);
});
}
/* function game(){         //plays five games
    for (let i = 0; i < 5; i++) {
        getPlayerSelection();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    if(playerScore > computerScore){
        roundResults.textContent =`You win the whole game with score: ${playerScore} to ${computerScore} `;
    }
    else if(playerScore < computerScore){
        roundResults.textContent =`You lost the whole game with score: ${computerScore} to ${playerScore} `;
    }
    else if(playerScore === computerScore){
        roundResults.textContent =`It's a Draw!`;
    }
    optionBtn.forEach(button => {button.removeEventListener('click', getPlayerSelection)})
}
game() */
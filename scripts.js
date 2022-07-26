// const optionBtn = document.querySelectorAll('div.optionBtn button');
// const images = Array.from(document.querySelectorAll('.card-image'));
const images = document.querySelectorAll('div.card-image img');
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
// Start Game when user clicks on an image
images.forEach(img => {img.addEventListener('click', getPlayerSelection)});
// images.forEach((image) =>image.addEventListener('click', () => {getPlayerSelection(image.dataset.image);}));
// optionBtn.forEach(button => {button.addEventListener('click', getPlayerSelection)});

function computerPlay(){
    const items = ["Rock", "Paper", "Scissors"];
    var selection= items[Math.floor(Math.random()* items.length)];
    return selection;
}

function getPlayerSelection(e){
    let playerSelection = e.target.alt;
    // playerSelection = e.target.classList;
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
    computer: ['You Lost the game to a computer! \r\nWant to play again?', 'red'],
    player: ['You Win the game!!!! \r\nWant to play again?', 'green'],
    tie: ['The game is a Tie!\r\nWant to play again?', 'blue']
  };

function updateResults(winner){
    roundResults.textContent = winnerResults[winner][0];
    roundResults.style.color = winnerResults[winner][1];
    // optionBtn.forEach(button => { button.removeEventListener('click', getPlayerSelection);
    images.forEach(img => {img.removeEventListener('click', getPlayerSelection)});

}

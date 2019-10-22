const buttons = document.querySelectorAll('button');
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const result = document.querySelector(".result");
console.log(playerScore);
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const playChoice = e.target.firstChild.data.toLowerCase();
        console.log(playChoice);
        let x = playRound(playChoice, computerPlay());
        console.log(x);
        if (playerScore.textContent >= 5 || computerScore.textContent >= 5){
            result.textContent="Game Over!";
            if (playerScore.textContent >= 5){
                result.textContent+=" You Win!";
            }else {
                result.textContent+=" You Lose.";
            }
        }else if (playerScore.textContent == 4 && x == 1){
            playerScore.textContent++;
            result.textContent+="  Game Over!";
        }else if(computerScore.textContent == 4 && x === -1){
            computerScore.textContent++;
            result.textContent+="  Game Over!";
        }else if (x==1){
            playerScore.textContent++;
        }else if (x== -1 ){
            computerScore.textContent++;
        }

    });
});

function scoreKeep(result, pScore, cScore){ 
    //let pScore = 0, cScore = 0;
    if (result == 1){
        pScore++;
    }else if (result == -1){
        cScore++;
    }
        console.log("Score: Player: " + pScore + " Computer: " + cScore)
    }


function computerPlay(){
    let choice = Math.random();
    console.log( choice );
    if (choice<1/3) {
        return  "rock";
    }else if (choice<2/3){
        return "paper";
    }else {
        return "scissors";
    }

}
function playRound(playerSelection, computerSelection) {
    console.log(playerSelection,computerSelection);
if (playerSelection=="rock" && computerSelection=="scissors" || playerSelection=="scissors" && computerSelection=="paper" || playerSelection=="paper" && computerSelection=="rock") {
    result.textContent = "You Win! " + playerSelection[0].toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection + ".";
    return 1;
} else if (playerSelection=="scissors" && computerSelection=="rock" || playerSelection=="paper" && computerSelection=="scissors" || playerSelection=="rock" && computerSelection=="paper") {
    result.textContent = "You Lose! " + computerSelection[0].toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection + ".";
    return -1;
} else {
    result.textContent = "You tied.  You both picked " + computerSelection[0].toUpperCase() + computerSelection.slice(1) + ".";
    return 0;
}
    
}


function game(){
    let pScore = 0, cScore = 0, x = 0;
    while(pScore < 3 && cScore < 3){
        x = playRound(playerChoose(),computerPlay());
        if (x == 1){
            pScore++;
        }else if (x == -1){
            cScore++;
        }
        console.log("Score: Player: " + pScore + " Computer: " + cScore)
    }
    if (pScore == 5) {
        console.log("You win!");
    } else {
        console.log("You lose.");
    }
}
function playerChoose(){
    while(1){
    let choice = prompt("Choose rock, paper, or scissors.","");
    if (choice !==null) {
        choice=choice.toLowerCase();
        if (choice == "rock" || choice == "paper" || choice == "scissors"){
            return choice;
        } else {
            alert("You must choose rock, paper, or scissors.")
        }
    }
    }
}
//game();
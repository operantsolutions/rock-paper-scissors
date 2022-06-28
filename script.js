const roundRes = document.querySelector('#roundResults');
const gameRes = document.querySelector('#gameResults');

function computerPlay(){
    const choices = ["Rock", "Paper", "Scissors"];
    const num = (Math.floor(Math.random()*3));
    console.log(num);
    const result = choices[num];
    console.log(result);
    return result
}

function checkGameState(){
    if (playerWins >= 5){
        alert("You won!");
    }
    else if (computerWins >= 5){
        alert("The computer won!");
    }
    else {
    }
}

function playRound(playerSelection){
    const computerSelection = computerPlay();
    compare(playerSelection, computerSelection);
    gameRes.textContent = `The player\'s score is ${playerWins}. The computer\'s score is ${computerWins}.`;
    checkGameState();
}

function compare(playerSelection, computerSelection){
    if (playerSelection=="Rock"){
        switch (computerSelection){
            case "Rock":
                roundRes.textContent = "It's a tie. You both chose rock.";
                break;
            case "Paper":
                ++computerWins;
                roundRes.textContent = "The computer wins. Paper beats rock.";
                break;
            case "Scissors":
                ++playerWins;
                roundRes.textContent = "You win. Rock beats scissors.";
                break;
            default:
                alert("Something went horribly wrong.");
                break;
        }
    }
    else if (playerSelection=="Paper"){
        switch (computerSelection){
            case "Paper":
                roundRes.textContent = "It's a tie. You both chose paper.";
                break;
            case "Scissors":
                ++computerWins;
                roundRes.textContent = "The computer wins. Scissors beats paper.";
                break;
            case "Rock":
                ++playerWins;
                roundRes.textContent = "You win. Paper beats rock.";
                break;
            default:
                alert("Something went horribly wrong.");
                break;
        }
    }
    else if (playerSelection=="Scissors") {
        switch (computerSelection){
            case "Scissors":
                roundRes.textContent = "It's a tie. You both chose scissors.";
                break;
            case "Rock":
                ++computerWins;
                roundRes.textContent = "The computer wins. Rock beats scissors.";
                break;
            case "Paper":
                ++playerWins;
                roundRes.textContent = "You win. Scissors beats paper.";
                break;
            default:
                alert("Something went horribly wrong.");
                break;
        }
    }
    else {
        playRound();
    }
}

let playerWins = 0;
let computerWins = 0;
const buttons = document.querySelectorAll(".button");
for (const btn of buttons){
    btn.addEventListener('click', (e) => {
        playRound(e.target.textContent);
    })
}

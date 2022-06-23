console.log("RPS start");

function computerPlay(){
    const choices = ["Rock", "Paper", "Scissors"];
    const num = (Math.floor(Math.random()*3));
    console.log(num);
    const result = choices[num];
    console.log(result);
    return result
}

function playerPlay(){
    const rawInput = prompt("Rock, paper, or scissors? ");
    const normInput = `${rawInput.slice(0,1).toUpperCase()}${rawInput.slice(1).toLocaleLowerCase()}`;
    switch (normInput){
        case "Rock":
        case "Paper":
        case "Scissors":
            console.log(normInput);
            return normInput;
        default:
            alert("That is not a valid choice.");
            break;
    }
}

function playRound(){
    const computerSelection = computerPlay();
    const playerSelection = playerPlay();
    compare(playerSelection, computerSelection);
}

function compare(playerSelection, computerSelection){
    if (playerSelection=="Rock"){
        switch (computerSelection){
            case "Rock":
                console.log("It's a tie. You both chose rock.");
                break;
            case "Paper":
                ++computerWins;
                console.log("The computer wins. Paper beats rock.");
                break;
            case "Scissors":
                ++playerWins;
                console.log("You win. Rock beats scissors.");
                break;
            default:
                alert("Something went horribly wrong.");
                break;
        }
    }
    else if (playerSelection=="Paper"){
        switch (computerSelection){
            case "Paper":
                console.log("It's a tie. You both chose paper.");
                break;
            case "Scissors":
                ++computerWins;
                console.log("The computer wins. Scissors beats paper.");
                break;
            case "Rock":
                ++playerWins;
                console.log("You win. Paper beats rock.");
                break;
            default:
                alert("Something went horribly wrong.");
                break;
        }
    }
    else if (playerSelection=="Scissors") {
        switch (computerSelection){
            case "Scissors":
                console.log("It's a tie. You both chose scissors.");
                break;
            case "Rock":
                ++computerWins;
                console.log("The computer wins. Rock beats scissors.");
                break;
            case "Paper":
                ++playerWins;
                console.log("You win. Scissors beats paper.");
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

function game(){
    for (i=0; i<5; i++) {
        playRound();
        console.log(`The player has won ${playerWins} games. The computer has won ${computerWins} games.`);
    }
}
let playerWins = 0;
let computerWins = 0;
game();
alert("That's five games. Thanks for playing!");
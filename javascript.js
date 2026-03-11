console.log("hello welcom to the game");

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3) +1;
    if (computerChoice == 1) return "rock";
    else if (computerChoice == 2) return "paper";
    else return "scissor" ;
}

function getHumanChoice(){
    let humanChoice = prompt("To play game, Enter any one: rock, paper or scissor");
    return humanChoice.toLowerCase();
}

function playGame(){

    let humanScore = 0;
    let computerScore = 0;
    

    for(let i = 0; i < 5; i++ ){
        console.log(`--- Round ${i+1} ---`);
        let humanselection = getHumanChoice();
        let computerselection = getComputerChoice();

        let result = playRound(humanselection, computerselection);

        if (result === "human"){
            humanScore += 1;
        }
        else if ( result === "computer"){
            computerScore += 1;
        }
        console.log(`--- human score:${humanScore} computer score:${computerScore}`);
    }

    console.log(`\n--- final result ---`)
    if(humanScore > computerScore){
        console.log("You win the game!!!");
    }
    else if(computerScore > humanScore){
        console.log("You loose the game -_-");
    }
    else{
        console.log("It's a tie");
    }

    function playRound(humanselection, computerselection){
        if (humanselection === computerselection){
            console.log("It's a Tie!");
            return "tie";
        }
        else if( 
            (humanselection === "rock" && computerselection === "scissor") ||
            (humanselection === "paper" && computerselection === "rock") ||
            (humanselection === "scissor" && computerselection === "paper") ){
                console.log(`You win! ${humanselection} beats ${computerselection}`) ;
                return "human";
            }
        else{
        console.log(`computer wins! ${computerselection} beats ${humanselection}`);
        return "computer";
        } 
    }
    if (confirm("Do you want to play again?")){
        playGame();
    }
    else{
        console.log("Thank you for playing ^_^");
    }
}

playGame();
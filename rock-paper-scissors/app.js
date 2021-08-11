let userScore = 0;
let computerScore = 0;

//caching the dom --> storing for future use and for performance
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function wins(userChoice, computerChoice){
    userScore++;
    //computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}(user) beats ${convertToWord(computerChoice)}(comp) You win!`;
    // console.log(userScore);
    // console.log("USER WINS!");
}

function loses(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}(user) loses to ${convertToWord(computerChoice)}(comp) You lost!`;
    //console.log("USER LOSES!");
}

function draws(){
    result_p.innerHTML = "Its a Draw!";
   // console.log("DRAW!");
}
//console.log(getComputerChoice());

function game(userChoice){
    const computerChoice = getComputerChoice();
    //  console.log("user choice => " + userChoice);
    //  console.log("user choice => " + computerChoice);

    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            wins(userChoice, computerChoice);
                break;
        case "rp":
        case "ps":
        case "sr":
            loses(userChoice, computerChoice);
                break;
        case "rr":
        case "pp":
        case "ss":
            draws();
                break;
    }
}

function main (){
    rock_div.addEventListener('click', function(){
        game("r")
        // console.log("Clicked on rock");
    });
    
    paper_div.addEventListener('click', function(){
        // console.log("Clicked on paper");
        game("p")
    });
    
    scissors_div.addEventListener('click', function(){
        // console.log("Clicked on scissors");
        game("s")
    });
}

main();

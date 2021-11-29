//rock paper scissors game
//played from console 
//Jasper 11/22/21

const choices = ['rock', 'paper', 'scissors']
let playerplay = "playtest";
let computerplay = "";
let computerWins = 0;
let playerWins = 0;
let playerVScomputerString = ""


function computerPlay(){

    let randomNumber = Math.floor(Math.random()*3); //mathrandom integer number
    return choices[randomNumber]
    //return rock , paper or scissors based on int
}

function playAgain(){
    }  

const buttons = document.querySelectorAll('div.playerChoices > button'); //assign on click action to rock, paper and scissors buttons
buttons.forEach((button) => {
    button.addEventListener('click', playRound
    );
});

function playRound(){
   computerplay = computerPlay();
   playerplay = this.id;
   document.getElementById('computerPlay').textContent = computerPlay();
   document.getElementById('playerPlay').textContent = playerplay;

    playerVScomputerString = playerplay + computerplay; //allow switches to work by concat the choices

    //debug code
    console.log(playerplay)
    console.log(computerplay)
   //end debug code

    if (String(playerplay) !== "rock" && String(playerplay) !== "paper" && String(playerplay) !== "scissors"){
        alert("invalid play");
        playAgain()
        return;
    }
    if (playerplay === computerplay){
        alert("tie");
        playAgain()
        return;
    }
    switch(playerVScomputerString){
        case 'rockpaper':
            alert("paper beats rock, you lose :(")
            computerWins++
            break;
        case 'rockscissors':
            alert("rock beats scissors! WINNER")  
            playerWins++
            break;  
        case 'paperscissors':  
            alert("scissors beat paper, maybe you should cut your losses") 
            computerWins++  
            break;
        case 'paperrock':  
            alert("paper beats rock! that's a wrap") 
            playerWins++
            break;
        case 'scissorspaper':
            alert("scissors beats paper, you really showed the computer")
            playerWins++
            break;
        case 'scissorsrock':  
            alert("ouch, your scissors was beat up by a rock. better luck next time!")
            computerWins++
            break;
        default:
            alert("you must play rock, paper or scissors")
        break;    
    }
       document.getElementById('playerScore').textContent = "Player Wins : " + playerWins;
       document.getElementById('computerScore').textContent = "Computer Wins : " + computerWins;
}

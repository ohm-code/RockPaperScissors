//rock paper scissors game
//played from console 
//Jasper 11/22/21   

const choices = ['rock', 'paper', 'scissors']
let playerplay = "playtest";
let computerplay = "";
let computerWins = 0;
let playerWins = 0;
let playerVScomputerString = ""



   function addImg(x,who){
       var img =document.createElement('img');
       img.src = `./images/${x}.png`;
       console.log(img.src)
       var block = document.getElementById(who);
       console.log(block)
       block.appendChild(img);   
   }

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
   document.getElementById('computerPlay').textContent = "";
   addImg(computerplay,'computerPlay');

   document.getElementById('playerPlay').textContent = "";
   addImg(playerplay,'playerPlay');

    playerVScomputerString = playerplay + computerplay; //allow switches to work by concat the choices


    if (String(playerplay) !== "rock" && String(playerplay) !== "paper" && String(playerplay) !== "scissors"){
        alert("invalid play");
        playAgain()
        return;
    }
    if (playerplay === computerplay){
        document.getElementById('result').textContent ="tie";
        playAgain()
        return;
    }
    switch(playerVScomputerString){
        case 'rockpaper':
            document.getElementById('result').textContent ="rock loses to paper, you lose :(";
            computerWins++
            break;
        case 'rockscissors':
            document.getElementById('result').textContent ="rock beats scissors! WINNER"; 
            playerWins++
            break;  
        case 'paperscissors':  
            document.getElementById('result').textContent ="paper loses to scissors, computer wins"; 
            computerWins++  
            break;
        case 'paperrock':  
            document.getElementById('result').textContent ="paper beats rock! you beat the computer :)"; 
            playerWins++
            break;
        case 'scissorspaper':
            document.getElementById('result').textContent ="scissors beats paper, you beat the computer!";
            playerWins++
            break;
        case 'scissorsrock':  
            document.getElementById('result').textContent ="Scissors loses to rock :( computer wins";
            computerWins++
            break;
        default:
            alert("you must play rock, paper or scissors")
        break;    
    }
       document.getElementById('playerScore').textContent = "Player Wins : " + playerWins;
       document.getElementById('computerScore').textContent = "Computer Wins : " + computerWins;
}

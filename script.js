//rock paper scissors game
//played from console 
//Jasper 11/22/21

const choices = ['rock', 'paper', 'scissors']
let playerplay = "";
let computerplay = "";

playRound()




function computerPlay(){

    let randomNumber = Math.floor(Math.random()*3); //mathrandom integer number
    return choices[randomNumber]
    //return rock , paper or scissors based on int
}

function playAgain(){
    confirm("Play again?")? playRound():alert("thanks for playing!"); 

}  

function playRound(){
    playerplay =prompt("Will you choose rock, paper, or scissors?","").toLowerCase();
    computerplay = computerPlay();
    playerVScomputerString = playerplay + computerplay;
    //debug code
    console.log(playerplay)
    console.log(computerplay)
//end debug code


    if (playerplay != "rock" && playerplay != "paper" && playerplay != "scissors"){
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
            break;
        case 'rockscissors':
            alert("rock beats scissors! WINNER")  
            break;  
        case 'paperscissors':  
            alert("scissors beat paper, maybe you should cut your losses")   
            break;
        case 'paperrock':  
            alert("paper beats rock! that's a wrap") 
            break;
        case 'scissorspaper':
            alert("scissors beats paper, you really showed the computer")
            break;
        case 'scissorsrock':  
            alert("ouch, your scissors was beat up by a rock. better luck next time!")
            break;
        default:
            alert("you must play rock, paper or scissors")
        break;    
    }
    playAgain();
}
    




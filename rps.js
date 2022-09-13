let arr = ["rock","paper","scissors"]

function getComputerSelection(){
    return arr[Math.floor(Math.random()*3)];
}

let pwins =0;
let cwins = 0;

const buttons = document.querySelectorAll('.boton')
const pC = document.querySelector('.pChoice')
const cC = document.querySelector('.cChoice')
const gameOver = document.querySelector('.gameOver')
const score = document.querySelector('.score')

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        playRound(button.id)
        
    });
  });


function playRound(selection){
    const playerSelection = selection
    pC.textContent = `Your choice: ${playerSelection}`;
    computerSelection = getComputerSelection()
    cC.textContent = `Computer's choice:${computerSelection}`
    if (playerSelection == "rock" && computerSelection == "scissors")
    {
        console.log("Rock beats scissors you won!");
        pwins++;
    }

    else if (playerSelection == "rock" && computerSelection=="paper" ){
        console.log("Rock loses against paper, you lost!");
        cwins++;
    }
    
    else if (playerSelection == "paper" && computerSelection=="rock" ){
        console.log("paper beats rock, you won!")
        pwins++;
    }
    
    else if (playerSelection == "paper" && computerSelection=="scissors" ){
        console.log("paper loses against scissors, you lost!")
        cwins++;
    }
    
    else if (playerSelection == "scissors" && computerSelection=="rock" ){
        console.log("scissors loses againt rock, you lost!")
        cwins++;
    }
    
    else if (playerSelection == "scissors" && computerSelection=="paper" ){
        console.log("scissors beats paper, you win!")
        pwins++;
    }else{
        console.log("Its a tie!")
    } 
    console.log("Player: "+pwins +" | computer: " + cwins)
    score.textContent = `Wins:${pwins}    loses:${cwins}`

    if(pwins ==5){
        gameOver.textContent = 'Congratulations you won! GAME OVER'
        pwins = 0;
        cwins = 0;
    }else if(cwins ==5){
        gameOver.textContent = 'Sorry you lost! GAME OVER'
        pwins = 0;
        cwins = 0;
    }
}





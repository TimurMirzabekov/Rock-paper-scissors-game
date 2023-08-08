let computer_coins = 0;
let user_coins = 0;
let tries = document.getElementById('tries');

function get_random(max){
    return Math.floor( Math.random() * max);
}

function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let choice = get_random(3)
    
    return choices[choice]   
}

function playGame(computer, user){
let message;
let computerScore = document.getElementById('robot_score');
let userScore = document.getElementById('user_score');
let element = document.getElementById("message");
    if(computer == 'rock' && user == 'scissors'){
        message = 'Computer wins';
        computer_coins = computer_coins + 10;
        computerScore.textContent = 'Computer: '+computer_coins
    }
    if(computer == 'rock' && user == 'scissors'){
        message = 'Computer wins';
        computer_coins = computer_coins + 10;
        computerScore.textContent = 'Computer: '+computer_coins;
    }
    else if(computer == 'scissors' && user == 'paper'){
        message = 'Computer wins';
        computer_coins = computer_coins + 10;
        computerScore.textContent = 'Computer: '+computer_coins;
    }


    else if(computer == 'scissors' && user == 'rock'){
        message = 'User wins';
        user_coins = user_coins + 10;
        userScore.textContent = 'User:'+user_coins;

    }
    else if(computer == 'scissors' && user == 'rock'){
        message = 'User wins';
        user_coins = user_coins + 10;
        userScore.textContent = 'User:'+user_coins;
    }
    else if(computer == 'paper' && user == 'scissors'){
        message = 'User wins';
        user_coins = user_coins + 10;
        userScore.textContent = 'User:'+user_coins;
    }
    
    else{
        message = 'Its a draw';
        userScore.textContent = 'User:'+user_coins;
    }
if( parseInt(tries.textContent) == 0 ){
  element.textContent=message;
  element.classList.remove('invisiable');
  alert(element.textContent);
  resetGame();
}
}
function resetGame(){
    let element = document.getElementById('message');
    element.classList.add('invisiable');
   computerScore.textContent = 'Computer: '+0;
   userScore.textContent = 'User:'+0; 
   tries.textContent = 3;
}

let userChoice = ''
let computerChoice = ''
let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');


rockBtn.addEventListener('click',function(){
  tries.textContent= parseInt(tries.textContent)-1;
  userChoice = this.textContent;
  console.log(userChoice);
  computerChoice = getComputerChoice();
  playGame(computerChoice, userChoice);
  console.log(computer_coins, user_coins)
});

paperBtn.addEventListener('click',function(){
   tries.textContent= parseInt(tries.textContent)-1;
   userChoice = this.textContent;
   console.log(userChoice);
   computerChoice = getComputerChoice();
   playGame(computerChoice, userChoice);
   console.log(computer_coins, user_coins)
});

scissorsBtn.addEventListener('click',function(){
    tries.textContent= parseInt(tries.textContent)-1;
    userChoice = this.textContent;
    console.log(userChoice);
    computerChoice = getComputerChoice();
    playGame(computerChoice, userChoice);
    console.log(computer_coins, user_coins)
});




'use strict';

//Will return element that is shown in the  action upon clicking
document.querySelector('.check').addEventListener('click', clickAction);

//Will reset the entire application upon clicking the Again! button
document.querySelector('.again').addEventListener('click', clickAgainAction);

/**Creating a random number for the value match
 * Adding +1 in order to go through 1-20
 */
let secretNumber = Math.trunc(Math.random() * 20 + 1);

//State variable which holds the initial score and starting value of high score
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

function clickAgainAction() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}

//event function used for clicking
function clickAction() {
  //converting string to a number
  const guess = Number(document.querySelector('.guess').value);
  //going from false to true when there is no input
  if (!guess) {
    displayMessage(`No Number!`);
  }
  //When player wins
  else if (guess === secretNumber) {
    displayMessage(`Congrats you have won!`);
    document.querySelector('.highscore').textContent = score;
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = `#60b347`;
    document.querySelector('.number').style.width = `30rem`;

    //establishes new high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //ternary operator to establish response if guess is to high or low
      displayMessage(guess > secretNumber ? `Too high` : `Too low`);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(`You Lost`);
      document.querySelector('.score').textContent = 0;
    }
  }
}

/**
 * 
 * Before Refactoring
 * 
 * //guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Too high`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `You Lost`;
    }
  }
  //guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Too Low`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `You Lost`;
    }
  } else {
    document.querySelector('.message').textContent = `Incorrect input`;
  }
 */

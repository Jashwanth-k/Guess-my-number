'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const selectBody = document.querySelector('body');
const selectNumber = document.querySelector('.number');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayHighScore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    if (score == 0) displayMessage('💥 You lost the game!');

    // When player wins
  } else if (score >= 1 && guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    selectNumber.textContent = secretNumber;
    selectBody.style.backgroundColor = '#60b347';
    selectNumber.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      displayHighScore(highscore);
    }

    // When guess is incorrect
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
      if (score === 1) score--;
    }
  }
});

/*
    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayScore(score);
  displayMessage('Start guessing...');
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.guess').value = '';
  selectNumber.textContent = '?';
  selectBody.style.backgroundColor = '#222';
  selectNumber.style.width = '15rem';
});

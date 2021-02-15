'use strict';
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
function randomNumber(number) {
  document.querySelector('.number').textContent = number;
}
function myScore(score) {
  document.querySelector('.score').textContent = score;
}

//check button clicked
document.querySelector('.guess').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.querySelector('.check').click();
  }
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No number');
  } else if (guess === number) {
    displayMessage('🎉 Correct number!');
    randomNumber(number);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.guess').disabled = true;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > number) {
    if (score > 1) {
      displayMessage('🔥 Too high!');
      score = score - 1;
      myScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      myScore(0);
    }
  } else if (guess < number) {
    if (score > 1) {
      score = score - 1;
      myScore(score);
      displayMessage('🧊 Too low!');
    } else {
      displayMessage('💥 You lost the game!');
      myScore() = 0;
    }
  }
});

//Again button clicked
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  myScore(score);
  randomNumber('?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').disabled = false;
});

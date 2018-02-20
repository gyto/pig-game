let scores, roundScores, activePlayer;

init();

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function () {

  // 1. Random Button
  let dice = Math.floor(Math.random() * 6) + 1;
  // 2. Display Result
  let diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'images/dice-' + dice + '.png';

  // 3.Update the round score IF the rolled number was not a 1
  if (dice !== 1) {
    // add score
    roundScores += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScores;
  } else {
    // next player
    nextPlayer();
  }
});

document.querySelector('.btn-hold').addEventListener('click', function () {

  //add current score to global score
  scores[activePlayer] += roundScores;
  //update UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

  //check if player won the game

  if (scores[activePlayer] >= 10) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

  } else {
    // next player
    nextPlayer();
  }

});

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScores = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);


function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScores = 0;

  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.add('active');

}
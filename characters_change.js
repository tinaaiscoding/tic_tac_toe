const mario_1 = document.querySelector('.mario');
const mario_2 = document.querySelector('.mario-second-move');
const luigi_1 = document.querySelector('.luigi');
const luigi_2 = document.querySelector('.luigi-second-move');

function player1Turn() {
  mario_1.classList.add('invisible');
  mario_2.classList.remove('invisible');
  luigi_1.classList.remove('invisible');
  luigi_2.classList.add('invisible');

  if (ipadSize.matches) {
    playerTurnText.innerHTML = '<br>Player 1 turn'
    document.body.appendChild(playerTurnText);
  }
}

function player2Turn() {
  luigi_1.classList.add('invisible');
  luigi_2.classList.remove('invisible');
  mario_1.classList.remove('invisible');
  mario_2.classList.add('invisible');

  if (ipadSize.matches) {
    playerTurnText.innerHTML = '<br>Player 2 turn'
    document.body.appendChild(playerTurnText);
  }
}

function resetCharacters() {
  mario_1.classList.remove('invisible');
  mario_2.classList.add('invisible');
  luigi_1.classList.remove('invisible');
  luigi_2.classList.add('invisible');
  if (ipadSize.matches) {
    document.body.removeChild(playerTurnText);
  }
}
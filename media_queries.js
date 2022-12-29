const ipadSize = window.matchMedia('(max-width: 820px)','(max-height: 1180px)');

const playerTurnText = document.createElement('p');
const playerTokenText = document.createElement('p');

playerTurnText.classList.add('player-turn-text');

if (ipadSize.matches) {
  const player1TokenText = document.querySelector('.player1-token-text');
  const player2TokenText = document.querySelector('.player2-token-text');
  const header = document.querySelector('header');


 
  player1TokenText.classList.add('display-none');
  player2TokenText.classList.add('display-none');

  playerTokenText.textContent = 'PLAYER 1 - X | PLAYER 2 - O'

  playerTokenText.classList.add('player-token-text');
  header.after(playerTokenText)

}

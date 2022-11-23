var gridAllBoxes = document.querySelectorAll('div');
var crossedOutLine = document.createElement('h3');

function checkWinner(token) {
  if (
    gridAllBoxes[0].textContent === token &&
    gridAllBoxes[1].textContent === token &&
    gridAllBoxes[2].textContent === token
  ) {
      revealWinner(token);
  } else if (
    gridAllBoxes[3].textContent === token &&
    gridAllBoxes[4].textContent === token &&
    gridAllBoxes[5].textContent === token
  ) {
    revealWinner(token)
  } else if (
    gridAllBoxes[6].textContent === token &&
    gridAllBoxes[7].textContent === token &&
    gridAllBoxes[8].textContent === token
  ) {
    revealWinner(token)
  } else if (
    gridAllBoxes[0].textContent === token &&
    gridAllBoxes[3].textContent === token &&
    gridAllBoxes[6].textContent === token
  ) {
    revealWinner(token)
  } else if (
    gridAllBoxes[1].textContent === token &&
    gridAllBoxes[4].textContent === token &&
    gridAllBoxes[7].textContent === token
  ) {
    revealWinner(token)
  } else if (
    gridAllBoxes[2].textContent === token &&
    gridAllBoxes[5].textContent === token &&
    gridAllBoxes[8].textContent === token
  ) {
    revealWinner(token)
  } else if (
    gridAllBoxes[0].textContent === token &&
    gridAllBoxes[4].textContent === token &&
    gridAllBoxes[8].textContent === token
  ) {
    revealWinner(token)
  } else if (
    gridAllBoxes[6].textContent === token &&
    gridAllBoxes[4].textContent === token &&
    gridAllBoxes[2].textContent === token
  ) {
    revealWinner(token)
  } else {
    console.log('Waiting for winner...');
  }
}

function revealWinner(token) {
  if (token === 'X') {
    console.log('Player 1 wins!');
  } else if (token === 'O') {
    console.log('Player 2 wins!');
  }
}

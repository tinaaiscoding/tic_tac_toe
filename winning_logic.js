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
  var displayWinner = document.createElement('h2');

  displayWinner.classList.add('winner-txt');
  
  if (token === 'X') {
    displayWinner.textContent = 'Player 1 wins!'
    document.body.appendChild(displayWinner);
    gridBoxes.removeEventListener('click', clickEvent);
  } else if (token === 'O') {
    displayWinner.textContent = 'Player 2 wins!'
    document.body.appendChild(displayWinner);
    gridBoxes.removeEventListener('click', clickEvent);
  }
}

var gridAllBoxes = document.querySelectorAll('div');
var crossedOutLine = document.createElement('h3');

function checkWinner() {
  if (
    gridAllBoxes[0].textContent === 'token' &&
    gridAllBoxes[1].textContent === 'X' &&
    gridAllBoxes[2].textContent === 'X'
  ) {
    console.log('Winner');
  } else {
    console.log('Waiting for winner');
  }
}

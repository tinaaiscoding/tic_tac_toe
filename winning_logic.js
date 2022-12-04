const winnerTxt = document.querySelector('.winner-txt');
const winnerModal = document.querySelector('#winner-modal');

let totalScoresP1 = 0
let totalScoresP2 = 0

const revealWinner = (token) => {
  if (token === 'X') {
    winnerTxt.textContent = 'Player 1 wins!';
    winnerModal.classList.add('visible');
    

    gridAllBoxes.forEach((div) => {
      div.removeEventListener('click', clickEvent);
      div.classList.add('disabled');
    });

    backDropOn();
    resetCharacters()
    totalScoresP1++
    console.log(totalScoresP1);

  } else if (token === 'O') {
    winnerTxt.textContent = 'Player 2 wins!';
    winnerModal.classList.add('visible');

    gridAllBoxes.forEach((div) => {
      div.removeEventListener('click', clickEvent);
      div.classList.add('disabled');
    });

    backDropOn();
    resetCharacters()
    totalScoresP2++
    console.log(totalScoresP2);
  }
};

const crossOutLine = (boxNumber, line) => {
  const crossedOutLine = document.createElement('h3');
  crossedOutLine.classList.add(line);
  gridAllBoxes[boxNumber].appendChild(crossedOutLine);
};

const checkWinner = (token) => {
  if (
    gridAllBoxes[0].textContent === token &&
    gridAllBoxes[1].textContent === token &&
    gridAllBoxes[2].textContent === token
  ) {
    crossOutLine(0, 'vertical-line');
    revealWinner(token);
  } else if (
    gridAllBoxes[3].textContent === token &&
    gridAllBoxes[4].textContent === token &&
    gridAllBoxes[5].textContent === token
  ) {
    crossOutLine(3, 'vertical-line');
    revealWinner(token);
  } else if (
    gridAllBoxes[6].textContent === token &&
    gridAllBoxes[7].textContent === token &&
    gridAllBoxes[8].textContent === token
  ) {
    crossOutLine(6, 'vertical-line');
    revealWinner(token);
  } else if (
    gridAllBoxes[0].textContent === token &&
    gridAllBoxes[3].textContent === token &&
    gridAllBoxes[6].textContent === token
  ) {
    crossOutLine(0, 'hr-line');
    revealWinner(token);
  } else if (
    gridAllBoxes[1].textContent === token &&
    gridAllBoxes[4].textContent === token &&
    gridAllBoxes[7].textContent === token
  ) {
    crossOutLine(1, 'hr-line');
    revealWinner(token);
  } else if (
    gridAllBoxes[2].textContent === token &&
    gridAllBoxes[5].textContent === token &&
    gridAllBoxes[8].textContent === token
  ) {
    crossOutLine(2, 'hr-line');
    revealWinner(token);
  } else if (
    gridAllBoxes[0].textContent === token &&
    gridAllBoxes[4].textContent === token &&
    gridAllBoxes[8].textContent === token
  ) {
    crossOutLine(0, 'left-diagonal-line');
    revealWinner(token);
  } else if (
    gridAllBoxes[6].textContent === token &&
    gridAllBoxes[4].textContent === token &&
    gridAllBoxes[2].textContent === token
  ) {
    crossOutLine(0, 'right-diagonal-line');
    revealWinner(token);
  } else if (
    gridAllBoxes[0].childNodes.length === 2 &&
    gridAllBoxes[1].childNodes.length === 2 &&
    gridAllBoxes[2].childNodes.length === 2 &&
    gridAllBoxes[3].childNodes.length === 2 &&
    gridAllBoxes[4].childNodes.length === 2 &&
    gridAllBoxes[5].childNodes.length === 2 &&
    gridAllBoxes[6].childNodes.length === 2 &&
    gridAllBoxes[7].childNodes.length === 2 &&
    gridAllBoxes[8].childNodes.length === 2
  ) {
    winnerTxt.textContent = "It's a draw!";
    winnerModal.classList.add('visible');
  }
};


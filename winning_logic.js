const displayWinner = document.createElement('h2');
displayWinner.classList.add('winner-txt');

const revealWinner = (token) => {
  if (token === 'X') {
    displayWinner.textContent = 'Player 1 wins!';
    document.body.appendChild(displayWinner);

    gridAllBoxes.forEach((div) => {
      div.removeEventListener('click', clickEvent);
    });
  } else if (token === 'O') {
    displayWinner.textContent = 'Player 2 wins!';
    document.body.appendChild(displayWinner);

    gridAllBoxes.forEach((div) => {
      div.removeEventListener('click', clickEvent);
    });
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
    gridAllBoxes[0].childNodes.length === 1 &&
    gridAllBoxes[1].childNodes.length === 1 &&
    gridAllBoxes[2].childNodes.length === 1 &&
    gridAllBoxes[3].childNodes.length === 1 &&
    gridAllBoxes[4].childNodes.length === 1 &&
    gridAllBoxes[5].childNodes.length === 1 &&
    gridAllBoxes[6].childNodes.length === 1 &&
    gridAllBoxes[7].childNodes.length === 1 &&
    gridAllBoxes[8].childNodes.length === 1
  ) {
    displayWinner.textContent = 'Draw!';
    document.body.appendChild(displayWinner);
  }
};

const gridAllBoxes = document.querySelectorAll('.game-grid div');
const questionBlocks = document.querySelectorAll('.question-block');
const startGameBtn = document.querySelector('#players-name-modal .btn-success');

let clickCount = 0;

const clickEvent = (event) => {
  const eachBox = event.target;
  const newPara = document.createElement('p');

  if (clickCount % 2 === 0 && eachBox.tagName.toLowerCase() === 'img') {
    eachBox.classList.add('display-none');
    newPara.classList.add('x-token');
    newPara.textContent = 'X';
    eachBox.closest('div').appendChild(newPara);

    clickCount++;
    player2Turn();
    checkWinner('X');
  } else if (clickCount % 2 === 1 && eachBox.tagName.toLowerCase() === 'img') {
    eachBox.classList.add('display-none');
    newPara.classList.add('o-token');
    newPara.textContent = 'O';
    eachBox.closest('div').appendChild(newPara);
    clickCount++;
    player1Turn();
    checkWinner('O');
  }
};

questionBlocks.forEach((block) => {
  block.addEventListener('click', clickEvent);
});

startGameBtn.addEventListener('click', () => {
  const playersNameModal = document.querySelector('#players-name-modal');
  const p1Name = document.querySelector('.player1-name').value;
  const p2Name = document.querySelector('.player2-name').value;
  const p1Token = document.querySelector('.player1-token-text h2');
  const p2Token = document.querySelector('.player2-token-text h2');
  const scoreboardP1 = document.querySelector('.scoreboard-table p1');

  if (p1Name.length > 0 || p2Name.length > 0) {
    p1Token.textContent = `${p1Name} is`;
    p2Token.textContent = `${p2Name} is`;
  }

  if (ipadSize.matches) {
    playerTokenText.textContent = `${p1Name} - X | ${p2Name} - O`;
  }

  console.log();
  console.log();

  playersNameModal.classList.remove('visible');
});

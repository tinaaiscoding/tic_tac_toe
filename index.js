const gridAllBoxes = document.querySelectorAll('.game-grid div');
const questionBlocks = document.querySelectorAll('.question-block');

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

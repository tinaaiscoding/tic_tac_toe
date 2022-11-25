const gridAllBoxes = document.querySelectorAll('.game-grid div');

let clickCount = 0;

const clickEvent = (event) => {
  const eachBox = event.target;
  const newPara = document.createElement('p');

  if (clickCount % 2 === 0 && eachBox.tagName.toLowerCase() === 'div') {
    eachBox.style.backgroundImage = "url(./images/empty_block_2.png)"
    newPara.classList.add('x-token');
    newPara.textContent = 'X';
    eachBox.appendChild(newPara);
    clickCount++;
    player2Turn();
    checkWinner('X');
  } else if (clickCount % 2 === 1 && eachBox.tagName.toLowerCase() === 'div') {
    eachBox.style.backgroundImage = "url(./images/empty_block_2.png)"
    newPara.classList.add('o-token');
    newPara.textContent = 'O';
    eachBox.appendChild(newPara);
    clickCount++;
    player1Turn();
    checkWinner('O');
  }
};

gridAllBoxes.forEach((div) => {
  div.addEventListener('click', clickEvent);
});

const mario_1 = document.querySelector('.mario');
const mario_2 = document.querySelector('.mario-second-move');
const luigi_1 = document.querySelector('.luigi');
const luigi_2 = document.querySelector('.luigi-second-move');

function player1Turn() {
  mario_1.classList.add('invisible');
  mario_2.classList.remove('invisible');
  luigi_1.classList.remove('invisible');
  luigi_2.classList.add('invisible');
}

function player2Turn() {
  luigi_1.classList.add('invisible');
  luigi_2.classList.remove('invisible');
  mario_1.classList.remove('invisible');
  mario_2.classList.add('invisible');
}

function resetTurns() {
  mario_1.classList.remove('invisible');
  mario_2.classList.add('invisible');
  luigi_1.classList.remove('invisible');
  luigi_2.classList.add('invisible');
}
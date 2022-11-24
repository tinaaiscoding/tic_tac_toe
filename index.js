// const gridBoxes = document.querySelector('.game-grid');
const gridAllBoxes = document.querySelectorAll('div');

let clickCount = 0;

const clickEvent = (event) => {
  const eachBox = event.target;
  const newPara = document.createElement('p');

  if (clickCount % 2 === 0 && eachBox.tagName.toLowerCase() === 'div') {
    newPara.classList.add('x-token');
    newPara.textContent = 'X';
    eachBox.appendChild(newPara);
    clickCount++;
    checkWinner('X');
  } else if (clickCount % 2 === 1 && eachBox.tagName.toLowerCase() === 'div') {
    newPara.classList.add('o-token');
    newPara.textContent = 'O';
    eachBox.appendChild(newPara);
    clickCount++;
    checkWinner('O');
  }
};

gridAllBoxes.forEach((div) => {
  div.addEventListener('click', clickEvent);
});

var gridBoxes = document.querySelector('.game-grid');
var clickCount = 0;

var clickEvent = (event) => {
  var eachBox = event.target;
  var newPara = document.createElement('p');

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

gridBoxes.addEventListener('click', clickEvent);

var gridBoxes = document.querySelector('.game-grid');
var clickCount = 0;

var clickEvent = (event) => {
  var eachBox = event.target;


  if (clickCount % 2 === 0 && eachBox.tagName.toLowerCase() === 'div') {
    eachBox.textContent = 'X';
    clickCount++;
    checkWinner('X');
  } else if (clickCount % 2 === 1 && eachBox.tagName.toLowerCase() === 'div') {
    eachBox.textContent = 'O';
    clickCount++;
    checkWinner('O')
  }
};

gridBoxes.addEventListener('click', clickEvent);

var gridAllBoxes = document.querySelector('.game-grid');
var clickCount = 0;

var clickEvent = (event) => {
  var eachBox = event.target;
  var newPara = document.createElement('p');

  if (clickCount % 2 === 0 && eachBox.tagName.toLowerCase() === 'div') {
    newPara.classList.add('token');
    newPara.textContent = 'X';
    eachBox.appendChild(newPara);
    clickCount++;
  } else if (clickCount % 2 === 1 && eachBox.tagName.toLowerCase() === 'div') {
    newPara.classList.add('token');
    newPara.textContent = 'O';
    eachBox.appendChild(newPara);
    clickCount++;
  }
};

gridAllBoxes.addEventListener('click', clickEvent);

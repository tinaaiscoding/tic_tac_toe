var gridAllBoxes = document.querySelector('.game-grid');
var clickCount = 0;

gridAllBoxes.addEventListener('click', (event) => {
  var eachBox = event.target;
  var newPara = document.createElement('p');

  clickCount++;
  if (clickCount % 2 === 1) {
    newPara.classList.add('token');
    newPara.textContent = 'X';
    eachBox.appendChild(newPara);
  } else if (clickCount % 2 === 0) {
    newPara.classList.add('token');
    newPara.textContent = 'O';
    eachBox.appendChild(newPara);
  }
});

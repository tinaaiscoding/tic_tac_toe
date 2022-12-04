const playAgainBtn = document.querySelector('.btn-play-again');
// const gameGrid = document.querySelector('.game-grid');

playAgainBtn.addEventListener('click', () => {
  const pTags = document.querySelectorAll('.game-grid  p');
  const h3Tags = document.querySelectorAll('.game-grid  h3');

  clickCount = 0;

  pTags.forEach((pTag) => {
    pTag.remove();
  });

  h3Tags.forEach((h3tag) => {
    h3tag.remove();
  });

  questionBlocks.forEach((block) => {
    block.classList.remove('display-none');
  });

  gridAllBoxes.forEach((box) => {
    box.classList.remove('disabled');
  });

  // if (box.firstChild.tagName.toLowerCase() === 'h3') {

  // // console.log(box.firstChild.className )å;
  // }
});

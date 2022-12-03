const playAgainBtn = document.querySelector('.btn-play-again');
const pTags = document.querySelectorAll('p');

playAgainBtn.addEventListener('click', () => {

  questionBlocks.forEach((block) => {
    block.classList.remove("display-none")
  });

  pTags.forEach((tag) => {
    tag.remove();
  });
})
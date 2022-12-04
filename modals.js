// ---------------- BACKDROP  ----------------
const allModals = document.querySelectorAll('.modal');
const backdrop = document.getElementById('backdrop');

function backDropOn() {
  backdrop.classList.add('visible');
}

function backDropOff() {
  backdrop.classList.remove('visible');
}

function removeBackdropHandler() {
  allModals.forEach((modal) => {
    modal.classList.remove('visible');
  });
  backDropOff();
}

for (let i = 0; i < passiveBtn.length; i++) {
  passiveBtn[i].addEventListener('click', () => {
    removeBackdropHandler();
  });
}

backdrop.addEventListener('click', removeBackdropHandler);

// ---------------- WINNER MODAL ----------------
const playAgainBtn = document.querySelector('.btn-play-again');

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
});

// ---------------- SCOREBOARD MODAL ----------------

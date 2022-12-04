const menu = document.querySelector('nav h4');
const menuList = document.querySelector('.ham-menu ul');
const menuItems = document.querySelectorAll('.ham-menu li');
const passiveBtn = document.querySelectorAll('.btn-passive');

menu.addEventListener('click', function () {
  menuList.classList.remove('display-none');
});

menuList.addEventListener('mouseleave', function () {
  menuList.classList.add('display-none');
});

// ---------------- NEW GAME MENU ITEM ----------------
menuItems[0].addEventListener('click', () => {
  window.location.reload();
});

// ---------------- HOW TO PLAY MENU ITEM ----------------
menuItems[1].addEventListener('click', () => {
  const howToPlayModal = document.querySelector('#how-to-play-modal');

  howToPlayModal.classList.add('visible');
  backDropOn();
});

// ---------------- SCOREBOARD MENU ITEM ----------------
menuItems[2].addEventListener('click', () => {
  const scoreboardModal = document.querySelector('#scoreboard-modal');
  const player1Score = document.querySelector('.p1-score');
  const player2Score = document.querySelector('.p2-score');

  scoreboardModal.classList.add('visible');
  backDropOn();

  player1Score.textContent = (totalScoresP1)
  player2Score.textContent = (totalScoresP2)
});

// ---------------- CHANGE PLAYER MENU ITEM ----------------
menuItems[3].addEventListener('click', () => {});

// ---------------- CREDITS MENU ITEM ----------------
menuItems[4].addEventListener('click', () => {});

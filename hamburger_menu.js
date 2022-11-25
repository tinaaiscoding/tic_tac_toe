const menu = document.querySelector('nav h4');
const menuList = document.querySelector('.ham-menu ul');
const menuItems = document.querySelectorAll('.ham-menu li');
const allModals = document.querySelectorAll('.modal');
const backdrop = document.getElementById('backdrop');
const passiveBtn = document.querySelectorAll('.btn-passive')

function backDropOn() {
  backdrop.classList.add('visible');
}

function backDropOff() {
  backdrop.classList.remove('visible');
}

function removeBackdropHandler() {
  allModals.forEach(modal => {
    modal.classList.remove('visible')
  });
  backDropOff();
}


  for (let i = 0; i < passiveBtn.length; i++) {
    passiveBtn[i].addEventListener('click', () => {
      removeBackdropHandler();
    });
  }
 

backdrop.addEventListener('click', removeBackdropHandler);

menu.addEventListener('click', function () {
  menuList.classList.remove('display-none');
});

menuList.addEventListener('mouseleave', function () {
  menuList.classList.add('display-none');
});

menuItems[0].addEventListener('click', () => {
  window.location.reload();
});

menuItems[1].addEventListener('click', () => {
  const howToPlayModal = document.querySelector('#how-to-play-modal');

  howToPlayModal.classList.add('visible');
  backDropOn();
});

menuItems[2].addEventListener('click', () => {});

menuItems[3].addEventListener('click', () => {});

menuItems[4].addEventListener('click', () => {});
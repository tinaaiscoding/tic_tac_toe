const menuList = document.querySelector('.ham-menu ul');
const menuItems = document.querySelectorAll('.ham-menu li')
const menu = document.querySelector('nav h4');

menu.addEventListener('click', function() {
  menuList.classList.remove('display-none')
})

menuList.addEventListener('mouseleave', function() {
  menuList.classList.add('display-none');
})


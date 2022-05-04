const menuHamburguer = document.querySelector('.header-hamburguer')
const headerUl = document.querySelector('.header-ul')
const headerIcons = document.querySelector('.network-icons')

menuHamburguer.addEventListener('click', () => {
  menuHamburguer.classList.toggle('active')

  if (menuHamburguer.classList.contains('active')) {
    headerUl.classList.add('show')
    headerIcons.classList.add('show')
    return
  }

  headerUl.classList.remove('show')
  headerIcons.classList.remove('show')
})
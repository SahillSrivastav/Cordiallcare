const navbar = document.querySelector('nav')
const menu = navbar.querySelector('ul')
const openBtn = navbar.querySelector('.fa-bars')
const closeBtn = navbar.querySelector('.fa-times')

openBtn.onclick = () => menu.classList.toggle('menu')
closeBtn.onclick = () => menu.classList.toggle('menu')
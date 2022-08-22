const nav = document.querySelector('.header-nav')
const navBtn = document.querySelector('.header-nav-button')
const navBtnImg = document.querySelector('.header-nav-button__img')
const headerItem = document.querySelectorAll('.header-nav__item')

function burgerBtn() {
  if (nav.classList.toggle('open')) {
    navBtnImg.src = './img/icons/nav-close.svg'
  } else {
    navBtnImg.src = './img/icons/nav-open.svg'
  }
}

navBtn.onclick = () => {
  burgerBtn()
}
console.log(headerItem.length)

for (let i = 0; i < headerItem.length; i++) {
  headerItem[i].onclick = () => {
    burgerBtn()
  }
}

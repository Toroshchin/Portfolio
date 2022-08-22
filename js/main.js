const nav = document.querySelector('.header-nav')
const navBtn = document.querySelector('.header-nav-button')
const navBtnImg = document.querySelector('.header-nav-button__img')

navBtn.onclick = () => {
  if (nav.classList.toggle('open')) {
    navBtnImg.src = './img/icons/nav-close.svg'
  } else {
    navBtnImg.src = './img/icons/nav-open.svg'
  }
}

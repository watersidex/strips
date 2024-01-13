const rel = document.querySelector('.burMenu')
const nav = document.querySelector('.menu')

rel.onclick = function () {
    nav.classList.toggle('menuOpen')
    rel.classList.toggle('burOpen')
}
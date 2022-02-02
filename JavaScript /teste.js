

var frame = document.querySelector('.frame')
var btn =document.querySelector('button')
var header = document.querySelector('header')
var h1 = document.querySelector('h1')
btn.addEventListener('click', clicar)

function clicar() {
    h1.innerText = 'Hello, world!'
    h1.textContent += 'Hello, world!'
}
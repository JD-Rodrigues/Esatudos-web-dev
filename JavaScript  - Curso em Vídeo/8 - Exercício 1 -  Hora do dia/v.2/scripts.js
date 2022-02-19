
var body = document.querySelector('body')
var h1 = document.querySelector('h1')
var copy = document.querySelector('p')
var section = document.querySelector('section')
var msg = document.querySelector('.txt')
var divImg = document.querySelector('.img')
var img = document.querySelector('img')

var h = new Date()
var hora = h.getHours()


msg.innerHTML = `Agora são ${hora} horas.`

if (hora <5 || hora >=18) {
    body.style.backgroundColor = '#1f1d32'
    h1.style.color = 'white'
    copy.style.color = 'white'
    section.style.color = '#1f1d32'
    img.src = "assets/images/noite.jpeg"
} else if (hora <12) {
    body.style.backgroundColor = '#a1a9b6'
    img.src = 'assets/images/manhã.png'
} else {
    body.style.backgroundColor = '#fcf3b8'
    img.src = 'assets/images/tarde.jpg'
}



    

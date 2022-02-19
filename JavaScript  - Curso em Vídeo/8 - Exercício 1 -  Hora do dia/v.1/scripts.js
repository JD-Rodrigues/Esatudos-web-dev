
var body = document.querySelector('body')
var h1 = document.querySelector('h1')
var frame = document.querySelector('#frame')
var horario = document.querySelector('#hora')
var imagem = document.querySelector('#imagem')
var copy = document.querySelector('#copy')

var hour = new Date()
var hora = hour.getHours()



horario.innerHTML=`São ${hora} horas.`

if (hora < 5 || hora >18) {
    body.style.backgroundColor = '#1C1C1C'
    h1.style.color = 'white'
    copy.style.color = 'white'
    imagem.style.backgroundImage = "url('assets/images/noite.jpeg')"
} else if(hora < 12) {
    body.style.backgroundColor = 'SandyBrown'
    imagem.style.backgroundImage = "url('assets/images/tarde.jpg')"
} else {
    body.style.backgroundColor = 'gold'
    imagem.style.backgroundImage = "url('assets/images/manhã.png')"
} 



onload = function() {
    container.removeChild(controls)
    container.removeChild(controls2)
    video.volume = 0.2
}

let video = document.querySelector('video')
let controls = document.querySelector('#controls')
let controls2 = document.querySelector('#controls2')
let container = document.querySelector('#container')   
    
container.onmousemove = function() {
    container.appendChild(controls)
    container.appendChild(controls2)
}

container.onmouseleave = function() {
    setTimeout(disappear, 3000)
}

function disappear() {
    container.removeChild(controls)
    container.removeChild(controls2)
}


function comecar() {
    video.play()
    let play = document.querySelector('#play')
    play.src = "./assets/icons/pausa.png"
    play.setAttribute('onclick','pausar()')
    
}

function pausar() {
    video.pause()
    let play = document.querySelector('#play')
    play.src = "./assets/icons/play.png"
    play.setAttribute('onclick','comecar()')
}

function atrasar() {
    video.currentTime -= 15
}

function adiantar() {
    video.currentTime += 15
}

function repeat() {
    video.currentTime = 0
}

function aumentVel() {
    video.playbackRate += 0.2
}

function parar() {
    video.pause()
    video.currentTime = 0
    let play = document.querySelector('#play')
    play.src = "./assets/icons/play.png"
    play.setAttribute('onclick','comecar()')
}

function diminVel() {
    video.playbackRate -= 0.2
}

function menosVol() {
    video.volume -= 0.1
}

function maisVol() {
    video.volume += 0.1
}

function mudo() {
    if (video.muted === false) {
        video.muted = true
    } else {
        video.muted = false
    }
    
}
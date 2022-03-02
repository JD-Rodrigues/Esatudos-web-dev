onload = function() {
    audio.volume = 0.5
}

let audio = document.querySelector("audio")
let visor = document.querySelector('#divh1')
let h1 = document.createElement('h1')
let visorInfo = 0



function play() {
    audio.play()
    let play = document.querySelector('#play')
    play.src = "./assets/icons/pausa.png"
    play.setAttribute('onclick','pause()')
}

function pause() {
    audio.pause()
    let play = document.querySelector('#play')
    play.src = "./assets/icons/botao-play.png"
    play.setAttribute('onclick','play()')
}

function back() {
    audio.playbackRate -= 0.1
    visorInfo -= 1
    visor.appendChild(h1)
    h1.innerHTML = visorInfo
}

function front() {
    audio.playbackRate += 0.1
    visorInfo += 1
    visor.appendChild(h1)
    h1.innerHTML = visorInfo    
}

function minVol() {
    audio.volume -= 0.1
}

function mudo() {
    if (audio.muted === false) {
        audio.muted = true
    } else {
        audio.muted = false
    }
    
}

function maxVol() {
    audio.volume += 0.1
}

function hide() {
    setTimeout(remove,3000)
}

function remove() {
    visor.removeChild(h1)
}

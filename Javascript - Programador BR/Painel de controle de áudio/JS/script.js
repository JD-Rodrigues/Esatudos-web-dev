onload = function() {
    audio.volume = 0.5
}

let audio = document.querySelector("audio")

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

function slow() {
    audio.playbackRate -= 0.3
}

function fast() {
    audio.playbackRate += 0.3
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

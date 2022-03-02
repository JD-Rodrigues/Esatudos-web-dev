
let player = document.querySelector('#player')
let screen = document.querySelector('#screen')
//screen.addEventListener('click', play)

let positionX = 0
let positionY = 0

function movePlayerTo(x,y) {
    let posX = x + 'px'
    let posY = y + 'px'

    player.style.left = posX
    player.style.top = posY
}



setInterval(function() {
    if (positionX <= 475)
        movePlayerTo(positionX++,positionY++);
},20)







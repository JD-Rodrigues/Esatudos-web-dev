onload = function (){
    display=localStorage.getItem('cont')
    localStorage.clear()
}

let h1 = document.querySelector('h1')
let start = document.querySelector('#start')
let stopBtn = document.querySelector('#stop')

start.addEventListener('click', interval)
stopBtn.addEventListener('click', clearInt)

let display = 0
let set;

function insert() {
    h1.innerHTML += ' ' + display
    display += 1
    
}

function interval() {
    set = setInterval(insert,1000)
}


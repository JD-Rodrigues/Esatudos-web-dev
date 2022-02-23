onload = function() {
    h1.innerHTML=localStorage.getItem('c')    
}

let h1 = document.querySelector('h1')
let start = document.querySelector('#start')
let stopBtn = document.querySelector('#stop')

start.addEventListener('click', interval)
stopBtn.addEventListener('click', clearInt)

let display = 0
let set;
let h = h1.innerHTML


function insert() {
    h1.innerHTML += ' ' + display
    display += 1
    
}

function interval() {
    set = setInterval(insert,1000)
    start.setAttribute('disabled','true')
    
 
}

function clearInt() {
    clearInterval(set)
    localStorage.setItem('c',h1.innerHTML)
    start.removeAttribute('disabled')
}

//Limpa o localStorage

//localStorage.clear()

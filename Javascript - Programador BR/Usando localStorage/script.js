onload = function () {
    let display = localStorage.getItem('h')
    h1.innerHTML = display
    h2.innerHTML = display
}


let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let input = document.querySelector('input')

input.addEventListener('input',sync) 


function sync() {
    h1.innerHTML = input.value
    localStorage.setItem('h', h1.innerHTML)
    h2.innerHTML = localStorage.getItem('h')
}

/**/
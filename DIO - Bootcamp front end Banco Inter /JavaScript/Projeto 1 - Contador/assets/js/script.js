var counterDisplay = document.getElementById('counterDisplay');
var inc = document.querySelector('#inc')
var dec = document.querySelector('#dec')
var body = document.querySelector('body')

var counter = 0;

inc.addEventListener('click', enabled)
dec.addEventListener('click', disabled)


function decrement() {
    counter = counter - 1;
    counterDisplay.innerHTML = counter;
    if (counter==0) {
        dec.setAttribute('disabled','true')
    }
}

function increment() {
    counter = counter +1;
    counterDisplay.innerHTML = counter;
    if (counter>0) {
        dec.removeAttribute('disabled')
    } 
    if (counter >10) {
        counterDisplay.style.color='red'
    }
}   





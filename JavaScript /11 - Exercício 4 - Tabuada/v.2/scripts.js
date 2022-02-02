
var numero = document.querySelector('#numero')
var btn = document.querySelector('#btn')
var select = document.querySelector('select')
var op =document.querySelector('#op')

btn.addEventListener('click', clicar)
var lista =[]

function clicar() {
    if (numero.value.length==0) {
        alert('Insira um número!')
    } else {
        op.remove() 
        select.innerHTML=''       
        for (c=0;c<=10;c++) {
            var option = document.createElement('option')          
            option.innerHTML=`${numero.value} x ${c} = ${numero.value*c}`
            select.appendChild(option)        
        }
    }    
}
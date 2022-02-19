
var section = document.querySelector('section')
var i = document.querySelector('#inicio')
var f = document.querySelector('#fim')
var p = document.querySelector('#passo')
var contar = document.querySelector('#contar')


contar.addEventListener('click', conta)

function conta() {
    if (i.value.length==0||f.value.length==0||p.value.length==0) {
        alert('Faltam dados!')

    } else { 
        var inicio = Number(i.value)
        var final = Number(f.value)     
        var passo = Number(p.value)

        var res = document.createElement('p')
        res.setAttribute('id','res')
        section.appendChild(res)

        if (passo==0){
            alert('Não pode ter passo 0! O passo está sendo definido para 1.')
            passo=1  
        }
        if (inicio > final) {
            for (c=inicio;c>=final;c=c-passo)
            res.innerHTML+=`${c} &#128073;`
        } else {
            for(c=inicio;c<=final;c=c+passo) {
                res.innerHTML+=`${c} &#128073;`
            }                       
        }             
    }
        

    res.innerHTML += '&#9873;'
    
    

    
    
    
    

    


    

}
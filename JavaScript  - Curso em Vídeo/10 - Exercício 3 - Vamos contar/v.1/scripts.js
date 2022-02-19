
var section = document.querySelector('section')
var i = document.querySelector('#inicio')
var f = document.querySelector('#fim')
var p = document.querySelector('#passo')
var contar = document.querySelector('#contar')

contar.addEventListener('click', conta)

var contagem = []


function conta() {
    if (i.value.length==0) {
        alert('insira um número no campo INÍCIO!')
    }else {
        if (p.value==0){
            alert('Não pode ter passo 0! O passo está sendo definido para 1.')
            p.value=1
            var res = document.createElement('p')
            res.setAttribute('id','res')
            section.appendChild(res)
    
            c=Number(i.value)
            while (c<=Number(f.value)) {
                contagem.push(`${c} `)
                c=c+Number(p.value)
            }
            contagemString=String(contagem)
    
            mostra=contagemString.replace(/,/g,'&#128073;')
        } else {
            var res = document.createElement('p')
            res.setAttribute('id','res')
            section.appendChild(res)
    
            c=Number(i.value)
            while (c<=Number(f.value)) {
                contagem.push(`${c} `)
                c=c+Number(p.value)
            }
            contagemString=String(contagem)
    
            mostra=contagemString.replace(/,/g,'&#128073;')
        }    
    }
        

    res.innerHTML = `${mostra} &#128073; &#9873;`
    
    

    
    
    
    

    


    

}
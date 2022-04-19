let qsel = (e)=> document.querySelector(e)
let qall = (e)=> document.querySelectorAll(e)

qall('.aba').forEach((i)=>i.addEventListener('click', highlight))

qsel('.aba-vermelho').addEventListener('click', showRed)

qsel('.aba-azul').addEventListener('click', showBlue)

function highlight(e) {
    qall('.aba').forEach((i)=>i.classList.remove('highlight-tab'))
    e.target.classList.add('highlight-tab')
}

function showRed() {
    qall('.area').forEach((i)=>{
        i.classList.remove('selected')
        i.style.opacity=0
        setTimeout(()=>i.style.opacity=1,300)
    })
    qsel('.vermelho').classList.add('selected')
    
    
}

function showBlue() {
    qall('.area').forEach((i)=>{
        i.classList.remove('selected')
        i.style.opacity=0
        setTimeout(()=>i.style.opacity=1,300)
    })
    qsel('.azul').classList.add('selected')
    
    
}



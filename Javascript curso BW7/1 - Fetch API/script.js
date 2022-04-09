
let button= document.querySelector('button')

button.addEventListener('click', loadPosts)


//Utilizando async/await

async function loadPosts() {
    
        let req = await fetch('https://jsonplaceholder.typicode.com/posts')
        let json = await req.json()
        
        montarBlog(json)   
        
}


    

// Utilizando os métodos then/
/*function loadPosts() {
    let div = document.querySelector('div')
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(json=>montarBlog(json))
        .catch(()=>div.innerHTML='Ops! Ocorreu um erro!')
}*/

function montarBlog(lista) {
    let div = document.querySelector('div')
    let html = ''
    for (p of lista) {
        html+=`<h3>${p.title}</h3>`
        html+=`<p> ${p.body} </p>`
        html+=`<hr/>`
    }
    div.innerHTML=html
}




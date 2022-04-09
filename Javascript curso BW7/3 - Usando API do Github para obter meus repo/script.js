//Insere os nomes dos meus repositórios na página web
async function github() {
    const username = "jd-rodrigues"
    const url = 'https://api.github.com/users'

    let req = await fetch(`${url}/${username}/repos`)
    let json = await req.json()
    loadRepos(json)
}

function loadRepos(lista) {
    let body = document.querySelector('body')
    let html = ""
    for (r of lista) {
        html += `<p>${r.name}</p>`
    }
    body.innerHTML=html
}

github()


var submit = document.querySelector('#btn')

submit.addEventListener('click', clicar)

function clicar() {
    var data = new Date()
    var ano = data.getFullYear()

    var res = document.querySelector('#res')
    var nasc = document.querySelector('#ano')
    if (nasc.value.lenght==0||nasc.value> ano) {
        alert('Erro! Preencha os dados corretamente')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano-nasc.value
        var img = document.createElement('img')

        var genero=''
        if (sexo[0].checked) {
            genero = 'homem'
            if (idade <10) {
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade <21) {
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade <50) {
                img.setAttribute('src','foto-adulto-m.png')
            } else {
                img.setAttribute('src','foto-adulto-m.png')
            }
        } else { 
            genero = 'mulher'
           if (idade <10) {
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade <21) {
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade <50) {
                img.setAttribute('src','foto-adulto-f.png')
            } else {
                img.setAttribute('src','foto-adulto-f.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.` 
        res.appendChild(img)  
    }

}
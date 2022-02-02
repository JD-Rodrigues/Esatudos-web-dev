
var nasc = document.querySelector('#ano')
var s = document.getElementsByName('sexo')
var submit = document.querySelector('#btn')
var res = document.querySelector('.res')
var section = document.querySelector('section')
var imagem = document.querySelector('img')
var y = new Date()
var ano = y.getFullYear()

submit.addEventListener('click', clicar)

function clicar() {  
    var idade = ano-nasc.value    
    var sexo =''
    for(c=0;c<2;c++) {
        if (s[c].checked) {
            var sexo = s[c].id                       
        }
    }

    if (sexo=='masc') {
        sexo='homem'
        if (idade <=2) {
            imagem.src = 'assets/images/bebê.jpg'
        } else if (idade <=12) {
            imagem.src = 'assets/images/menino.png'
        } else if (idade <18) {
            imagem.src = 'assets/images/adolescenteH.jpg'
        } else if (idade<=29) {
            imagem.src = 'assets/images/h20.jpg'
        } else if (idade<=39) {
            imagem.src = 'assets/images/h30.jpeg'
        } else if (idade<=49) {
            imagem.src = 'assets/images/h40.jpg'
        } else if (idade <=59) {
            imagem.src = 'assets/images/h50.jpg'
        } else if (idade <=69) {
            imagem.src = 'assets/images/h60.jpg'
        } else if (idade <=79) {
            imagem.src = 'assets/images/h70.jpg'
        }
                
    }else if (sexo=='fem') {
        sexo='mulher'
        if (idade <=2) {
            imagem.src = 'assets/images/bebê.jpg'
        } else if (idade <=12) {
            imagem.src = 'assets/images/menina.jpg'
        } else if (idade <18) {
            imagem.src = 'assets/images/adolescenteM.jpg'
        } else if (idade<=29) {
            imagem.src = 'assets/images/m20.jpg'
        } else if (idade<=39) {
            imagem.src = 'assets/images/m30.jpeg'
        } else if (idade<=49) {
            imagem.src = 'assets/images/m40.jpg'
        } else if (idade <=59) {
            imagem.src = 'assets/images/m50.jpg'
        } else if (idade <=69) {
            imagem.src = 'assets/images/m60.jpg'
        } else if (idade <=79) {
            imagem.src = 'assets/images/m70.jpg'
        }
                
    }

    res.innerHTML = `Detectamos ${sexo} de ${idade} anos.`
    
    section.appendChild('imagem')
    
}
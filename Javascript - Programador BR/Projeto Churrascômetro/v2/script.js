


document.querySelector('#calc').addEventListener('click', function(e) {
    e.preventDefault()
    insert()
})
    
function insert() { 
    let adultos = document.querySelector('#adultos')
    let crianças = document.querySelector('#crianças')
    let horas = document.querySelector('#horas')
    let res = document.querySelector('#res')

    let resCarne = document.createElement('p')
    let resCerveja = document.createElement('p')

    let resBebida = document.createElement('p')

    let numAdultos = Number(adultos.value)
    let numCrianças = Number(crianças.value)
    let numHoras = Number(horas.value)  

    let carneAdulto = 0
    let carneCriança = 0
    let cerveja = 0
    let refriAdulto = 0
    let refriCriança = 0


    if (numHoras >= 6) {
        carneAdulto = 650
        carneCriança = 325
        cerveja = 2000
        refriAdulto = 1500
        refriCriança = 750
    }else {
        carneAdulto = 400
        carneCriança = 200
        cerveja = 1200
        refriAdulto = 1000
        refriCriança = 500
    }

    let totalCarneAdulto = carneAdulto * numAdultos
    let totalCarneCriança = carneCriança * numCrianças
    let totalRefriAdulto = refriAdulto * numAdultos
    let totalRefriCriança = refriCriança * numCrianças

    let totalCarneGeral = (totalCarneAdulto + totalCarneCriança) / 1000
    let totalCerveja = cerveja * numAdultos / 350
    let totalBebida = (totalRefriAdulto + totalRefriCriança) / 2000

    resCarne.innerHTML = `${totalCarneGeral} kg de carne`
    resCerveja.innerHTML = `${totalCerveja.toFixed(0)} latas de cerveja`
    resBebida.innerHTML = `${totalBebida} garrafas de 2L de bebida`

    res.appendChild(resCarne)
    res.appendChild(resCerveja)
    res.appendChild(resBebida)
}



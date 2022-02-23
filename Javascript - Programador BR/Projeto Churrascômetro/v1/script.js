


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

    let totalCarneAdulto = 500 * numAdultos * numHoras
    let totalCarneCriança = 200 * numCrianças * numHoras

    let totalCarneGeral = (totalCarneAdulto + totalCarneCriança) / 1000
    let totalCerveja = 2 * numAdultos * numHoras
    let totalBebida = 250 * (numAdultos+numCrianças) * numHoras / 2000

    resCarne.innerHTML = `${totalCarneGeral} kg de carne`
    resCerveja.innerHTML = `${totalCerveja} latas de cerveja`
    resBebida.innerHTML = `${totalBebida} garrafas de 2L de bebida`

    res.appendChild(resCarne)
    res.appendChild(resCerveja)
    res.appendChild(resBebida)
}



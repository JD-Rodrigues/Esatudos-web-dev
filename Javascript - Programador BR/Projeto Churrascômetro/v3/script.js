    
document.querySelector('#calc').onclick = function(e) {
    e.preventDefault()
    let crianças = document.querySelector('#crianças')
    let horas = document.querySelector('#horas')
    let res = document.querySelector('#res')

    let numAdultos = Number(adultos.value)
    let numCrianças = Number(crianças.value)
    let numHoras = Number(horas.value)  

    let totalCarneGeral = carnePP(numHoras)*numAdultos + (carnePP(numHoras)/2*numCrianças)
    let totalCerveja = cervejaPP(numHoras) * numAdultos
    let totalBebida = refriPP(numHoras) * numAdultos + (refriPP(numHoras) / 2 * numCrianças)

    res.innerHTML = `<p>${totalCarneGeral/1000} kg de carne</p>`
    res.innerHTML += `<p>${(totalCerveja/350).toFixed(0)} latas de cerveja</p>`
    res.innerHTML += `<p>${totalBebida/2000} garrafas de 2L de bebida</p>`
}

function carnePP(horas) {
    if (horas >= 6) {
        return 650
    } else {
        return 400
    }
}

function cervejaPP(horas) {
    if (horas >= 6) {
        return 2000
    } else {
        return 1200
    }
}

function refriPP(horas) {
    if (horas >= 6) {
        return 1500
    } else {
        return 1000
    }
}


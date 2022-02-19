var area = document.querySelector('div')

area.addEventListener('click', clickRed)
area.addEventListener('mouseenter', greenArea)
area.addEventListener('mouseout', greyArea)

function clickRed() {
	area.style.backgroundColor = 'red'
}

function greenArea() {
	area.style.backgroundColor = 'green'
}

function greyArea() {
	area.style.backgroundColor = 'grey'
}



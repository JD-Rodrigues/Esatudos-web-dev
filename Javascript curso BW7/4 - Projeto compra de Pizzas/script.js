onload = function() {
    const qsel = (path) => this.document.querySelector(path)

    const qselAll = (path) => this.document.querySelectorAll(path)   

    for (item in pizzaJson) {
        const pizzaItem = qsel('.models .pizza-item').cloneNode(true)

        pizzaItem.setAttribute('data-key', item)
        pizzaItem.querySelector('img').src=pizzaJson[item].img
        pizzaItem.querySelector('.pizza-item--price').innerHTML=`R$${pizzaJson[item].price.toFixed(2)}`
        pizzaItem.querySelector('.pizza-item--name').innerHTML=pizzaJson[item].name
        pizzaItem.querySelector('.pizza-item--desc').innerHTML=pizzaJson[item].description
        
        let products = qsel('main .pizza-area')
        products.append(pizzaItem)

        pizzaItem.querySelector('a').addEventListener('click', openModal) 
    }    
}

const qsel = (path) => this.document.querySelector(path)
let modal = qsel('.pizzaWindowArea')
let modalQt = parseInt(modal.querySelector('.pizzaInfo--qt').innerHTML)
let modalKey = 0
let cart = []

function openModal(e){
    e.preventDefault()
    modal.style.opacity=0
    modal.style.display='flex'
    setTimeout(()=>{modal.style.opacity='1'},100)  

    let key = e.target.closest('.pizza-item').getAttribute('data-key')
    modalKey=key

    modal.querySelector('img').src=e.target.closest('img').src

    modal.querySelector('.pizzaInfo h1').innerHTML=e.target.closest('.pizza-item').querySelector('.pizza-item--name').innerHTML

    modal.querySelector('.pizzaInfo--desc').innerHTML=e.target.closest('.pizza-item').querySelector('.pizza-item--desc').innerHTML

    modal.querySelector('.pizzaInfo--actualPrice').innerHTML=e.target.closest('.pizza-item').querySelector('.pizza-item--price').innerHTML

    modal.querySelector('.pizzaInfo--qtmenos').addEventListener('click',ModalQtMenos)

    modal.querySelector('.pizzaInfo--qtmais').addEventListener('click',modalQtMais)   

    modal.querySelector('.pizzaInfo--addButton').addEventListener('click',adToCart) 

    qsel('.pizzaInfo--cancelButton').addEventListener('click', closeModal)
    qsel('.pizzaInfo--cancelMobileButton').addEventListener('click', closeModal)

    let modalSizes = document.querySelectorAll('.pizzaInfo--size')

    for (size in modalSizes) {
        modalSizes[size].querySelector('span').innerHTML=pizzaJson[key].sizes[size]

        modalSizes[size].classList.remove('selected')

        if (modalSizes[size].getAttribute('data-key')==2) {
            modalSizes[size].classList.add('selected')
        }

        modalSizes[size].addEventListener('click',highlightSize)
        modalSizes[size].querySelector('span').addEventListener('click',highlightSize)
    }
}

function highlightSize(e) {
    modal.querySelectorAll('.pizzaInfo--size').forEach(element => element.classList.remove('selected'))

    e.target.closest('.pizzaInfo--size').classList.add('selected')
}

function ModalQtMenos(){
    if(modalQt>1) {
        modalQt--
        modal.querySelector('.pizzaInfo--qt').innerHTML=modalQt
    }
}

function modalQtMais(){
    modalQt++
    modal.querySelector('.pizzaInfo--qt').innerHTML=modalQt
}

function closeModal() {
    let modal = qsel('.pizzaWindowArea')
    modal.style.opacity=0
    setTimeout(()=>{
        modal.style.display='none'
    }, 150)
}

function adToCart() {
    let size = modal.querySelector('.selected').getAttribute('data-key')
    let identifier = `${modalKey}${size}`

    let repeatedItemIdex = cart.findIndex((prod)=>prod.identifier==identifier)

    if (repeatedItemIdex>-1) {
        cart[repeatedItemIdex].qt+=modalQt
    } else {
        cart.push({
            identifier,
            size,
            id:pizzaJson[modalKey].id,
            qt:modalQt
        })
    }
    
    

    console.log(cart)
   
    closeModal()
    showCart()
}

function showCart() {
    let show = qsel('aside').classList.contains('show')

    if (show==false) {
        qsel('aside').classList.add('show')
    }
}
onload = function() {
    const qsel = (path) => this.document.querySelector(path)

    for (item in pizzaJson) {
        const pizzaItem = qsel('.models .pizza-item').cloneNode(true)

        pizzaItem.setAttribute('data-key', item)
        pizzaItem.querySelector('img').src=pizzaJson[item].img
        pizzaItem.querySelector('.pizza-item--price').innerHTML=`A partir de <strong>R$ ${pizzaJson[item].price[0].toFixed(2)}</strong>`
        pizzaItem.querySelector('.pizza-item--name').innerHTML=pizzaJson[item].name
        pizzaItem.querySelector('.pizza-item--desc').innerHTML=pizzaJson[item].description
        
        let products = qsel('main .pizza-area')
        products.append(pizzaItem)

        pizzaItem.querySelector('a').addEventListener('click', openModal) 
         
    }    
    
}

const qsel = (path) => this.document.querySelector(path)
const qselAll = (path) => this.document.querySelectorAll(path)   
let modal = qsel('.pizzaWindowArea')
let modalQt = parseInt(modal.querySelector('.pizzaInfo--qt').innerHTML)
let modalPrice = Number(modal.querySelector('.pizzaInfo--actualPrice').innerHTML)
let modalKey = 0
let cart = []



function openModal(e){
    e.preventDefault()
    modal.style.opacity=0
    modal.style.display='flex'
    setTimeout(()=>{modal.style.opacity='1'},100)  

    let key = e.target.closest('.pizza-item').getAttribute('data-key')
    modalKey=key

    modalQt = 1
    modal.querySelector('.pizzaInfo--qt').innerHTML = 1

    modal.querySelector('img').src=e.target.closest('img').src

    modal.querySelector('.pizzaInfo h1').innerHTML=e.target.closest('.pizza-item').querySelector('.pizza-item--name').innerHTML

    modal.querySelector('.pizzaInfo--desc').innerHTML=e.target.closest('.pizza-item').querySelector('.pizza-item--desc').innerHTML

    modal.querySelector('.pizzaInfo--actualPrice').innerHTML= pizzaJson[modalKey].price[2].toFixed(2)

    modal.querySelector('.pizzaInfo--qtmenos').addEventListener('click',ModalQtMenos)

    modal.querySelector('.pizzaInfo--qtmais').addEventListener('click',modalQtMais)   

    modal.querySelector('.pizzaInfo--addButton').addEventListener('click',adToCart) 

    qsel('.pizzaInfo--cancelButton').addEventListener('click', closeModal)
    qsel('.pizzaInfo--cancelMobileButton').addEventListener('click', closeModal)

    qsel('.menu-openner').addEventListener('click',()=>{
        if (cart.length>0) {
            showCart()
        }
    })

    let modalSizes = document.querySelectorAll('.pizzaInfo--size')

    for (size in modalSizes) {
        modalSizes[size].classList.remove('selected')

        if (modalSizes[size].getAttribute('data-key')==2) {
            modalSizes[size].classList.add('selected')
        }

        modalSizes[size].addEventListener('click',highlightSize)
    }
}

function highlightSize(e) {
    e.stopPropagation()

    modal.querySelectorAll('.pizzaInfo--size').forEach(element => element.classList.remove('selected'))

    e.target.closest('.pizzaInfo--size').classList.add('selected')
    modalPrice = pizzaJson[modalKey].price[e.target.getAttribute('data-key')]

    modal.querySelector('.pizzaInfo--actualPrice').innerHTML=modalPrice

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
    let size = parseInt(modal.querySelector('.selected').getAttribute('data-key'))
    let identifier = `${modalKey}${size}`

    let repeatedItemIdex = cart.findIndex((prod)=>prod.identifier==identifier)

    if (repeatedItemIdex>-1) {
        cart[repeatedItemIdex].qt+=modalQt
    } else {
        cart.push({
            identifier,
            size,
            id:pizzaJson[modalKey].id,
            qt:modalQt,
            price:modal.querySelector('.pizzaInfo--actualPrice').innerHTML,
            img:pizzaJson[modalKey].img,
            name:pizzaJson[modalKey].name
        })
    }   
    closeModal()
    showCart()    
    updateCart()
    
}

 function updateCart() {
    qsel('.cart').innerHTML = ""
    qsel('.menu-openner span').innerHTML = cart.length
    let subtotal = 0
    let desconto = 0
    let total = 0
    

    cart.map((product, index)=>{
        
        let cartItem = qsel('.cart--item').cloneNode(true)

        cartItem.querySelector('img').src = product.img

        let sizeLetter;

        switch (product.size) {
            case 0:
                sizeLetter = 'P';
                break;
            case 1:
                sizeLetter = 'M';
                break;
            case 2:
                sizeLetter = 'G';
                break;
            default: 
                sizeLetter = 'O'           
                break;
        }

        cartItem.querySelector('.cart--item-nome').innerHTML = `${product.name} (${sizeLetter})`

        cartItem.querySelector('.cart--item--qt').innerHTML = product.qt  
      
        let CartQt = parseInt(cartItem.querySelector('.cart--item--qt').innerHTML)

        let UpDownCartQt = CartQt
        
        cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', function () {
            if (UpDownCartQt>1) {
                UpDownCartQt--
                product.qt=UpDownCartQt
                updateCart()
            }else {
                product.qt=0
                cart.splice(index, 1)
                updateCart() 
                if (cart.length==0){
                    hideCart()  
                } 
                           
            }
        })
        
        cartItem.querySelector('.cart--item-qtmais').addEventListener('click', function () {
            UpDownCartQt++
            product.qt=UpDownCartQt
            updateCart()
            
        })
       

        subtotal+=product.price*product.qt
        desconto = (subtotal/100*10).toFixed(2)
        total = (subtotal-desconto).toFixed(2)

        qsel('.menu-closer').addEventListener('click', hideCart)
        
        qselAll('.subtotal span')[1].innerHTML = `R$ ${subtotal.toFixed(2)}`
        qselAll('.desconto span')[1].innerHTML = desconto
        qselAll('.total span')[1].innerHTML = total

        qsel('.cart').append(cartItem)  

        
            

        
    })
    qsel('.back-to-shopping').addEventListener('click', hideThanks)
        
    qsel('.cart--finalizar').addEventListener('click', showThanks)   

       
     
}

function showCart() {
    qsel('aside').classList.add('show')
    qsel('aside').style.left=0
}

function hideCart() {
    qsel('aside').classList.remove('show')
    qsel('aside').style.left=`${100}vw`    
     
}

function showThanks() {
    updateCart()
    qsel('.thanks-screen').style.display='flex'
    setTimeout(()=>qsel('.thanks-screen').style.opacity=1,200)
    
    
    

}

function hideThanks() {
    hideCart()
    cart.splice(0,cart.length)
    setTimeout(()=>qsel('.thanks-screen').style.display='none',300)
    qsel('.thanks-screen').style.opacity=0
    
    
}
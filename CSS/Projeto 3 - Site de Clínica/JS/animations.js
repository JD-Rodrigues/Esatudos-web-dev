
window.addEventListener('load', slideToRight)

window.addEventListener('scroll', slideToRight)

function slideToRight(){
    let card1 = document.querySelector('.card1')
    let card2 = document.querySelector('.card2')
    let card3 = document.querySelector('.card3')
    let fcard1 = document.querySelector('.footer-card1')
    let fcard2 = document.querySelector('.footer-card2')
    let fcard3 = document.querySelector('.footer-card3')
    let categoryDivisor = document.querySelectorAll('.divisor-category')

    if (card1.getBoundingClientRect().top<=570) {
        card1.style.opacity='1.0'
        card2.style.left="0"
        card3.style.left="0"
    }    

    if (fcard1.getBoundingClientRect().top<=580) {
        fcard1.style.opacity='1.0'
        fcard2.style.left="0"
        fcard3.style.left="0"
    }

    for (i in categoryDivisor) {
        if (categoryDivisor[i].getBoundingClientRect().top<=580) {
            categoryDivisor[i].style.width='50px'
        }
    }    
}



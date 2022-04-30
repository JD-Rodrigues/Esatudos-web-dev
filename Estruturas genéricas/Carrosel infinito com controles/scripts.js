


let divImg = document.querySelectorAll('.img')

let control = document.querySelectorAll('.control')


control[0].addEventListener('click', slidePrev)
control[1].addEventListener('click', slideNext)

let slideDisplayed = 0

function slideNext() {
    
    if(slideDisplayed==divImg.length-1) {
        slideDisplayed=0
    } else {
        slideDisplayed++
    }
    
    divImg.forEach((i)=>{
        i.classList.remove('displayed')
        divImg[slideDisplayed].classList.add('displayed')
    })

}

function slidePrev() {
    if (slideDisplayed==0){
        slideDisplayed=divImg.length-1
    } else {
        slideDisplayed--
    }

    divImg.forEach((i)=>{
        i.classList.remove('displayed')
        divImg[slideDisplayed].classList.add('displayed')
    })
}

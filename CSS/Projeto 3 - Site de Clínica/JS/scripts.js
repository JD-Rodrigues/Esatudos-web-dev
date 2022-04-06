
let postsList = document.querySelector('.latest-posts-list-footer')
let tweetsList = document.querySelector('.latest-tweets-list-footer')


let count = 0

function move(element, c) {
    let pos = c + "px"
    element.style.top=pos
}

function slideDown(el) {
    if (el === postsList) {
        let interval = setInterval(() => {
            if (count>=-70) {
                move(el, count--)
            }
            else {
                clearInterval(interval)
            }
        },5)
    } else {
        let interval = setInterval(() => {
            if (count>=-95) {
                move(el, count--)
            }
            else {
                clearInterval(interval)
            }
        },2)
    }    
}

function slideUp(el) {
    let interval = setInterval(() => {
        if (count<=0) {
            move(el, count++)
        }
        else {
            clearInterval(interval)
        }
    },5)
}





var task = document.querySelector('#task')
var add = document.querySelector('#add')
var list = document.querySelector('#out')

var c = 0

add.addEventListener('click', adicionar)
list.addEventListener('click', check)

function adicionar(){
    c+=1
    var item = task.value
    var checkItem = document.createElement('input')
    checkItem.setAttribute('type','checkbox')
    checkItem.setAttribute('id',`task${c}`)
    var labelItem = document.createElement('label')
    labelItem.setAttribute('id',`task${c}`)
    labelItem.innerHTML=`${item}<br>`
    list.appendChild(checkItem)
    list.appendChild(labelItem)
    
    
    
    
    task.value=''
    task.focus()
}

function check(){
    
}
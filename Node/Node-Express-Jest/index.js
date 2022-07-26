

// const display = document.querySelector('.display')
// const nameInput = document.querySelector('input')
// const send = document.querySelector('button')

// // onload = ()=>{
// //     render()
// // }

// async function postName(name){
//     try {
//             const post =  await fetch('http://localhost:2001/users', {
//             method:"POST",
//             headers:{"Content-type": "application/json; charset=UTF-8"
//             },
//             body:{
//                 name:JSON.stringify(name)           }
//         })  
//     } catch (error) {
//         console.warn(error)
//     }
// }

// function render(){
//     display.innerHTML=''
//     database.map(name=>display.innerHTML+=name+", ")
// }

// send.addEventListener('click', async()=>{
//     const nome = nameInput.value
//     const response = await postName(nome)
//     console.log(response)
// }) 

// export {render}
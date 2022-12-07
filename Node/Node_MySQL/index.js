

const { default: axios } = require("axios");


let name;
let email;
let selectedId;

const fillTable = async () => {
  const membersTable = document.querySelector('.members__table') 
  const contactList = await readAll()
  contactList.reverse()
  contactList.forEach(contact => {
    membersTable.innerHTML += drawContactItem(contact)
  })
}




window.addEventListener('load', async ()=> {
   await fillTable()   
  document.querySelectorAll('.delete').forEach(btn=> btn.addEventListener('click', ()=> {
    selectedId = btn.getAttribute('data-id')
    openModal('#delete__dialog')
  }
  )) 
}) 

const openModal = (id) => {
  document.querySelector(`${id}`).showModal()
}

const closeModal = () => {
  document.querySelector('dialog').close()
}


// window.addEventListener('load', openModal)


const addNewContact = () => {
  create(name, email)
}

document.querySelector('.input__name').addEventListener('change', (e)=> name = e.target.value )

document.querySelector('.input__email').addEventListener('change', (e)=> email = e.target.value )

document.querySelector('.add__member__btn').addEventListener('click', ()=> {
  openModal('#add__dialog')  
})

document.querySelector('.cancel__button').addEventListener('click', (e)=> {
  e.preventDefault()
  closeModal()
})

document.querySelector('#add__dialog form').addEventListener('submit', ()=> {
  addNewContact()
  fillTable()
  closeModal()
})

document.querySelector('#delete__dialog .submit__button').addEventListener('click', (e)=> {
  e.preventDefault()
  remove(Number(selectedId))
  fillTable()
  closeModal()
  
})

document.querySelector('#update__dialog .submit__button').addEventListener('click', (e)=> {
  e.preventDefault()
  addNewContact()
  closeModal()
})

const create = (name, email) => {
  axios.post('http://localhost:3002/', {
  name: name,
  email: email
  }, { headers: {'content-type': 'application/json'} }
  )
.then(response => console.log(response))
.catch(function (error) { 
  console.error(error);
});

}

const readAll = () => {
  return new Promise((resolve, reject)=> {
    axios.get('http://localhost:3002/')
    .then(data => resolve(data.data))
    .catch(err => {
      console.log(err)
    }) 
  })
}

const update = (id, newValues)=> {
  axios.put('http://localhost:3002/', {
    id: id,
    newValues: newValues
  }).then(console.log).catch(err => console.log(err))
}




const remove = (id) => {
  try {
    axios.delete('http://localhost:3002/',{
    data: {id: id}
  }).then(data => console.log(`Status: ${data.status}`)).catch(err => console.log(err))
  } catch (err) {
    console.log(err)
  } 
}

const drawContactItem = (contact)=> {
  
  return item = `
  <li class="member">
    <button data-id="${contact.id}" class="delete">Remove</button>
    <button data-id="${contact.id}" class="edit">Edit</button>
    <div class="name">${contact.name}</div>
    <div class="email">${contact.email}</div>
  </li>`
}

document.querySelectorAll('.delete').forEach(btn=> {
  console.log(btn)
})



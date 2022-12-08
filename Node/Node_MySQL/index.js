

const axios = require("axios");


let name;
let email;
let selectedId;

const fillTable = async () => {
  const membersTable = document.querySelector('.members__table')
  membersTable.innerHTML=''
  const contactList = await readAll()
  contactList.reverse()
  await contactList.forEach(contact => {
    membersTable.innerHTML += drawContactItem(contact)
  })

  document.querySelectorAll('.edit').forEach(btn=> btn.addEventListener('click', ()=> {    

    selectedId = btn.getAttribute('data-id')

    document.querySelector('#update__dialog .input__name').value = btn.closest('li').querySelector('.name').innerHTML

    document.querySelector('#update__dialog .input__email').value = btn.closest('li').querySelector('.email').innerHTML

    openModal('#update__dialog')

  }

  ))  

  document.querySelectorAll('.delete').forEach(btn=> btn.addEventListener('click', ()=> {   

    selectedId = btn.getAttribute('data-id')

    openModal('#delete__dialog')       
  }

  ))   

}

window.addEventListener('load', async ()=> {
  await fillTable()   
}) 

const openModal = (id) => {
  document.querySelector(`${id}`).showModal()
}

const closeModal = (id) => {
  document.querySelector(`${id}`).close()
}

const formReset = (id)=> {
  document.querySelector(`${id} form`).reset()
}

const addNewContact = async () => {
  await create(name, email)
}

document.querySelector('#add__dialog .input__name').addEventListener('change', (e)=> name = e.target.value )

document.querySelector('#add__dialog .input__email').addEventListener('change', (e)=> email = e.target.value )

document.querySelector('#update__dialog .input__name').addEventListener('change', (e)=> name = e.target.value )

document.querySelector('#update__dialog .input__email').addEventListener('change', (e)=> email = e.target.value )

document.querySelector('.add__member__btn').addEventListener('click', ()=> {
  openModal('#add__dialog')  
})

document.querySelector('#add__dialog .cancel__button').addEventListener('click', (e)=> {
  e.preventDefault()
  closeModal('#add__dialog')
  formReset('#add__dialog')
})

document.querySelector('#add__dialog form').addEventListener('submit', async (e)=> {
  e.preventDefault()
  await addNewContact()
  await fillTable()
  closeModal('#add__dialog')
  formReset('#add__dialog')
})

document.querySelector('#delete__dialog .cancel__button').addEventListener('click', (e)=> {
  e.preventDefault()
  closeModal('#delete__dialog')
})

document.querySelector('#delete__dialog .submit__button').addEventListener('click', async (e)=> {
  e.preventDefault()
  await remove(selectedId)
  await fillTable()
  closeModal('#delete__dialog')
})

document.querySelector('#update__dialog .cancel__button').addEventListener('click', (e)=> {
  e.preventDefault()
  formReset('#update__dialog')
  closeModal('#update__dialog')
  
})

document.querySelector('#update__dialog form').addEventListener('submit', async (e)=> {
  e.preventDefault()
  await update(selectedId, {name: name, email: email})
  await fillTable()
  formReset('#update__dialog')
  closeModal('#update__dialog')  
})



const create = async (name, email) => {
  await axios.post('http://localhost:3002/', {
  name: name,
  email: email
  }, { headers: {'content-type': 'application/json'} }
  )

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

const update = async (id, newValues)=> {
  await axios.put('http://localhost:3002/', {
    id: id,
    newValues: newValues
  })
}




const remove = async (id) => {
  await axios.delete(`http://localhost:3002/${id}`)
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

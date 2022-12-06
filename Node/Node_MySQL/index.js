

const { default: axios } = require("axios")

const fillTable = async () => {
  const membersTable = document.querySelector('.members__table') 
  const contactList = await readAll()
  contactList.forEach(contact => {
    membersTable.innerHTML += drawContactItem(contact)
  })
}

window.addEventListener('load', fillTable)

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
    <div class="name">${contact.name}</div>
    <div class="email">${contact.email}</div>
  </li>`
}




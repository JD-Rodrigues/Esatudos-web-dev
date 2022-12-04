const axios = require("axios").default;


const create = () => {
  axios.post('http://localhost:3002/', {
  'name': 'Santos',
  'email': 'contact@santos.com'
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
    .then(data => resolve(data))
    .catch(err => {
      console.log(err)
    }) 
  })
}

// const update = ()=> {

// }

const remove = (id) => {
  axios.delete('http://localhost:3002/', {
    data: {
      id:id
    }
  }).then(console.log).catch(err => console.log(err))
}




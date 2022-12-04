const mariadb = require('mariadb/callback');


const conn = mariadb.createConnection({
  host: "localhost",
  user: "root", 
  password: "ephesius212",
  database: "people2",
  pipelining:true,
});

async function addContact(name, email) {
  conn.beginTransaction(error=> {
    if(error) {
      console.log(`Error in starting a transaction: ${error}`)
    } else {
      console.log('Conexion started!')
    }
  });

  try {
    conn.query('INSERT INTO people2.contacts3(name, email) VALUES (?,?)', [name, email], (err, result)=> {
      if(err) throw err;
      console.log(result)
    })
    
  } catch(err) {
    console.log(err);
    conn.rollback(error => {
      if (error) {
         console.log("SQL error in rolling back a transaction: ", error);
      }
   });
  }

  conn.commit(err => {
    if(err) console.log(err);
  })

}

function readAllContacts() {
  conn.beginTransaction(error=> {
    if(error) {
      console.log(`Error in starting a transaction: ${error}`)
    } else {
      console.log('Conexion started!')
    }
  });

  return new Promise ((resolve, reject) => {
    try {
      conn.query(
        "SELECT * FROM people2.contacts3",
        (err,res,meta) => {
           if (err) {
              console.error("Error querying data: ", err);
           } else {
              resolve(res)
           }
        }
     );
    } catch(error) {
      if (error) console.log(error);
      conn.rollback(error => {
        if (error) {
           console.log("SQL error in rolling back a transaction: ", error);
        }
     });
    }
  
    conn.commit(err => {
      if(err) console.log(err);
    })
  })
  
}

function updateContact(id, newValues) {
  conn.beginTransaction(error=> {
    if(error) {
      console.log(`Error in starting a transaction: ${error}`)
    } else {
      console.log('Conexion started!')
    }
  });

  try {
    const keys = Object.keys(newValues)
    let columns;
    keys.forEach((key,index)=> {
      switch (index) {
        case 0:
          columns = `${key} = ?,`;
          break;
        case keys.length - 1:
          columns += `${key} = ?`;
          break;
        default:
          columns += `${key} = ?,`
      }
    })

    conn.query(`UPDATE contacts3 SET ${columns} WHERE id = ${id}`)
  } catch(error) {
    if (error) console.log(error);
    conn.rollback(error => {
      if (error) {
         console.log("SQL error in rolling back a transaction: ", error);
      }
   });
  }

  conn.commit(err => {
    if(err) console.log(err);
  })
}

function deleteContact(id) {
  conn.beginTransaction(error=> {
    if(error) {
      console.log(`Error in starting a transaction: ${error}`)
    } else {
      console.log('Conexion started!')
    }
  });

  try {
    conn.query('DELETE FROM people2.contacts3 WHERE id = ?', [id], (err, res, meta) => {
      if(err) {
        console.log(err)
      } else {
        console.log(res)
        console.log(meta)
        
      }
    })
  } catch(error) {
    if (error) console.log(error);
    conn.rollback(error => {
      if (error) {
         console.log("SQL error in rolling back a transaction: ", error);
      }
   });
  }

  conn.commit(err => {
    if(err) console.log(err);
  })
  
}

// const obj = {nome:"Agripino", idade:76, cidade: "Santa Cruz", altura:171, criança: false}

// const keys = Object.keys(obj)
// let columns;
// keys.forEach((key,index)=> {
//   switch (index) {
//     case 0:
//       columns = `${key} = ?,`;
//       break;
//     case keys.length - 1:
//       columns += `${key} = ?`;
//       break;
//     default:
//       columns += `${key} = ?,`
//   }
// })

// console.log(Object.values(obj))


// deleteContact(7)
// addContact("Zé", "ze@contact.com")
// readAllContacts().then(console.log)
updateContact(29, {name:"Cota", email: "contato@cota.com"})

module.exports = {readAllContacts, addContact, deleteContact}
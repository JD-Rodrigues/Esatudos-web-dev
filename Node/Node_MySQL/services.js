const mariadb = require('mariadb/callback');


const conn = mariadb.createConnection({
  host: "localhost",
  user: "root", 
  password: "ephesius212",
  database: "people2",
  pipelining:true,
});

function addContact(name, email) {
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

function readAllContacts() {
  conn.beginTransaction(error=> {
    if(error) {
      console.log(`Error in starting a transaction: ${error}`)
    } else {
      console.log('Conexion started!')
    }
  });

  try {
    conn.query(
      "SELECT * FROM people2.contacts3",
      (err,res,meta) => {
         if (err) {
            console.error("Error querying data: ", err);
         } else {
            console.log(res);
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
  
}
// deleteContact(7)
// addContact("Jefferson", "jefferson@contact.com")
readAllContacts()

// module.exports = addContact
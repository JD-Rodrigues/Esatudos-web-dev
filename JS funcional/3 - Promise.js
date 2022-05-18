
const fs = require('fs')

const ipsum = new Promise((resolve, reject)=>{
    fs.readFile('fileToRead.txt', (_, data)=>{
        if (data.toString()!=123){
            resolve(data.toString())
        } else {
            reject('Errrou!')
        }
    })
        
}).then(console.log)

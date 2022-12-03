const express = require('express');
const cors = require('cors');

const app = express()

var corsOptions = {
  origin: 'http://localhost:8081'
};

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.get('/', (req, res)=> {
  res.json({message:'Welcome to back-end!'})
})

app.listen(3000, ()=>console.log('Server ON'))

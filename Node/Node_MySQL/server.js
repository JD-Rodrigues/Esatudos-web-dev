const express = require('express');
const cors = require('cors');
const readAllContacts = require('./services');
const routes = require('./routes')


const app = express()


var corsOptions = {
  origin: '*'
};

app.use(cors({origin: '*'}))
routes(app)
app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.listen(3002, ()=>console.log('Server ON'))

module.exports = app
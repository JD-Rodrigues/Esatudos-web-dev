
const readAllContacts = require('./services').readAllContacts
const addContact = require('./services').addContact
const express = require('express')
const { deleteContact, updateContact } = require('./services')




module.exports = app => {
  app.use(express.json())
  const router = require('express').Router()

  router.get('/', async (req, res)=> {
    const data = await readAllContacts()
    res.json(data)
  })


  router.post('/', (req, res)=> {    
    console.dir(req.body)
    addContact(req.body.name, req.body.email)
    
    res.status(201).send({requisition: req.body})  
     
  })

  router.put('/', (req, res) => {
    updateContact(req.body.id, req.body.newValues)
    res.status(201).send({requisition: req.body})  
  })

  router.delete('/:id', (req, res) => {
    deleteContact(req.params.id)
    res.status(201).send({requisition: req.body.data})  
  })

  app.use(router)
}


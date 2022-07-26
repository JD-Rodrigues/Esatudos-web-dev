import { Router } from 'express'
import { Request, Response } from 'express'
import {update } from './db.js'
import { database } from './db.js'

const router = Router()



router.get('/aboutus', function (req:Request,res:Response):void{
    res.write(
        "Vamo que vamo!"
    )
    res.end()
})

router.get('/mission', (req,res)=>{
    res.write(
        "Our mission is save the world."
    )
    res.end()
})

router.get('/contact', (req,res)=>{
    res.write(
        "75 9 9866 2804"
    )
    res.end()
})

router.post('/users', (req,res)=>{
    update(req.body.name)
    res.status(200).json(database)
    res.end()
})

export {router}
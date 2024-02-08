const express = require('express')
const People = require('../models/people')

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        
        res.json(await People.find({}))

    }catch(error){
        res.status(400).json(error)
        console.log(error, "use dem logs")
    }
})

router.post('/', async (req, res) => {
    try{
        res.json(await People.create(req.body))
    }catch(error) {
        console.log('Read this error:', error)
    }
})

router.delete('/:id', async (req, res) => {
    try{
        res.json(await People.findByIdAndDelete(req.params.id))
    }catch(error){
        console.log('Read this error', error)
    }
})

router.get('/:id', async (req, res) => {
    try{
        res.json(await People.findById(req.params.id))
    }catch(error){
        console.log('Read this error', error)
    }
})

router.put('/:id', async (req, res) => {
    try{
        res.json(await People.findByIdAndUpdate(req.params.id, req.body))
    }catch(error){
        console.log('Read this error', error)
    }
})



module.exports = router;
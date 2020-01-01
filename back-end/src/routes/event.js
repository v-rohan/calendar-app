let EventModel = require('../models/event.model')
let express = require('express')
let router = express.Router()
let mongoose = require('mongoose')
// Create a new Customer

router.post('/event', (req, res) => {
    //req.body
    if(!req.body){
        return res.status(400).send('Request body is missing')
    }
            let event  = {
            title: req.body.title,
            start: req.body.start,
            end: req.body.end,
            repeat: req.body.repeat,
            categoryId: req.body.categoryId
    
        }
        let model = new EventModel(event)
        model.save()
            .then(doc => {
            if(!doc || doc.length === 0){
                 return res.status(500).send(doc)
             }
             EventModel.find()
             .then(doc1 => {
                 res.send(doc1)
             })
             .catch(err=>{
                 res.status(500).json(err)
             })
            
                })

            .catch(err => {
                res.status(500).json(err)
            })
}) 


router.get('/event', (req,res) =>{
        EventModel.find()
        .then(doc => {
            res.send(doc)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
})



//DELETE
router.delete('/event', (req, res) =>{

    if(!req.query.Id){
        return res.status(400).send('Missing URL parameter : Id')
    }

    EventModel.findOneAndRemove({
        _id: mongoose.Types.ObjectId(req.query.Id)
    })
    .then(doc => {
        
        EventModel.find().then(doc1 => {
            res.send(doc1)
        })
        .catch(err=>{
            res.status(500).json(err)
        })
    })
    .catch(err=>{
        res.status(500).json(err)
    })
})



module.exports = router
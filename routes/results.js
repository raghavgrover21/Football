'use strict'
const app = require('express')
const router = app.Router()
const Result = require('../models/Result')



router.get('/',(req,res)=>{

    Result.findAll().then((results)=>{
        res.send(JSON.stringify (results))
    })

})
//post not needed auto calculate the result and show as a table 
//Team logo could be added
router.post ('/add',(req,res)=>{

})

module.exports = router
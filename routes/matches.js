const app = require('express')
const Match = require('../models/Match')
const router = app.Router()

//get all the data for all the matches so far held
router.get('/',(req,res)=>{
    Match.findAll().then((matches)=>{
        res.send(matches)
    }).catch((err)=>{console.log(err)})
})
router.post('/add',(req,res)=>{
    let Team_Name = req.body.Team_Name
    let Team_Vs = req.body.Team_Vs
    let Points_Earned = req.body.Points_Earned

    Match.create({Team_Name,Team_Vs,Points_Earned})
    .then(()=>
    {
        console.log(done)
        res.send('match updated')
    }).catch((err)=>console.log(err))
})

module.exports= router 


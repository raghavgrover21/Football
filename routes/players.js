'use strict'
let Player = require('../models/Player')
let app = require('express')
let router = app.Router()


router.get('/',(req,res)=>{
    Player.findAll().then((players)=>{
        console.log(players)
        res.send(JSON.stringify(players))
    }).catch((err)=>{console.log(err)})
})
router.delete('/delete',(req,res)=>{
    Player.destroy({
        where :{
            Player_Name : req.body.Player_Name
        
        }
    }).then(()=>{
        res.send('deleted')
    })
    
})

router.post('/add',(req,res)=>{
    let Player_Name = req.body.Player_Name
    // let Player_No = req.body.Player_No
    let Player_Age = req.body.Player_Age
    let Jersey_No = req.body.Jersey_No
    let Position = req.body.Position
    let Goals = req.body.Goals
    let Red_Card = req.body.Red_card
    let Yellow_Card = req.body.Yellow_card
    let Team = req.body.Team

    Player.create({Player_Name, Player_Age, Jersey_No, Position,Goals,Red_Card,Yellow_Card, Team })
    .then(()=>{res.send('completed ma brodar')})
    .catch((err)=>console.log(err))
    
})

module.exports = router
// Player_No
// Player_Age
// Jersey_No
// Position
// Goals
// Red_card
// Yellow_card
// Team
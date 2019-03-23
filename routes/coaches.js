'use strict'
const app = require('express')
const router = app.Router()
const Coach = require('../models/Coach')
const Team = require('../models/Team')
const Sequelize = require('sequelize')

//GET
router.get('/',(req,res)=>{
    Coach.findAll().then((coaches)=>{
        console.log(coaches)
        res.send(JSON.stringify(coaches))
    }).catch((err)=>{console.log(err)})
})

//POST
router.post('/add',(req,res)=>{
    let Name= req.body.Name 
    let Age= req.body.Age
    let Team= req.body.Team
    // let Coach_Id = req.body.Coach_Id
    
    Coach.create({Name, Age, Team,Coach_Id})
    res.send('completed')
    
})

// router.get('/one',(req,res)=>{
//     Coach.findAll({
//         include:[{
//             model : Team,
//             where:{Coach_Id : Sequelize.col('Team.Coach_Id') }
//         }]
//     }).then((coaches)=>{
//         res.send(JSON.stringify(coaches))
//     }).catch((err)=>{console.log("kya kar rho...error a rho"+err)})
       
// })



module.exports = router

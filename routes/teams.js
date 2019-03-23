 'use strict'
// let  bodyParser = require('body-parser')
let Team = require('../models/Team')
let app = require('express')
let router = app.Router()
const Sequelize = require('sequelize')
let Coach = require('../models/Coach')
// app.use(bodyParser.urlencoded({extended: true}))
//in order to handle post request express requires another middleware - body-parser
// let bodyParser= require('body-parser')

//to get data
router.get('/',(req,res)=>{
    Team.findAll().then((teams)=>{
         
        // res.send('teams',{teams})
        {console.log(teams)}
       res.send(JSON.stringify (teams))
    }).catch((err)=>{console.log(err)})
})
router.get('/one',(req,res)=>{
    Team.findAll({
        // where:{Coach_Id : Sequelize.col('Coach.Coach_Id') },
        include:[{
            model : Coach,
            // where : {Coach_Id: Sequelize.col('Coach.Coach_Id')},
           required: true
            // required: true

        }]
    }).then((teams)=>{
        res.send(JSON.stringify(teams))
    }).catch((err)=>{console.log("kya kar rho...error a rho"+err)})
       
})

//post data 
router.post('/add',(req,res)=>{
    let Team_Name = req.body.Team_Name
    let Team_Position = req.body.Team_Position
    let Total_Goals = req.body.Total_Goals
    let Total_Fouls = req.body.Total_Fouls
    let Total_Matches_Played = req.body.Total_Matches_Played
    let Wins = req.body.Wins
    let Draws = req.body.Draws
    let Loses = req.body.Loses
    let Coach_Id = req.body.Coach_Id
    let Coach_Name = req.body.Coach_Name
    let Team_Captain = req.body.Team_Captain
    let Goal_conceded = req.body.Goal_conceded
    console.log(req.body)
    Team.create({Team_Name: Team_Name , Team_Position :Team_Position,Total_Goals: Total_Goals, 
        Total_Fouls: Total_Fouls, Total_Matches_Played: Total_Matches_Played, Wins: Wins, Draws:Draws, Loses :Loses,
    Coach_Id: Coach_Id, Coach_Name: Coach_Name, Team_Captain : Team_Captain, Goal_Conceded : Goal_conceded })
    res.send('completed')
})
module.exports = router
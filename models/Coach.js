const Sequelize = require('sequelize')
const db = require('../config/database')
const Team = require('./Team')

const Coach = db.define('Coach', {
Name: {type : Sequelize.TEXT},
Age : {type: Sequelize.INTEGER},
Team_Name: {type: Sequelize.TEXT},
Coach_Id: {type: Sequelize.INTEGER, primaryKey: true},
// Team_Name: {type: Sequelize.TEXT}
},{timestamps: false})

//  Coach.hasOne(Team , { foreignKey:'Team_Name' })


module.exports= Coach
// Name
// Age
// Team
// Matches_won
// Matches_Lost
// Matches_Draw
// Total_matches_Played
// Coach_Id
// Team_Name(tournament): won,lost,draw

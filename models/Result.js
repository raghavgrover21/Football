const sequelize = require('sequelize')
const db = require('../config/database')

const Result = db.define('results',{
    Team_Name : { type: sequelize.TEXT},
    Rating : {type: sequelize.INTEGER},
    Team_Position :{type: sequelize.INTEGER}
},{timestamps:false})
// Team_Name(foreign key)
// Match_Played ->team table
// Wins -> team table
// Draw -> team table
// Draw -> team table
// Lose -> team table
// Goal_Awarded -> team table
// Goal_Conceded -> team table
// Goal_Difference-> team table
// Rating -> to be calculated here
// Team_Position -> to be calculated here
module.exports = Result
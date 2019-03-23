const Sequelize = require('sequelize')
const db = require('../config/database')
const  Coach = require('./Coach')
const Team = db.define('Team',{
    Team_Name: { type: Sequelize.TEXT, primaryKey: true},
    Team_Position: { type: Sequelize.INTEGER},
    Total_Goals: { type: Sequelize.INTEGER},
    Total_Fouls: { type: Sequelize.INTEGER},
    Total_Matches_Played: { type: Sequelize.INTEGER},
    Wins: { type: Sequelize.INTEGER},
    Draws: { type: Sequelize.INTEGER},
    Loses: { type: Sequelize.INTEGER},
    Coach_Id: { type: Sequelize.INTEGER},
    //  Coach_Name: { type: Sequelize.TEXT},
    Team_Captain: { type: Sequelize.TEXT},
    Goal_Conceded: { type: Sequelize.INTEGER},
    },
    //dont forget to set the time stamp off else error ->createdAt column not found 
{timestamps: false})

 Team.belongsTo(Coach,{foreignKey:'Coach_Id',sourceKey:'Coach_Id'})
//  Team.belongsTo(Team, { as: 'TableA', foreignKey: 'someID', targetKey: 'notTableAID' } )
module.exports = Team
// Team_Name
// Team_Position
// Total_Goals
// Total_Fouls
// Total_Matches_Played
// Wins
// Draws
// Loses
// coach_Id
// Coach_Name
// Team_Captain
// Goal_Conceded

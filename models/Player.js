const sequelize = require('sequelize')
const db = require('../config/database')

const Player = db.define('Player',{
    Player_Name: {type: sequelize.TEXT},
    Player_No: {type: sequelize.INTEGER,primaryKey: true},
    Player_Age: {type: sequelize.INTEGER, validate:{min:18 }},
    Jersey_No: {type: sequelize.INTEGER},
    Position:{type: sequelize.INTEGER, validate:{isNumeric:{arg : false, msg:'tumnse na hoga...kisi aur ko dedo ye kaam'}}},
    Goals: {type: sequelize.INTEGER},
    Red_Card: {type: sequelize.INTEGER},
    Yellow_Card: {type: sequelize.INTEGER},
    Team: {type: sequelize.TEXT}

}

,{ timestamps : false })


module.exports = Player

// Player_No
// Player_Age
// Jersey_No
// Position
// Goals
// Red_card
// Yellow_card
// Team

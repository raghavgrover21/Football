const sequelize = require('sequelize')
const db = require('../config/database')

const Match = db.define('Match',{
        Team_Name : {type: sequelize.TEXT},
        Team_Vs : {type: sequelize.TEXT},
        Points_Earned : {type : sequelize.INTEGER, validate:{min:0 ,max:3,isNumeric:{argv:true,msg:'please enter a valid number within the range of 0-3'}}}

    },{timestamps:false})

module.exports= Match

//ORM
let sequelize = require('sequelize')

//Body parser is used to retrieve data from req.body
let bodyParser = require('body-parser')


//calling the file needed to execute the file needed
//Database
let db = require('./config/database')

//Framework
let express = require('express')
//intialize express

let app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// let routes = require('./routes/teams')
//set the process env
let port = process.env.PORT || 5000

db.authenticate().then(()=>{
    console.log("yo bro database is on")
}).catch(()=>{
    console.log("not working db")
})

app.listen(port, (err)=>{
    if(err){console.log(err)}
    else
    console.log("working fine with the connection")
})

//TEAM
app.use('/teams', require('./routes/teams'))

//PLAYER
app.use('/players', require('./routes/players'))

//MATCHES
app.use('/matches',require('./routes/matches'))


//COACH
app.use('/coaches',require('./routes/coaches'))

//RESULTS
app.use('/results',require('./routes/results'))
//test obj
var xyz = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}'; 

app.get('/',(req,res)=>{
    res.send('blah blah main'+ JSON.stringify(xyz))
})
// app.use('/players',require('./routes/players'));

const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

var db
var appearance
var talents
var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }

const _port = 3000;
const cors = require('cors')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}), cors(corsOptions))

MongoClient.connect('mongodb://localhost:27017/', { useUnifiedTopology: true }, (err, database) => {
  db = database.db('npcgenerator');
  appearance = db.collection('appearance');
  talents = db.collection('talents')
  races = db.collection('races')
  gender = db.collection('gender')
  femaleName = db.collection('femaleNames')
  maleName = db.collection('maleNames')
  highAbility = db.collection('highAbility')
  lowAbility = db.collection('lowAbility')
})

app.get('/appearance', (req, res) => {
    appearance.find({}).toArray(function(err, result) {
        res.send(result)
    })
})

app.get('/talents', (req, res) => {
    talents.find({}).toArray(function(err, result) {
        res.send(result)
    })
})

app.get('/races', (req, res) => {
    races.find({}).toArray(function(err, result) {
        res.send(result)
    })
})

app.get('/gender', (req, res) => {
    gender.find({}).toArray(function(err, result) {
        res.send(result)
    })
})

app.get('/maleNames', (req, res) => {
    maleName.find({}).toArray(function(err, result) {
        res.send(result)
    })
})

app.get('/femaleNames', (req, res) => {
    femaleName.find({}).toArray(function(err, result) {
        res.send(result)
    })
})

app.get('/highAbility', (req, res) => {
    highAbility.find({}).toArray(function(err, result) {
        res.send(result)
    })
})

app.get('/lowAbility', (req, res) => {
    lowAbility.find({}).toArray(function(err, result) {
        res.send(result)
    })
})

app.listen(_port, function () {
    console.log("Node Express server for " + app.name + " listening on http://localhost:" + _port)
});
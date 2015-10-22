//we're gonna need express
var express = require('express');
var router = express.Router();

//reference the database
var mongoose = require('mongoose');
var Players = require('../models/Players');

//show the players we already have
router.get('/', function(req, res, next) {
    //use the model to access and format the data
    Players.find(function er, players) {
        if(er) {
            console.log(er);
            res.end(er);
        }
        else {
            //nothing went wrong, we have players
            res.render('players/index', {
                title: 'Players',
                players: players});
        }//end if
    });//end find
});//end router

//publicize
module.exports = router;
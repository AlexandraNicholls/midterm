//set up to connect to express
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

//get the routes working
var routes = require('./routes/index');

var app = express();

//connect to mongodb!
mongoose.connect('mongodb://localhost/test');

//check the connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error: '));
//when the database is connected, show this message
db.once('open', function(callback) {
  console.log('Connection achieved!');
});

//add the views
app.set('views', path.join(_dirname, 'views'));
app.set('view engine', 'ejs');

//get the app working
app.use('/', routes);

//make the page useable everywhere
module.exports = app;
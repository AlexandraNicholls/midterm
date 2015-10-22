//connect express so we can run it
var express = require('express');
var app = express();

//check the server is working
app.use('/', function(req, res) {
   res.send('Hello World');
});
app.listen(3000);

//show the results
console.log('Server running at http://localhost:3000/');

//make this file public
module.exports = app;

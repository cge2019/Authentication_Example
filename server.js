//server.js 

//modules -----------------------------
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

//configuration ---------------------------------

//config files ----------------------
var db = require('./config/db');


//set our port
var port = process.env.PORT || 8080;

//connect to our mongoDB database
//(uncomment after adding credentials in config)
mongoose.connect(db.url);
 
 //get all data/stuff of the body (post) parameters
 //parse application/json
 app.use(bodyParser.json());

 //parse application/vnd.api+json as json
 app.use(bodyParser.json({type: 'application/vnd.api+json'}));

 //parse application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({extended: true}));

 //override with teh X-HTTP-METHOD-OVERRIDE header in the request to simulate DELETE
 app.use(methodOverride('X-HTTP-Method-Override'));

 //set the static file location /public/img will be /img for users
 app.use(express.static(__dirname + '/public'));

 //routes ------------------------------------
 require('./app/routes')(app); //configures our routes

 //start app ---------------------------------------

 //startup our app at http:localhost:8080
 app.listen(port);

 console.log('Suh dude, welcome to port ' + port);

 //expose app
 exports = module.exports = app;
//routes.js

//can use the app folder to create more models, controlerls, routes, and anything backend (node) specific to your app
//seperate duties of parts of app
//define different roues for the NODE bakcend

var Nerd = require('./models/nerd');

	module.exports = function(app){
		//server routes ------------------

		//handle things like api calls----

		//authentication routues----------

		//sample api route
		app.get('/api/nerds', function(req,res){
			Nerd.find(function(err, nerds){
				//if there's an error retrieving
				//send the error
				//nothing after res.send(err) will exe
				if (err)
					res.send(err);
				res.json(nerds); //return all nerds in JSON
			});
		});

		//route to handle creating goes here (app.post)
		//route to handle delete goes here (app.delete)

		//frontend routes------------------------------
		//route to handle all angular requests
		app.get('*', function(req,res){
			res.sendfile('./public/views/index.html'); //load public html file
		});
		//this essentially lets * -> all other routes redirect user to front-end app
		//angular will handle the routing from there
	};
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// set up express and port
var app = express(); 
var PORT = process.env.PORT || 8000; 

//static express for the images to display
app.use(express.static('app/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());

// api routes
require('./app/routing/apiRoutes')(app); 
require('./app/routing/htmlRoutes')(app);

//listen for the server
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
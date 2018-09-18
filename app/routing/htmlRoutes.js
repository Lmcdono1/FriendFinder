// path package
var path = require('path');

module.exports = function(app) {
// routing to html content to be displayed on page
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	})

	app.use('/home', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
}
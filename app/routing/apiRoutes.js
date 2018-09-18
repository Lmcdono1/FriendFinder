//Pull data from array of possible pet matches and their scores
var petData = require('../data/friends.js');
//route to export of pet data
module.exports = function (app) {
	//call API for friends data
	app.get('/api/friends', function (req, res) {
		res.json(petData);
	});
	// user clicks on submit button and it calls the API server to determine the pet match   
	app.post('/api/friends', function (req, res) {
		//loop through the possible matches until a match is found -- for loop next step    
		var petMatch = {
			name: "",
			photo: "",
			petDifference: 0 //1000
		};
		//setup for loop to find the difference between the pet scores and user score

		var userData = req.body;
		// var userName 	= userData.name;
		// var userPhoto 	= userData.photo;
		// var userScores 	= userData.scores;

		// Variable set up to calculate the user score and possible pet score differences
		var totalDifference = 0;

		// Set up a for loop to go through each poddible pet 
		for (var i = 0; i < petData.length; i++) {

			//console.log(petData[i].name);
			totalDifference = 0;

			// Set up another for loop to look for the scores of each pet and then compare them to the users scores
			for (var a = 0; a < petData[i].scores[a]; a++) {
				// Calculate the user vs pet scores and then add the differences
				// totalDifference += Math.abs(parseInt(userData[a]) - parseInt(petData[i].scores[a]));
				totalDifference += Math.abs(petData[i].scores[a] - userData.scores[a]);
				if (totalDifference <= petMatch.petDifference) {

					//Setting up the new pet match
					petMatch.name = petData[i].name;
					petMatch.photo = petData[i].photo;
					petMatch.petDifference = totalDifference;
				}
			}
		}

		// push the users answers 
		petData.push(userData);
		// petMatch.push(userName);
		// petMatch.push(userPhoto);
		// Return a JSON to HTML and show the users pet 
		res.json(petMatch);
		console.log(petMatch);
	});

}	

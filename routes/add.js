var data = require("../data.json");

exports.addFriend = function(req, res) {    
	res.render('add',data)
	getFriend = {
		"name": req.query.name,
		"description": req.query.description,
		"imageURL": "http://lorempizel.com/400/400/people"
	};
	data["friends"].push(getFriend);
 }
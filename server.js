var express = require('express');
var app = express();
var cors = require('cors');

var bodyParser = require('body-parser');

var portNum = 2022;
app.listen(portNum, function () {
	console.log("Bringing forth good fruit on port: ", portNum);
});

app.use(cors());
app.use(bodyParser());

app.get('/name', function (req, res) {
	res.send(person);
})

app.get('/hobbies', function (req, res) {
	res.send(hobbies);
})

app.get('/occupations', function (req, res) {
	if (req.query.order === 'asc') {
		res.send(occupations.sort());

	} else if (req.query.order === 'dsc') {
		var orderedArr = occupations.sort().reverse();
		res.send(orderedArr);

	} else {
		res.send(occupations);
	}
})

app.get('/occupations/latest', function (req, res) {
	res.send(occupations[0]);
})

//////////////////////////////////////////////////////

app.put('/name', function (req, res) {
	person = req.body;
	res.send(person);
})

app.put('/location', function (req, res) {
	location = req.body;
	res.send(location);
})

app.put('/hobbies', function (req, res) {
	var newHobby = req.body.hobby;
	hobbies.push(newHobby);

	res.send(newHobby);
})

//////////////////////////////////////////////////////

app.post('/skills', function (req, res) {
	var newSkill = req.body;
	skills.push(newSkill.skill);

	console.log(skills);
	res.send(newSkill.skill);
})

//

app.get('/skills', function (req, res) {
	res.send(skills);
})

//////////////////////////////////////////////////////

app.delete('/person', function (req, res) {
	person = '';

	res.send('Person deleted!');
})

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

var skills = [];
var person = { name: 'Daniel Falabella' };
var location = { place: 'Provo' };
var hobbies = ['family', 'work', 'eating'];
var occupations = ['therapist', 'architect', 'programmer'];





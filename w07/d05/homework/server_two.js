var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
	var person = randomPerson();
	console.log(person);
  res.render('index_two.ejs',{person: person});
});

app.get('/json', function(req, res) {
	var person = randomPerson();
	console.log(person);
  	res.send(person);
});

app.listen(3000);

console.log('listening on port 3000!');


var randomPerson = function(){
	var all_users = []
	var tiffany = {"info": [{"name": "Tiffany", "age": "26", "sex": "female", "color": "black"}]};
	var dawn = {"info": [{"name": "Dawn", "age": "49", "sex": "female", "color": "green"}]};
	var karl = {"info": [{"name": "Karl", "age": "22", "sex": "male", "color": "blue"}]};
	all_users.push(tiffany, dawn, karl);
	var index = Math.floor(Math.random()*all_users.length);
	return all_users[index];
}
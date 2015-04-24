var express = require('express');
var app = express();
var ejs = require('ejs');

var array = []

app.get('/', function(req, res){
	name = req.query.name
	if(name != ""){
	array.push(name)
	}
	res.render('index_two.ejs', {array: array})
});


app.get('/:name', function(req, res) {
  res.render('index_two.ejs', {array: array});
});

app.listen(3000);

console.log('listening on port 3000!');
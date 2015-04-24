var express = require('express');
var app = express();
var ejs = require('ejs');

app.get('/', function(req, res){
	name = req.query.name
	res.render('index.ejs')
});

app.get('/:name', function(req, res) {
  res.render('index.ejs', {name: req.query.name});
});

app.listen(3000);

console.log('listening on port 3000!');
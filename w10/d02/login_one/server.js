var express = require('express');
var app = express();

var secret = require('./secret.json');

app.use(express.static('public'));

app.get( "/", function(req, res){
	res.sendFile(__dirname + '/index.html');
})

app.get('/login', function(req, res){
	if(req.query.password === secret.password){
		res.redirect('/secret_page');
	} else{
		res.redirect('/');
	};

})

app.get('/secret_page', function(req, res){
	res.sendFile(__dirname + '/secret.html');
})

app.get('/secret_page2', function(req, res){
	res.sendFile(__dirname + '/secret_2.html');
})


app.listen(3000)
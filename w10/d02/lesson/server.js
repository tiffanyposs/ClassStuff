var express = require('express');
var app = express();
var session = require('express-session')

var secret = require('penguin');
// var secret = 'penguin';


app.use(express.static('public'));

app.get( "/", function(req, res){
	res.sendFile(__dirname + '/index.html');
})

app.get('/secret_page', function(req, res){
	res.sendFile(__dirname + '/secret.html');
})

app.get('/login', function(req, res){
	if(req.query.password === secret.password){
		// req.session.valid_user = true;
		res.redirect('/secret_page');
	} else{
		res.redirect('/');
	};

})

app.listen(3000)
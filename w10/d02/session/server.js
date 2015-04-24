var express = require('express');
var session = require('express-session')
var app = express();
var bodyParser = require('body-parser');


var secret = require('./secret.json');


app.use(session({
  secret: secret.password,
  resave: false,
  saveUninitialized: true
}));


app.use(bodyParser.urlencoded({extended: false}));


app.use(express.static('public'));

app.get( "/", function(req, res){
	res.sendFile(__dirname + '/index.html');
})

app.post('/session', function(req, res){
	if(req.body.password === secret.password){
		req.session.valid_user = true;
		res.redirect('/secret_page');
	} else{
		res.redirect('/');
	};

})

app.get('/secret_page', function(req, res){
	if(req.session.valid_user === true){
	res.sendFile(__dirname + '/secret.html');
	}
	else{
		res.redirect('/');
	}
	})

app.get('/secret_page2', function(req, res){
	if(req.session.valid_user === true){
	res.sendFile(__dirname + '/secret_2.html');
	}
	else{
		res.redirect('/');
	}
	})


app.listen(3000)


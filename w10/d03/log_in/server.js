var express = require('express');
var session = require('express-session')
var app = express();
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt')


var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('authentication_exercise.db');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

app.use(session({
  secret: "penguin",
  resave: false,
  saveUninitialized: true
}));


app.get( "/", function(req, res){
	res.sendFile(__dirname + '/index.html');
})

app.post('/user', function(req, res){
	var username = req.body.username;
	var password = req.body.password;
	var confirm_password = req.body.confirm_password;
	if(password === confirm_password){
		//encrypts the password, second makes it 10
		var hash = bcrypt.hashSync(password, 10);
		console.log(hash);
		db.run('INSERT INTO users(username, password) VALUES(?, ?)', username, hash, function(err){
			if(err){ throw err;}
			else{
			req.session.valid_user = true;
			res.redirect('/secret_page');
			}
		});
	}
	else{
		res.redirect('/');
	}
})

app.post('/session', function(req, res){
	var username = req.body.username;
	var password = req.body.password;
	//checks if the username exists
	db.get('SELECT * FROM users WHERE username = ?', username, function(err, row){
		if(err){ throw err }
		if(row){ 
			var passwordMatches = bcrypt.compareSync(password, row.password);
			if(passwordMatches){
				req.session.valid_user = true
				res.redirect('/secret_page')
			}
			else{ res.redirect('/') }
 
		} 
	})

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


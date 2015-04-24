###User Log In One

This is a basic server for a password

```
var express = require('express');
var app = express();

var secret = 'penguin';

app.use(express.static('public'));

app.get( "/", function(req, res){
	res.sendFile(__dirname + '/index.html');
})

app.get('/secret_page', function(req, res){
	res.sendFile(__dirname + '/secret.html');
})

app.get('/login', function(req, res){
	if(req.query.password === secret){
		res.redirect('/secret_page');
	} else{
		res.redirect('/');
	};

})

app.listen(3000)

```

This is the index.html that takes the password, if it is penguin you can log in.

```
<html>	
	<body>
		<form action="login" method="GET">
			<input name="password">
		</form>
	</body>
</html>

```

###User Log In Two

This is a more complexone that links to an external file for the password. This requires a login that directs you to a secret page, but the problem is that you can still go to /secret page and it shows. Next one is more secure.

####index.html

```
<html>	
	<body>
		<form action="login" method="GET">
			<input name="password">
		</form>
	</body>
</html>

```

####secret.json

This is the secret.json file that you need for the external file for your passwords. You can .gitignore this file.

```
{
 "password": "penguin"
}

```

####server.js


```
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

```


##Session

This one allows someone to only go to the secret page if they log in using session.

####index.html

```
<html>	
	<body>
		<form action="session" method="POST">
			<input name="password">
		</form>
	</body>
</html>

```
####server.js

You need to require express-session and body parser,, you  change the get request to post and to /session instead of login (also requires you to change "req.query.password" to "req.body.password" since its a post request.) This is also why you need to use body-parser.

```
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


```

#Log In with Database to Store User Info

This combines the last few with sqlite3 to create a login

this will allow people to log in as a new user or existing user. New users save to the database and the existing users let you log in. 

Uses express, express-session, body-parser, and sqlite.

###index.html

Make an index file with two actions session and user. One is for a new user and one is for existing users.

```
<html>	
	<body>
		<h3>Existing User</h3>
		<form action="session" method="POST">
			<input name="username" placeholder = "username">
			<input name="password" type = "password" placeholder = "password">
			<button></button>
		</form>

		<h3>New Users</h3>
		<form action="user" method="POST">
			<input name="username" placeholder = "username">
			<input name="password" type = "password" placeholder = "password">
			<input name="confirm_password" type = "password" placeholder = "confirm password">
			<button></button>
		</form>
	</body>
</html>

```

###server.js

First you write all of your requirements

#####PART 1
This is base, bascially it is a key that will be triggered to yes if the username is. You can put the secret set to any string for right now, it doesn't matter.

#####PART 2
This sends the main index.html when you first go to the url

#####PART 3
This is the user post root for new users.

Gets the params from the new user. If the password is equal to the confirm password. 

It inserts it into the database, if theres an error it throws else it changes valid user to ture, then redirects to secret page.

if the passwords arn't equil it will just refersh/redirect to "/"

#####PART 4
This part does sessions url, gets the username and password from the server. 

It will then go through the database to see if there is a row that matches the username and password entered. Then it will return row and set the valid user to true and redirect to /secret_page.

If not it goes to "/"

#####PART 5

These just say that you can only have access to these routes if the valid user === true. If not, user does not have access. 


```
var express = require('express');
var session = require('express-session')
var app = express();
var bodyParser = require('body-parser');


var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('authentication_exercise.db');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

//PART 1
app.use(session({
  secret: "penguin",
  resave: false,
  saveUninitialized: true
}));

//PART 2
app.get( "/", function(req, res){
	res.sendFile(__dirname + '/index.html');
})

//PART 3
app.post('/user', function(req, res){
	var username = req.body.username;
	var password = req.body.password;
	var confirm_password = req.body.confirm_password;
	if(password === confirm_password){
		db.run('INSERT INTO users(username, password) VALUES(?, ?)', username, password, function(err){
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

//PART 4
app.post('/session', function(req, res){
	var username = req.body.username;
	var password = req.body.password;
	db.get('SELECT * FROM users WHERE username = ? AND password = ?', username, password, function(err, row){
		if(err){ throw err }
		if(row){ 
			req.session.valid_user = true;
			res.redirect('/secret_page') 
		}
		else{ res.redirect('/') }
	})

})

//PART 5
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



```

###schema.sql

```

DROP TABLE IF EXISTS users;
CREATE TABLE users(
          id INTEGER PRIMARY KEY,
          username TEXT,
          password TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TRIGGER authentication_exercise BEFORE UPDATE ON users BEGIN
  UPDATE users SET updated_at = CURRENT_TIMESTAMP WHERE id = new.id;
END;

```

###seed.js

```
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("authentication_exercise.db");

db.run("INSERT INTO users (username, password) VALUES (?, ?), (?, ?)",
	'tiffany', 'rose',
	'karl', 'edward',
	function(err){
		if(err){
			throw err;
		}
	}
);

```

###Example in Sinatra

Here is an example of sinatra server that would process the secret password.

```
require 'sinatra'
require 'json'

use Rack::Session::Pool, :cookie_only => false

secret_password = ''
json = ''
File.open('secret.json', 'r') do |f|
  f.each_line do |line|
    json << line
  end
end
json_hash = JSON.parse(json)
secret_password = json_hash['password']


def authenticated?
  session[:valid_user] == true
end

get '/' do
  send_file 'index.html'
end

post '/session' do
  if params[:password] === secret_password
    session[:valid_user] = true
    redirect '/secret_page'
  else
    redirect '/'
  end
end

get '/secret_page' do
  if authenticated?
    return 'Hello! <a href = "http://localhost:4567/secret_page2">Secret Page 2</a>'
  else
    redirect '/'
  end
end

get '/secret_page2' do
  if authenticated?
    return 'Hello! <a href = "http://localhost:4567/secret_page">Secret Page</a>'
  else
    redirect '/'
  end
end

```
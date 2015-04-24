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
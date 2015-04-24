var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("database.db");

db.run("INSERT INTO users (username, password) VALUES (?, ?)",
	'tiffany', 'password',
	function(err){
		if(err){
			throw err;
		}
	}
);
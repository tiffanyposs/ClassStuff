//FIRST RUN sqlite3 petulance.db < sqhema.sql
// Then run node seed.js to populate the database

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("petulance.db");

db.run("INSERT INTO pets (name, type) VALUES (?, ?), (?, ?), (?, ?), (?, ?), (?, ?), (?, ?)",
	'Fluffy', 'hamster',
	'Salty', 'cat',
	'Pepper', 'cat',
	'Big Moe', 'frog',
	'Frick', 'goldfish',
	'Frack', 'goldfish',
	function(err){
		if(err){
			throw err;
		}
	}
);
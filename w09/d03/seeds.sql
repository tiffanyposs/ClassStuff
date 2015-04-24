CREATE TABLE dwarves(
	id INTEGER PRIMARY KEY,
	name TEXT, color TEXT,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

CREATE TRIGGER dwarfs BEFORE UPADATE ON dwarves BEGIN
	UPDATE dwarves SET updated_at = CURRENT_TIMESTAMP WHERE id = new.id;
	END;

	INSERT INTO dwarves (name, color) VALUES
	("Happy", "Yellow"),
	("Dopey", "Purple"),
	("Sniffy", "Green"),
	("Grumpy", "Brown"),
	("Doc", "Brown"),
	("Sleepy", "Blue"),
	("Bashful", "Blue");

	-- Run this in the terminal and it will insert that data into dwarfs db
	#sqlite3 dwarfs.db < seeds.sql

	-- THIS WILL CREATE A NEW TABLE FOR YOU AUTOMATICALLY
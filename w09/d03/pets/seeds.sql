CREATE TABLE pets(
	id INTEGER PRIMARY KEY,
	name TEXT, type TEXT,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);


CREATE TRIGGER pets_update BEFORE UPDATE ON pets BEGIN
	UPDATE pets SET updated_at = CURRENT_TIMESTAMP WHERE id = new.id;
	END;

	INSERT INTO pets (name, type) VALUES
	("Olive", "Doggie"),
	("Auggie", "Puppy"),
	("Cosmo", "Cat");


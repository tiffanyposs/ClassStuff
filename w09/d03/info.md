#Databases
###SQlite3

Databases store data.

Many databases use SQL (Structured Query Language)


####This Creates your

```
$sqlite3 dwarfs.db

```

Databases have multiple tables

####This will Create all your columns

```
$CREATE TABLE dwarfs (ID INTEGER PRIMARY KEY, name TEXT, color TEXT);

```

This will create a table with three columns. 



####Shows your table columns only.

```
$.schema dwarfs;
```

####This creates a row.
Creates one Row

```
$INSERT INTO dwarfs (name, color) VALUES("Happy", "Yellow");
```
This creates multipe dwarfs using a comma.

```
$INSERT INTO dwarfs (name, color) VALUES("Happy", "Yellow"),("Dopey", "Purple");
```

####This shows you all your rows

```
$SELECT * FROM dwarfs;

```

This selects the one with the id of 3

```
$SELECT * FROM dwarfs WHERE id=3;
```

This selects the ones with brown color

```
$SELECT * FROM dwarfs WHERE color="Brown";
```

###Update

This updates the one with id 7 to a new name and color.

```
$UPDATE dwarfs SET name="Sniffly", color="green" WHERE id=7;

```

```
UPDATE dwarfs SET color="Grey" WHERE color="Yellow";
```

###Delete

```
DELETE FROM dwarfs WHERE id=4;

```

###Adding a Timestamp

YOU MUST ADD A CURRENT_TIME, CURRENT_DATE or CURRENT_TIMESTAMP in the create data before you add any rows.


```
CREATE TABLE dwarfs (ID INTEGER PRIMARY KEY, name TEXT, color TEXT, time DATETIME DEFAULT CURRENT_TIMESTAMP);
```
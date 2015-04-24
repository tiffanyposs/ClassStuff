var express = require('express');
var bodyParser = require('body-parser'); 
var cors = require('cors'); // 
var app = express();


app.use(cors());
app.use(bodyParser.json({extended: false}));

var pets = {
	1: {
		id: 1,
		name: "Smelly Cat",
		type: "Cat"
	},
	2: {
		id: 2,
		name: "Marcell",
		type: "Monkey"
	}
}

var numPets = 2;

//this is all the pets
app.get('/pets', function(req, res){
	var petsArray = [];
	Object.keys(pets).forEach(function(key) {
		petsArray.push(pets[key])
	});
	res.json(petsArray);
});


//creates a pet
app.post('/pet', function(req, res){
	numPets++;
	var newPet = {
		id: numPets,
		name: req.body.name,
		type: req.body.type
	};

	pets[numPets] = newPet;
	res.json(newPet);
})


//this deletes a pet
app.delete('/pet/:id', function(req, res){
	var id = req.params.id;
	delete pets[id];
	res.json({deleted: true});
})


//this updates pets
app.put('/pet/:id', function(req, res){
	var id = req.params.id;
	pets[id].name = req.body.name;
	pets[id].type = req.body.type;
	res.json(pets[id]);
})

app.listen(3000);
console.log('listening on port 3000')
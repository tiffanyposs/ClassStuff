var express = require ('express');
var app = express();

app.get('/salad', function(req, res){
	var data = {name: "Basic Salad", ingredients: ["lettuce", "tomatoes", "chicken", "cheese", "croutons"]};
	res.json(data);
})


app.listen(3000)
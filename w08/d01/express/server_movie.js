var express = require ('express');
var app = express();

app.get('/top_theaters', function(req, res){
	var data = ["Ace Ventura", "Dumb and Dumber", "The Mask"]
	res.json(data);
})

app.get('/top_dvds', function(req, res){
	var data = { "results": [ {"Jurassic Park": 9}, {"Superman": 2}, {"Inception": 8} ]}
	res.json(data);
})

app.listen(3000)
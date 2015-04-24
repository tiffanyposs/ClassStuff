var express = require ('express');
var app = express();

app.get('/', function(req, res){
	res.json({msg: "Hello World"});
	//also works:
	//res.send({msg: "Hello World"})
})

app.listen(3000)
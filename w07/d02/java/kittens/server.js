var http = require('http');
var ejs = require('ejs');
var fs = require('fs');

var server = http.createServer(function(request, response){
	var path = request.url;
	var split = path.split("/");
	var num1 = parseInt(split[1]);
	var num2 = parseInt(split[2]);
	var template = fs.readFileSync('kittens.ejs', 'utf8');
	var rendered = ejs.render(template, {num1: num1, num2: num2});
	response.end(rendered);
})


server.listen(3000);

console.log('listening on port 3000!');

// this takes the path and spits it with two parameters
// localhost:3000/200/200 will make a place kitten on the ejs file
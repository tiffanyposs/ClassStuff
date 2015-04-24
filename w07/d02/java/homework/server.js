var http = require('http');
var ejs = require('ejs');
var fs = require('fs');

var server = http.createServer(function(request, response){

    var name = ["Karl", "Tiffany", "Dawn", "Jessica", "Curtis"];
    var color = ["blue", "red", "black", "purple", "green"];
    var hometown = ["LA", "Boston", "Chicago", "New York City", "Houston"];
    var band = ["The Doors", "Rolling Stones", "Maroon Five", "Cher", "B-52s"];
    var artist = ["Monet", "Picasso", "Andy Worhol"];
    var food = ["Pizza", "Candy", "Thai Food", "Greek Food", "Turkish Food"];


	var template = fs.readFileSync('index.ejs', 'utf8');
	var rendered = ejs.render(template, {name: randString(name), color: randString(color), hometown: randString(hometown),
	band: randString(band), artist: randString(artist), food: randString(food)});
	response.end(rendered);
})


server.listen(3000);

console.log('listening on port 3000!');


var randString = function(array){
	var length = array.length;
	var number = Math.floor(Math.random()*length);
	var word = array[number];
	return word;
}


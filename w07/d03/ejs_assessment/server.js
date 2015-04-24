var http = require('http');
var ejs = require('ejs');
var fs = require('fs');

var server = http.createServer(function(request, response){

var tiffany = {name:"Tiffany", color : "black", age:26}


	var template = fs.readFileSync('index.ejs', 'utf8');
	var rendered = ejs.render(template, {name: tiffany.name, color: tiffany.color, age: tiffany.age});
	response.end(rendered);
})


server.listen(3000);

console.log('listening on port 3000!');




// var obj = {
// 	name: "Alex",
// 	color: "Yellow_Blue",
// 	age : "24"
// }

// app.get( "/", function ( req, res ) {


// 	var template = fs.readFileSync( "views/assess.ejs", "utf8" );
// 	var rendered = ejs.render( template, {
// 		obj: obj
// 	} );

// // then on the ejs file its obj.name etc
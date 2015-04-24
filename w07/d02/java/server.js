var http = require('http');
var ejs = require('ejs');
var fs = require('fs');

var server = http.createServer(function(req, res){
	var template = fs.readFileSync('mytemplate.ejs', 'utf8');
	var rendered = ejs.render(template, {color: "purple", name: "tiffany"});
	res.end(rendered);
})


server.listen(3000);

console.log('listening on port 3000!');
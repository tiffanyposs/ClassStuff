var fs = require('fs');

var x = 3;

fs.readFile('file.txt', function(err, data){
	console.log(x); // this will log second and log 10
})

console.log(x); // this will read before the one above and log 3
x = 10;

//the second one console log  will log 10 inside the function becasue
//it is technically called after x is reset to 10

// this is I/O involves servers, files, OS, 



var fs = require('fs');

var x = 3;
var d = "";

fs.readFile('f.txt', function(e, data){
	d = data;
})

fs.writeFile('s.txt', d, function(3){})
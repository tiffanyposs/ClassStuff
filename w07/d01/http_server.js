//fix

var http = require("http");
var Server = http.createServer(function(request, response){
	var path = request.url;
	console.log(path);
	var split_path = path.split("/");
	split_path.splice(0,1);

	var say = split_path.splice(0, 1).join(" ");

	console.log(split_path);
	if(split_path[0] === "say"){
		response.end(say);
	}else{
		response.end("Go to localhost:2000/say/something");
	}
});

Server.listen(2000);


// var http = require("http");
// var Server = http.createServer(function(request, response){
// 	var path = request.url;
// 	if(path === "/"){
// 		response.end("Hello World");
// 	}else{
// 		response.end("phooey");
// 	}
// });

// Server.listen(2000);
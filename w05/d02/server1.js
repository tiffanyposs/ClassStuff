//this will make a basic web server and will print
//"hello world" in the browser

// to test you none the js file server, then go to
// localhost:2000 in the browser (2000 because its the
// port we listed it on.)

var http = require("http");

var Server = http.createServer(function(request, response){
  response.end("Hello World!");
});

Server.listen(2000);

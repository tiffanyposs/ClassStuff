var http = require("http");

var h1Text = process.argv[2];
var pText = process.argv[3];

var Server = http.createServer(function(request, response){
  response.end("<html><body><h1>" + h1Text + "</h1><p>" + pText + "</p></body></html>");
});

Server.listen(2000);

//this will start up a server with 2 arguments in the server node server3.js 3 5
// then it will send those two arguments to the browser in 

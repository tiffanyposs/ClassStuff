var http = require("http");

var msg = "";

var Server = http.createServer(function(request, response){

  var path = request.url;
  if(path === "/"){
    msg = "Hello World!";
  }
  else{
    msg = "phooey!";
  }
  response.end(msg);
});

Server.listen(2000);


// if you go to http://localhost:2000 it will print out "Hello World"
// if you go to http://localhost:2000/peach it will print out "phooey!",

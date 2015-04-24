var http = require("http");

var msg = "";

var Server = http.createServer(function(request, response){

  var path = request.url;
  if(path === "/foo"){
    msg = "Bar";
  }
  else{
    msg = "";
  }
  response.end(msg);
});

Server.listen(2000);

//this will print nothing if you go to http://localhost:2000
// it will print "Bar" if you go to http://localhost:2000/foo

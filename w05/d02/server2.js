//this is sending a request to the server, which then in turn returns
// run server in node then go to localhost:2000 on the browser

//single request and single response

var http = require("http");

var Server = http.createServer(function(request, response){
  response.end("<html><body><h1>Hello World!</h1><p>How are you?</p></body></html>");
});

Server.listen(2000);


// if you need to do write the html part on mutliple lines you need to put
// it in quotes and do each line.

// "<html><body><h1>Hello World!</h1><p>How are you?</p>" +
// "</body></html>"

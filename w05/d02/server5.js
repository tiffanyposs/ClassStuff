// this will increase the counter by 1 and print it to the page everytime you
// you refresh the page. Chrome will mess it up and increase by 2

var http = require("http");

var counter = 0;

var Server = http.createServer(function(request, response){
  console.log(request.url);
  counter++;
  response.end("<html><body><p>" + counter +"</p></body></html>");
});

Server.listen(2000);

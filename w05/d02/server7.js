var http = require("http");

var msg = "";

var Server = http.createServer(function(request, response){

  var path = request.url;
  var word = request.url.split("/");

  console.log(word);

  if(path === "/tortilla/rice"){
    msg = "<html><body><h1>Mmmmmmm...</h1</body></html>";
  }
  else if (path === "/tortilla/guac"){
    msg = "<html><body><h1>Ahhhhh...</h1></body></html>";
  }
  else if (path === "/tortilla/" + word[2]){
    msg = "<html><body><h1>" + word[2] +" is good...</h1></body></html>";
  }
  else{
    msg = "<html><body><h1>You're missing something!</h1</body></html>";
  }
  response.end(msg);
});

Server.listen(2000);


//this will respond Mmmmm.... for /tortilla/rice
// will respond Ahhhh for /tortilla/guac
// will respond tortilla + whatever you type is "whatever + is good"
// anything else will give  you You're missing something.

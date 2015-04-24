var http = require("http");
var fs = require('fs');
var msg = ""



var Server = http.createServer(function(request, response){
  
  var path = request.url;
  var file_name = request.url.slice(1);


if(request.url === "/"){
fs.readFile("index.html", function(err, data) {
    var text = data.toString();
    msg = text;
    response.end(msg);
    console.log("success!")
})
}

else{
fs.readFile(file_name, function(err, data){
  var text = data;
  msg = text;
  response.end(msg);
  console.log("success!")
})
}

}).listen(2000);



//Server.listen(2000);




// var http = require("http");
// var fs = require('fs');
// var msg = ""

// var Server = http.createServer(function(request, response){

//   console.log(request.url);

// fs.readFile("index.html", function(err, data) {
//     var text = data.toString();
//     msg = text;
//     response.end(msg);
//     console.log("success!")
// })

// fs.readFile("stylesheet.css", function(err, data){
//   var text = data.toString();
//   msg = text;
//   response.end(msg);
//   console.log("success!")
// })


// }).listen(2000);







// if you run the server then in a seperate terminal
// type in curl localhost:2000 it will spit out what
// that url responds with



// BELOW CONNECTS AN HTML FILE TO A SERVER
//////////////////
// var http = require("http");
// var fs = require('fs');
// var msg = ""

// var Server = http.createServer(function(request, response){

//   console.log(request.url);

// fs.readFile("index.html", function(err, data) {
//   if (err) {
//     console.log("oh no!");
//     console.log(err);
//   } 
//   else {
//     var text = data.toString();
//     msg = text;
//     response.end(msg);
//     console.log("success!")

//   }
// })
// }).listen(2000);
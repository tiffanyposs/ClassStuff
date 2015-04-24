//Jokebox
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
var counter = 0;
server.on("connection", function(ws) {
  counter++;
  console.log(counter + " person connected!");
  jokes = ["Why did the chicken...",
            "A nurse and a nun walk into a bar...",
            "Knock knock..."]
  ws.send("hello");
  ws.on("message", function(message){
    i = Math.floor(Math.random()*jokes.length);
    console.log(message);
    ws.send(jokes[i]);
  });
});


/*
//Echo server
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
var counter = 0;
server.on("connection", function(ws) {
  counter++;
  console.log(counter + " person connected!");
  ws.send("hello");
  ws.on("message", function(message){
    console.log(message);
    ws.send(message);
  });
});
*/


/*
//Hello Hello Hello
// this will have the server send "hello" on repeat"
//to the client
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
server.on("connection", function(ws) {
  var hello = function(){
    ws.send("hello");
  }
  setInterval(hello, 1000);
});
*/

/*
//Hello Hello Hello wrong
// this will have the client send "hello on repeat"
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
server.on("connection", function(ws) {
  var message = function(){
    console.log("hello")
  }
  setInterval(message, 1000);
  //console.log("Client connected!");
});
*/

/*
//Picky logging
//this will only respond to the server from the client if the
//client says "Howdy!" exactly
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
var counter = 0;
server.on("connection", function(ws) {
  counter++;
  console.log(counter + " person connected!");
  ws.send("hello");
  ws.on("message", function(message){
    if(message === "Howdy!"){
      console.log(message);
    }
  });
});
*/


/*
//original code
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
server.on("connection", function(ws) {
  console.log("Client connected!");
});
*/

/*
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
var counter = 0;
server.on("connection", function(ws) {
counter++;
console.log(counter + " person connected!");
ws.send("hello");
ws.on("message", function(message){
console.log("they said " + message);
});
});
*/

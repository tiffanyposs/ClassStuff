//example 1 echo
/*
this creates a new server on port 3000 a counter is
set at 0 to log how many people are in.
When the server.on is connected a anymonous function
is created (ws) is a parameter that represents each
client that logs onto that server.

The counter goes up, and console.log on number of people
connected to the server terminal.

An array with jokes in it is created. ws.sent("hello") sends
hello to a client when they log on.

ws.on("message"...) writes a function that takes message as
a parameter, this will be any message that the client writes.

var i selects a random number within the length of the jokes array
when a message is written by a client it is console.log on the server
terminal, then ws.send sends a message back to the client which is a
random joke using the index and jokes array
*/


var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
var counter = 0;
server.on("connection", function(ws) {
  counter++;
  console.log(counter + " person connected!");
  var jokes = ["Why did the chicken...",
  "A nurse and a nun walk into a bar...",
  "Knock knock..."]
  ws.send("hello");
  ws.on("message", function(message){
    var i = Math.floor(Math.random()*jokes.length);
    console.log(message);
    ws.send(jokes[i]);
  });
});

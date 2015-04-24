//you must log onto a client with wscat -c ws://localhost:3000

// this will take a message that the client sends and
//return it from the server to say "Oh Yeah?! Well ______ ."
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});

server.on("connection", function(ws) {
  ws.on('message', function (message) {
    console.log(message);
    ws.send("Oh Yeah?! Well " + message + ".");
  });
});



/*PART 1
// this will have the server return I know you are but what am I
//whenever the client types a message
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});

server.on("connection", function(ws) {
  ws.on('message', function (message) {
    console.log(message);
    ws.send("I know you are but what am I?");
  });
});
*/


// var WebSocketServer = require("ws").Server;
// var server = new WebSocketServer({port: 3000});
//
// server.on("connection", function(ws) {
//   ws.on('message', function (message) {
//     ws.send(message);
//   });
// });

// this connects to a server and will log how many
// people connect. to create the server in terminal
// write node into this document (node index.js) to open
// the server. Then in a new terminal type: wscat -c ws://localhost:3000
// to connect

//wc is the individual client
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
/*
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
server.on("connection", function(ws) {
  console.log("Client connected!");
});
*/

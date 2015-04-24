

//Hello Hello Hello
// this will have the server send "hello" on repeat"
//to the client

var WebSocketServer = require("ws").Server;

var WebSocketClient = require("ws");

var server = new WebSocketServer({port: 3000});
var ws = new WebSocketClient("ws://localhost:3000");

ws.on("open", function(){
  console.log("Connected to the Server")
})


// server.on("connection", function(ws) {
//   var hello = function(){
//     ws.send("howdy");
//   }
//   setInterval(hello, 1000);
// });

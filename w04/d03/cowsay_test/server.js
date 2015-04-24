var WebSocket = require("ws").Server;
var server = new WebSocket ({port: 3000});
var cowsay = require("cowsay");

server.on("connection", function(ws){
  ws.send("connected");
  ws.on("message", function(msg){
    var cow = cowsay.say({text: msg});
    ws.send(cow);
  })
})

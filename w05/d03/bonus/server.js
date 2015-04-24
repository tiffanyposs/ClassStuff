var WSS = require('ws').Server;
var server = new WSS({port: 3000});

var history = [];

server.on("connection", function(ws) {
  ws.on("message", function(msg) {
    history.push(msg);
  });
  var historyMsg = history.join("\n");
  ws.send(historyMsg);
})

console.log(history)
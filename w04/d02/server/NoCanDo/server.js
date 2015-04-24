// this program is a server a server with an argument of the port number
// it will count how many people are connected and  say
// Congrats your connected to the server, if more than one
// person tries to join it wall tell them "no can do"

//you must log onto a client with -c ws://localhost:3000

var portNumber = process.argv[2];

var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: portNumber});

var i = 0;
server.on("connection", function(ws) {
  ws.on
  i++;
  var count = i;
  console.log(count + " people connected");
  if (i === 1) {
    ws.on('message', function (message) {
      ws.send("Congrats your connected to the server!");
    });
  } else if (i >= 1){
    ws.send("no can do sorry");
    ws.close();
  }
  ws.on('close', function () {
    i--;
    var count = i
    console.log(count + " people connected");
  });
});

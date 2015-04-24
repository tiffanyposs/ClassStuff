// this takes an argument when you node into it
// and will connect on that server
// wscat -l 3000  to enter the server(or whatever port
// you want to use)

var portNumber = process.argv[2];

var WebSocket = require("ws");
var ws = new WebSocket('ws://localhost:' + portNumber)


ws.on('open', function () {
  console.log("connected to the server");
});

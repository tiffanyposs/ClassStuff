// this is a client, first you must make a server at
// wscat -l 3000  then node into this file in a separate
// terminal the client will return hey server when the
// server writes hey client

var WebSocket = require('ws');
ws = new WebSocket('ws://localhost:3000');

ws.on('open', function () {
  console.log("connected to the server");

  ws.on('message',function(message){
    if (message === "hey client"){
      ws.send("hey server");
    }
  });

});

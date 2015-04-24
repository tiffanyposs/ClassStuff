// wscat -l 3000  then node into this file in a separate

var WebSocket = require('ws');
ws = new WebSocket('ws://localhost:3000');

ws.on('open', function () {
  console.log("connected to the server");

  ws.on('message',function(message){
      ws.send(message);
  });

});

// this is a client, first you must make a server at
// wscat -l 3000  then node into this file in a separate
// terminal the client will return howdy every 1 second
// to the server


var WebSocket = require('ws');
ws = new WebSocket('ws://localhost:3000');

ws.on('open', function () {
  console.log("connected to the server");

  var howdy = function(){
  ws.send("howdy");
}

setInterval(howdy, 1000);


});

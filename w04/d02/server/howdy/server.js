var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});

server.on("connection", function(ws) {
  console.log("Client connected!");

  //sends howdy to the client
    ws.send("howdy");

    //this recieves hello from the client
    ws.on("message", function(message){
      console.log(message);
    });
});

var WebSocket = require("ws");
var ws = new WebSocket("ws://localhost:3000");

ws.on("open", function () {
  console.log("Connected to server.");

  //this sends hello to the client
  ws.send("hello");



  //this recieves howdy from the client
  ws.on("message", function(message){
    console.log(message);
  });

});

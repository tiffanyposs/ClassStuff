// this is the the client
//node client.js

var WebSocket = require("ws");
var client = new WebSocket("ws://localhost:3000");

client.on("open", function () {
  console.log("Connected to server.");
});

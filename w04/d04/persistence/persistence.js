//node persistence.js

//client writes wscat -c ws://localhost:3000

var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});

var storedMessage = [];

console.log("Listening on Port 3000");


  server.on("connection", function(connection) {

      var chatHistory = storedMessage.join('\n');
      connection.send(chatHistory);
      connection.send("Connected to the Server");
      console.log("Client Connected");


    connection.on("message", function(message){
      newMessage = message.toString().trim();
      console.log(newMessage);
      storedMessage.push(newMessage);
      //  connection.send(newMessage);
    })

    connection.on("close", function(){
      counter = 0;
    });

    process.stdin.on("data", function(input){
      var newInput = input.toString().trim();
      connection.send(newInput);
      storedMessage.push(newInput);
    });

  });

//Server File
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});

var storedMessages = [];

console.log("listening on port 3000 (press CTRL+C to quit)");

server.on("connection", function(connection){
  console.log("Client Connected");

  storedMessages.forEach(function(each){
    connection.send(each);
  });

  //listen for incoming messages
  connection.on("message", function(message){
    console.log(message);
    //add message to stored messages array
    storedMessages.push(message);
    connection.send(message);
  });//end message

  //if client closes connection, reset counter to 0
  connection.on("close", function(){
    console.log("Client Disconnected");
  });

  // process.stdin.on("data", function(data){
  //   var newData = data.toString().trim();
  //   connection.send(newData);
  //   storedMessages.push(newData);
  // });

});//end connection

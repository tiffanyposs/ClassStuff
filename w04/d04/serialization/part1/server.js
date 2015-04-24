//Server File

//command line inputs
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});

var storedMessages = [];

console.log("listening on port 3000 (press CTRL+C to quit)");

server.on("connection", function(connection){
  console.log("Client Connected");
  //send client message history
  var chatHistory = storedMessages.join('\n');
  connection.send(chatHistory);

  //listen for incoming messages
  connection.on("message", function(message){
    newMessage = message.toString().trim();
    console.log(newMessage);
    //add message to stored messages array
    storedMessages.push(newMessage);
    connection.send(newMessage);
  });//end message

  //if client closes connection, reset counter to 0
  connection.on("close", function(){
    console.log("Client Disconnected");
    counter = 0;
  });

  process.stdin.on("data", function(data){
    var newData = data.toString().trim();
    connection.send(newData);
    storedMessages.push(newData);
  });

});//end connection

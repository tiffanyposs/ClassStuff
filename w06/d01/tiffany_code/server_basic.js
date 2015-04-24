//Server File

var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});

var counter = 1;

console.log("listening on port 3000 (press CTRL+C to quit)");

server.on("connection", function(connection){
  console.log("Client Connected");
  connection.usernumber = "user_" + counter;
  counter++;
  storage(connection);

  connection.on("message", function(message){
    sendMessage(message);
  });//end message

  connection.on("close", function(){
    console.log("Client Disconnected");
    removeClient(connection);

  });

});//end connection


var storedMessages = [];
var storedClients = [];


var storage = function(connection){
  storedClients.push(connection);
  storedMessages.forEach(function(each){
    connection.send(each);
  });
}

var sendMessage = function(message){
  storedMessages.push(message);
  storedClients.forEach(function(each){
    each.send(message);
  })
}

// this removes the client from storedClients when they close
var removeClient = function(connection){
  for(var i = 0; i < storedClients.length; i++){
    if(storedClients[i].usernumber === connection.usernumber){
      storedClients.splice(i, 1);
    }
  }
}
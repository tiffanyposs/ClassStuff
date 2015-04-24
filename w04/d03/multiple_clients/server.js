var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});

var clients = [];
var counter = 1

server.on("connection", function(connection){

  clients.push(connection);
  connection.user_name = "user_" + counter;
  connection.send("You've connected to the server");
  console.log(connection.user_name + " has connected")
  counter++;

  connection.on("close", function(){
    console.log(connection.user_name + " disconnected.");
    for(var i = 0; i < clients.length; i++){
      if(clients[i] === connection){
        clients.splice(i, 1);
      }
    }
  })

  connection.on("message", function(message){
    clients.forEach(function(client){
      if(client.user_name != connection.user_name ){
        if(message === "(table flip)"){
          client.send(connection.user_name + ": " + "(╯°□°）╯︵ ┻━┻");
        }
        else if(message === "(house)"){
          client.send(connection.user_name + ": " + "__̴ı̴̴̡̡̡ ̡͌l̡̡̡ ̡͌l̡*̡̡ ̴̡ı̴̴̡ ̡̡͡|̲̲̲͡͡͡ ̲▫̲͡ ̲̲̲͡͡π̲̲͡͡ ̲̲͡▫̲̲͡͡ ̲|̡̡̡ ̡ ̴̡ı̴̡̡ ̡͌l̡̡̡̡.___");
        }
        else if(message === "(dog)"){
          client.send(connection.user_name + ": " + "ˁ˚ᴥ˚ˀ");
        }
        else{
          client.send(connection.user_name + ": " + message.trim());
          }
    }
    })
  })
});

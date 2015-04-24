// this program will send one client to the other
// via the server, wscat -c ws://localhost:3000 to connect the clients
//in separate terminals
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});

//this stores the names of all the clients
var clients = [];

// this counter is to loop through the clients
// is to make client usernames with numbers
var counter = 1

//turns the server on, the connection is the individual connected client
//when they log on it pushes the connected client to the client array
//says client
server.on("connection", function(connection){
  //this pushes the client connection to the clients array to keep
  //tract of all the clients
  clients.push(connection);
  // this is adding a key value pair that will generate
  // a new username for each person
  connection.user_name = "user_" + counter;
  // the server sends this to every new client
  connection.send("You've connected to the server");
  //this logs on the server that ___ user has connected
  console.log(connection.user_name + " has connected")
  counter++;

  //this will upon the closing of a client log that
  //they have disconnected and will remove that user object
  //from the clients array
  connection.on("close", function(){
    console.log(connection.user_name + " disconnected.");
    for(var i = 0; i < clients.length; i++){
      if(clients[i] === connection){
        clients.splice(i, 1);
      }
    }
  })

  // this sends a message only to the users that didn't send it
  // with a bunch of if statements to maek emojis
  connection.on("message", function(message){
    //creates a forEach statement  that loops though clients
    clients.forEach(function(client){
      //if the client username isn't equal to the connection user name it will send to those people
      if(client.user_name != connection.user_name ){
        //if/else statements to make emojis
        if(message === "(table flip)"){
          client.send(connection.user_name + ": " + "(╯°□°）╯︵ ┻━┻");
        }
        else if(message === "(house)"){
          client.send(connection.user_name + ": " + "__̴ı̴̴̡̡̡ ̡͌l̡̡̡ ̡͌l̡*̡̡ ̴̡ı̴̴̡ ̡̡͡|̲̲̲͡͡͡ ̲▫̲͡ ̲̲̲͡͡π̲̲͡͡ ̲̲͡▫̲̲͡͡ ̲|̡̡̡ ̡ ̴̡ı̴̡̡ ̡͌l̡̡̡̡.___");
        }
        else if(message === "(dog)"){
          client.send(connection.user_name + ": " + "ˁ˚ᴥ˚ˀ");
        }
        // the else statement will send anything else as a message
        else{
          client.send(connection.user_name + ": " + message.trim());
        }
      }
    })
  })
});

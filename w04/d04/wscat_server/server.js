//node server.js -l 3000
var listen = process.argv[2];
var portNumber = parseInt(process.argv[3]);


var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: portNumber});

var counter = 0;
console.log("Listening on Port " + portNumber);

if(listen === "-l"){
server.on("connection", function(connection) {

  counter++;

   if(counter === 1){
     connection.send("Connected to the Server");
     console.log("Client Connected");
   }
   else{
     connection.close();
     console.log("Client Attempted to Connected");
   }

   connection.on("message", function(message){
     newMessage = message.toString().trim();
     console.log(newMessage);
    //  connection.send(newMessage);
   })

   connection.on("close", function(){
     counter = 0;
   });

  process.stdin.on("data", function(input){
     var newInput = input.toString().trim();
     connection.send(newInput);
   });

});

}

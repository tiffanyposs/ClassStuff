//node client.js -c 3000
var connect = process.argv[2];
var portNumber = parseInt(process.argv[3]);


var WebSocketClient = require("ws");
var client = new WebSocketClient("ws://localhost:" + portNumber);

if(connect === "-c"){

client.on("open", function(){
  console.log("Connected to Server(press CTRL+C to quit)");
})

  process.stdin.on("data", function(data){
    var newData = data.toString().trim();
    client.send(newData);
})

client.on("message", function(message){
  newMessage = message.toString().trim();
  console.log(newMessage);
})

client.on("close", function(connection){
  console.log("Disconnected form the Server");
  process.exit();
})

}

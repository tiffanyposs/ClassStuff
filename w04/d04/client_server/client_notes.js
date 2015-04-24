//node client.js -c 3000

// this is the connect argument, will only take -c
//portNumber is whatever port the user puts in
var connect = process.argv[2];
var portNumber = parseInt(process.argv[3]);

// this is the client host
var WebSocketClient = require("ws");
var client = new WebSocketClient("ws://localhost:" + portNumber);

//only if the connect argument is === -c
if(connect === "-c"){

  // when the client
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

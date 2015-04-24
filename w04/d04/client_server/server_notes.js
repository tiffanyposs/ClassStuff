//node server.js -l 3000
//this program takes 2 argrments for the listener and port number,
// it will only allow 1 client to connect at a time

// listen is the agrument for -l will only log on the server if the
//argument is -1
//portNumber is the port number that is connects to ex 3000
var listen = process.argv[2];
var portNumber = parseInt(process.argv[3]);

//this is the server websocket variable, the the server references portNumber
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: portNumber});

// the counter counts the number of clients
var counter = 0;

//when the server is open it will print Listening on Port _____
console.log("Listening on Port " + portNumber);

//giant if statement so the server will only log on if the person types -l
if(listen === "-l"){

  //when the server connects (connection = the the individual client that logs on)
  server.on("connection", function(connection) {
    // this will count up 1 on the counter to log the user
    counter++;

    //if there is only one user, send to the user "connected to the server",
    //and log in the server console "Client connected"
    if(counter === 1){
      connection.send("Connected to the Server");
      console.log("Client Connected");
    }
    //else when the logon amount is greater than 1, close any client that
    //attempts to log on, but tell the server that someone tried to log on
    else{
      connection.close();
      console.log("Client Attempted to Connected");
    }

    //when the client sends a message
    connection.on("message", function(message){
      //this converts that message to a string, and trims it
      newMessage = message.toString().trim();
      // this logs what the client writes to the server console
      console.log(newMessage);
    })

    // if the one connection closes, the counter is reset to 0
    // this will allow one new person too log on
    connection.on("close", function(){
      counter = 0;
    });

    // this takes the data/message from the server side to send to a client
    process.stdin.on("data", function(input){
      // this converts the input from the server to the string and trim it
      var newInput = input.toString().trim();
      //this sends the server input to the client
      connection.send(newInput);
    });

  });

}

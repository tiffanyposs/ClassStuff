//wscat -l 3000

var WebSocket = require("ws");
var client = new WebSocket("ws://localhost:3000");
var cowsay = require("cowsay");



client.on("open", function(){
  console.log("hi")
});

  process.stdin.on("data", function(data){
    
    var message = data.toString().trim();
    client.send(cowsay.say({text: message}));
  });


var double = function(x){
  var answer = x*2;
  return answer;
}

var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
server.on("connection", function (ws) {
  console.log("Client connected!");
  ws.send("You have connected to the server!");
});

/*
//SERVER FUNCTION
server.on("connection", function(ws) {
  console.log("Client connected!");
  //MUL FUNCTION
  var doublenum = function(data) {
    var num = parseInt(data.toString().trim())*2;
    ws.send(num.toString()); 	}

    ws.on("message", doublenum)


  });
  // 1st stage is input formatting -- ws.on('message')
  // 2nd stage is transformation -- parseInt, .toString
  // 3rd - output formatting --  .toString
  // 4th - output -- ws.send
  */

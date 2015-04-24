//you must log onto a client with wscat -c ws://localhost:3000
//this will send back the index position of a word, example
// message,g will return 5

var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});

server.on("connection", function(ws) {
    ws.on('message', function (message) {
      var new_array = message.split(",");
      var word = new_array[0];
      var letter = new_array[1];

        for(var i = 0; i < word.length; i++){
          if(word[i] === letter){
            ws.send(i.toString());
      }
    }
    });
  });




  // var WebSocketServer = require("ws").Server;
  // var server = new WebSocketServer({port: 3000});
  //
  // server.on("connection", function(ws) {
  //   ws.on('message', function (message) {
  //     ws.send(message);
  //   });
  // });

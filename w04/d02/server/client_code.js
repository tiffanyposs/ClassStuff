// this is the client
var WebSocketClient = require("ws");

// this is the server, 2 options for getting the server
var WebSocketServer = require("ws").Server;
var WebSocketServer = WebsocketClient.Server;


var pkg = require("ws");
var client = pkg;
var server = pkg.server;



var x = function(){
  console.log("hello");
}

x.blah = function(){
  console.log("blah");
}

x() // hello
x.blah() // blah

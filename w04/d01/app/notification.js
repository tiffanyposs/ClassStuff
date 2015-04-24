// this returns a a notification of whatever the user
// inputs into the terminal

var notifier = require('node-notifier');

process.stdin.on("data", function(data){

var new_data = data.toString();

new_data = new_data.trim();
var opts = {};
opts["title"] = "hello";
opts["message"] = new_data;
notifier.notify(opts);

});

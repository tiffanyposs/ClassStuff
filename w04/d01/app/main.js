console.log("hello");

var notifier = require('node-notifier');
notifier.notify({
  'title': 'My notification',
  'message': 'Hello, there!'
});

/*
//var notifier will grab a file package from that file
// and bring it into the the current document
// so in this case var notifier will become all the data
// from 'node-notifier'

var notifier = require('node-notifier');
var opts = {};
opts["title"] = "hello";
opts["message"] = "you are cool";
notifier.notify(opts);
*/

/*
var notifier = require('node-notifier');
var opts = {title: "hello"};
notifier.notify(opts);
*/

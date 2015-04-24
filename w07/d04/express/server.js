// make sure that you npm install express --save
var express = require('express')
var app = express();
var fs = require('fs')

app.get('/', function(req, res){
  res.send('<h1>Hello World!</h1>');
});

app.listen(3000);

console.log('listening on port 3000!');
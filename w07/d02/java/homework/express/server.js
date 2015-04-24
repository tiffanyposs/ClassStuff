var ejs = require('ejs');
var fs = require('fs');
var express = require('express')
var app = express();

app.get('/:width/:height', function(req, res){

  var height = parseInt(req.params.height)
  var width = parseInt(req.params.width)

  var str = fs.readFileSync("index.ejs", "utf8");
  var rendered = ejs.render(str, { height: height, width: width
   });
  res.send(rendered);
});

app.listen(3000);

console.log('listening on port 3000!');
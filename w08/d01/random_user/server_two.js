var request = require('request');
var express = require('express')
var app = express();

var url = "http://api.randomuser.me/";

app.get('/', function(req, res){

request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    data = JSON.parse(body)

    //user = data.results[0].user

    var name = data['results'][0]['user']['name']['first'];
    var email = data['results'][0]['user']['email'];
    var username = data['results'][0]['user']['username']

    var hash = {
    	name : name,
    	email : email,
    	username : username
    }
  }
  	// res.send(JSON.stringify(hash));
  	res.send(hash);
})

});

app.listen(3000);

console.log('listening on port 3000!');
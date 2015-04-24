var request = require('request');
var url = "http://api.randomuser.me/";
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    data = JSON.parse(body)
    console.log(data['results'][0]['user']['name']);
    console.log(data['results'][0]['user']['email']);
    console.log(data['results'][0]['user']['username']);
  }
})
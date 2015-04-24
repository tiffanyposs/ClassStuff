var express = require('express');
var bodyParser = require('body-parser');
var app = express();


// app.use(express.static('public'));

app.use(express.static('/Public'));
app.use(bodyParser.urlencoded({ extended: false }));

var adjective = ["Agitated", "Biodegradable", "Cluttered", "Dense"];
var name = ["Faces", "Geese", "Kittens", "Icicles", "Rainstorms"]
var location = ["Boston", "Munich", "New York", "Chicago", "Toronto"];
var genre = ["Country", "Pop", "HipHop", "Alternative"];


var randomString = function(x){
    var index = Math.floor(Math.random()*x.length);
    var random = x[index];
    return random
}

app.get('/', function(req, res){
var band = {
  band_name: randomString(adjective) + " " +randomString(name),
  location: randomString(location),
  genre: randomString(genre)
}
  res.send(band);
})


app.get('/randomBand', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});
  


app.listen(3000)
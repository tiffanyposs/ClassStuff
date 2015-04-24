var express = require('express');
var app = express();

app.get('/:name/:name2', function(request, response) {
  var name_one = request.params.name;
  var name_two = request.params.name2;
  	name_two = parseInt(name_two);
  	var counter = 0;
  	var array = [];
  	while(counter < 15){
  		array.push("<img src='http://placekitten.com/g/"+ name_one + "/" + name_two + "'>");
  		counter+=1;
  		name_two+=10
  	}
  	var string = array.join();
  	response.send(string);
});


app.listen(3000);

console.log("listening on port 3000")

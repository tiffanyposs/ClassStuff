var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

var items = []

function Person(first_name, last_name, email){
	this.first_name = first_name;
	this.last_name= last_name;
	this.email= email
}


app.get('/', function(req, res) {
  res.render('todo.ejs', { items: items });
});


app.post('/add', function(req, res) {

  first_name = req.body.item
  last_name = req.body.item_two
  email = req.body.item_three

  user = new Person(first_name, last_name, email)

  items.push(user)

  res.render('todo.ejs', { items: items });
})

app.listen(3000);

console.log('listening on port 3000!');
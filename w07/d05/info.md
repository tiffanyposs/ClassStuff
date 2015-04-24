###MPA - MULTIPLE PAGE APPLICATIONS

These are apps that have mulitpe pages, and it asks the server for new pages. 

Points:

* Wikipedia- Pages reloads everytime you click on a a new pages
* Search Bar 'Form' refreshes
* Reddit 
* This is the only thing that people knew how to do up until 2006.
* Rails is good for this

###SPA - SINGLE PAGE APPLICATIONS

You are asking the server for data

* AJAX allows you to do this.
* Doesn't refresh the page
* Data going back and fourth through JSON
* Google Maps
* Trello & Google Docs


###MIX OF BOTH SPA AN MPA

* Air B&B uses both
ge

####WebSockets vs AJAX

Websockets will give you info without you asking for it.

AJAX the user still has to ask for it but it won't refresh the page.


#### HTTP VERBS
* GET
* POST
* PUT
* DELETE

###GET VS POST


####Get


####Post
Changes Data on the server

```
<form action= '/something' method = 'post' ></form> 
```

###Single Responsibility Principle - SRP
This means it does one thing and does it well

Monolith- Handles everything, Rails


###Express server



You need to include express, ejs (express is dependent on it), and body parser(to handle post requests).

```
var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');

```
This is creating an express object that we are using to send data.

```
var app = express();
app.use(bodyParser.urlencoded({extended: true}));

```




The first items is what the template reads, the second is a variable that must be defined above that part.


```
  res.render('todo.ejs', { items: items });
  
```

Ways to get forms

```
req.params.name			//express
req.query.name			// query param
req.body.name			//post

'/add/:name'			//add/Sean
'/add'					//add?name=sean&age=29


```
####In-memory persistance

[Link](http://en.wikipedia.org/wiki/Persistent_memory)

As it is now, it will save your memory until the the server goes down, it is not being saved anywhere.

But what if you took everything that someone did and saved it to a separate file.



#####server.js

```
var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

var items = []

app.get('/', function(req, res) {
  // items will be empty the first time
  // this method is called
  res.render('todo.ejs', { items: items });
});

app.post('/add', function(req, res) {
  // note that we're using req.body.item
  // rather than req.params.item or
  // req.query.item
  items.push(req.body.item);
  res.render('todo.ejs', { items: items });
})

app.listen(3000);

console.log('listening on port 3000!');
```


##HTTP

####HTTP

* Full Broswer Refresh
* Ajax
* "Request-Response"

####WebSockets

* 2-way communication


####APIs- Application Programming Interface
API - source for data for the client and/or server. Its basically one big hash of key value pairs and arrays that contain data

* Its just data, with no use to a final user until you impliment it



###Homework

Number 3 on exercises allows you
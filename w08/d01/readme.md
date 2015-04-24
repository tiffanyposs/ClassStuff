##Objectives



###Using Bundler and Gemfiles

Bundler- is exactly like Package.JSON

```
$gem install bundler

```

Inside a folder write

```
$touch Gemfile

```

To the Gemfile add this text:

```
source 'https://rubygems.org'

gem 'pry'

```

```
$bundle install
```
###Using Pry
####Creating a Ruby File

In the same folder create a .rb file

Pry is used for debugging, maybe instead of puts

```
require 'pry'


num = 5
binding.pry
num = 8
binding.pry

#binding.pry is like a debugger

```

If you run this file ruby pry.rb it will stop at every binding.pry. You can go to the next binding.pry  by just typing exit. 

to exit the whole thing thing

```
disable.pry
```


##Greating your own APIs

first you must create a Gemfile and then run bundle install after you create that folder to install dependencies.

Here is what a basic server file looks like in Sinatra to send a basic Hello world API:

```
require 'sinatra'
require 'json'

get '/' do 
	content_type :json
	data = {msg: "Hello World"}
	data.to_json	
end

```


Here is a more complex example, it sends these two APIs to the server when you go to the localhost:4567/top_theaters or localhost:4567/top_dvd

```
require 'sinatra'
require 'json'

get '/top_theaters' do 
	content_type :json
	data = ["Ace Ventura", "Dumb and Dumber", "The Mask"]
	data.to_json	
end

get '/top_dvd' do 
	content_type :json
	data = { "results"=> [ {"Jurassic Park"=> 9}, {"Superman"=> 2}, {"Inception"=> 8} ]}
	data.to_json	
end
```

###Express API

```
var express = require ('express');
var app = express();

app.get('/', function(req, res){
	res.json({msg: "Hello World"});
	//also works:
	//res.send({msg: "Hello World"})
})

app.listen(3000)
```



###HTTParty

Here is an example of a simple server that accesses the randomuser API. It uses HTTParty and pry to be able to run through it

This is a good way to look through APIs

```
require 'HTTParty'
require 'pry'
url = "http://api.randomuser.me/"
response = HTTParty.get(url)
binding.pry
```

if you run this server you will enter pry. You can type the following things that will tell you about the response you got.

```
######this is the basic response things you can type
$response
$response.keys
$response.class

######this is an example of what you can type in pry to access the info inside of the hash
$user = response['results'][0]['user']
$user.keys
$user['name']
```


###Request and RandomUser

Starting example:

```
var request = require('request');
var url = "http://someurl";
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    data = JSON.parse(body)
    console.log(data);
  }
})
```
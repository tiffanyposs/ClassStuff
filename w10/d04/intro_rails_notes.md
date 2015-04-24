##Rails

```
$gem install rails

```

To create a new app. Will create a bunch of files you need to use or its dependent on.

```
$rails new [app name]

```
To start a rails server. Defaults to 3000 if you run it and go to localhost:3000 you can see a page come up already

```
$rails server

```
Creates a new model. Makes a new database migration. When you run this in terminal you can see id the db file everything that you typed in. 

```
$rails generate model Post title:text author:text content:text

```


```
$rake db:migrate
```


####Rails console

This is like an irb for rails:

```
$rails console

```
you can create a table in the irb:

```
$Post.create(title: "pizza", "author", "content", "created_at" "updated_at") VALUES (?,?,?,?,?)

```

Make: seed.rb

This will create all the posts for you

in the server file:

```
root 'post#index'
resources:post
```

To see all of you routes:

```
$rake routes

```
Post Controller:

```
class PostsController < ApplicationController
	def index
	end
end

```

Routes ------>Posts Controller
/posts/ ----> #index -----> view

Views will be index.html.erb

In this file you can add some html and ruby with <%%> as a template, but you don't have to put the html or body because it will be loaded into another file. 


###New Post

view helper

Generates a form

```
def new
	@post = Post.new
end

```

new.html.erb

```
<%= form_for @post, url: {action: 'create'} do |f| %>
<%= f.label :title %>
<%= f.text_field :title %>
<br /><br />

<%= f.label :author %>
<%= f.text_field :author %>
<br /><br />

<%= f.label :content %>
<%= f.text_area :contente %>
<br /><br />

<%= f.submit %>
<%= end %>
```
###Fun things

```
render plain: "well this is boring, yet effective, i guess"

```
```
render html: "<h1>whoa</h1>"

```

```
json_stuff = {key: "value"}
render json

```


###Sessions & Encrypted Passwords

Rails has ssession support builtin

```
$rails new session

```


Create a route in config> routes.rb
###Rails

####validates

This is an active record thing.

In post.rb you can have validations and error messages with the new.html.erb will show any errors that come in. 

In this example it will show

posts_controller.rb

```

def create
	@post = Post.new(post_params)
	if @post.save
		redirect_to post_path(@post)
	else
		render :new
	end
end

```

new.html.erb

```

<ul>
<% @posts.error.full_messages.each do |msg| %>
<li><%= msg %></li>
<% end %>
</ul>





```

class Post < ActiveRecord::Base
	validates :title, presence: true
	validates :content, presence: true
	validates :content, length: {
		maximum: 5,
		too_long: "Whoat hold your hourses"
	}
validates_length_of :content, :minimum => 3
end

```

###Views > Layout > application.html


What if you wanted to have footers in certain pages?

You put the content into the Views>Layout>application.html you can put yield: footer then on the html.erb page 

You can make a _header.html.erb in your views>layout folder with some html

```
<h1>Hello</h1>.



```

<% render "layouts/header "%>

```
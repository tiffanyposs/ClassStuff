### Recipe Project

```
$rails new entry

```

```
$rails generate model Entry name:text ingredients:text instructions:text

```
```
$rake db:migrate

```


In the seeds.rb



```

Entry.create(name: "Pizza", ingredients: "Dough, Cheese, Tomato Sauce, Toppings", instructions: "Put the toppings, sauce, and cheese on the dough and bake.")

Entry.create(name: "Rice", ingredients: "Rice, Water", instructions: "Put rice with water and cook until done.")

Entry.create(name: "Tacos", ingredients: "Tortillas, Meat, Cheese, Cabbage, Salsa", instructions: "Cook meat, place into tortillas and top with cheese, cabbage, and salsa.")

```

```
$rake db:seed

```

To the routes.rb file add:

```
  root 'entries#index'
  resources :entries
  
```
In the app/controllers add the file "entries_controller.rb"

```
class EntriesController < ApplicationController

	def index
		@entries = Entry.all
  	end

end

```

in app/views create a folder called "entries", then create a file called "index.html.erb"

```
  <h1>Welcome to my food blog!</h1>
  <% @entries.each do |entry| %>
  <h2><%= entry.name %></h2>
  <h4>Ingredients</h4>
  <h3><%= entry.ingredients %></h3>
  <p><%= entry.instructions%></p>
  <% end %>


```

###Createing a recipe

In views/entries create new.html.erb

```
  <%= form_for @entry, url: {action: 'create'} do |f| %>
  <%= f.label :name %>
  <%= f.text_field :name %>
  <br /><br />

  <%= f.label :ingredients %>
  <%= f.text_field :ingredients %>
  <br /><br />

  <%= f.label :instructions %>
  <%= f.text_area :instructions %>
  <br /><br />

  <%= f.submit %>
  <% end %>

```

To the entries_controller.rb add:

```
  	def new
  		@entry = Entry.new
 	end

	def create
	  @entry = Entry.create(entry_params)
	  redirect_to @entry
	end

	private
	  def entry_params
	  params.require(:entry).permit(:name, :ingredients, :instructions)
	end
	
```

Now if we go to localhost:300/enties/new we should see the form we just made. But oh now! Theres not show page, but we can see that it was indeed added on the main /entries page. Lets create the show page

To the entries_controller.rb (above the private part we just made) add:

```
	def show
		@entry = Entry.find_by(id: params[:id])
	end
	
```

create in views/entreis show.html.erb



<h2><%= @entry.name %></h2>
<h4>Ingredients</h4>
<h3><%= @entry.ingredients %></h3>
<p><%= @entry.instructions%></p>



###Linking everything Together

In the index.erb.html page add a link to the create new post page:


```
  <%= link_to 'Create a new entry!', new_entry_path %>
  
```

Also in the index.html.erb you can make a link to the show pages for each entry. Within the entry entries loop add/replace the name heading with this:

```
<h2><%= link_to entry.name, entry_path(entry)%></h2>

```


To the new.html.erb add :

```
<%= link_to 'cancel', entries_path %>

```

On the show.html.erby add:

```
<%= link_to 'back', entries_path %>

```

### Deleting Stuff

To our show.html.erb add this link:

```
<%= link_to 'delete', @entry, method: :delete %>

```

Then to the entries_controller.rb add:

(this must be above the private method)

```
	def destroy
		@entry = Entry.find_by(id: params[:id])
		@entry.destroy
		redirect_to entries_path
	end
	
```

###Updating Posts

Create an edit.html.erb file and add this code:

```
<%= form_for @entry, url: {action: 'update'} do |f| %>
<%= f.label :name %>
<%= f.text_field :name, value: @entry.name %>
<br /><br />

<%= f.label :ingredients %>
<%= f.text_field :ingredients, value: @entry.ingredients %>
<br /><br />

<%= f.label :instructions %>
<%= f.text_area :instructions, value: @entry.instructions %>
<br /><br />

<%= f.submit %>
<% end %>
<%= link_to 'cancel', @entry %>

```


To the entries_controller.rb add:

```
def edit
@entry = Entry.find_by(id: params[:id])
end

def update
@entry = Entry.find_by(id: params[:id])
@entry.update_attributes(entry_params)

redirect_to @entry
end

```

Then in the show.html.erb

```
<%= link_to 'edit', edit_entry_path(@entry) %>

```
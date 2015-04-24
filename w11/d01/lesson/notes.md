###Asset Pipeline Rails

#####Made by myself

app/assets/javascript

app/assets/stylesheets

#####Made by someone else

vendor/assets/javascript

vendor/assets/stylesheets


###How to

you can move for example all the bootstrap files into the vendor assets. Its better practice to use locally sometimes.

Then in:

app>assets>stylesheets>application.css

you can write in the file above the require_tree you can write

```
*=require bootstrap

*=require bootstrap-theme

```
```
 *= require bootstrap
 *= require bootstrap-theme
 *= require_tree .
 *= require_self
 
```




app>assets>javascript>application.js

You can put in the js files. //= require jquery etc to require files

```
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .

```

###Pets Notes, API with Rails

This goes in your controller so you can make json:

```
class PetsController < ApplicationController

protect_from_forgery with: null_session

	@pets = Pet.all
	respond_to do |format|
		//localhost:3000/pets
		format.html {render :index}
		//localhost:3000/pets.json
		format.json { render json: @pets }
	end
	end
	
	def show
		@pets = Pet.find_by(id: params[:id])
		#pet_json = {id: @pet.id, name: @pet.name, type: @pet.pet_type}
		if @pets
			render json: @pet
		else
			render status: 400, nothing: true
		end
	end
end
```

Use this in the js file so it won't run any of the js until the html page is loaded. You have to do this in rails because rails requires you to load the js file before the html so there will be errors in your dom, so if you add below to the beginning of your page it wont run js until the page loads.

```
"DOMContentLoaded"

```
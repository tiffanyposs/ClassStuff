require 'sinatra'
require 'json'

get '/salad' do 
	content_type :json
	data = {
		name: "Basic Salad",
	 	ingredients: ["lettuce", "tomatoes", "chicken", "cheese", "croutons"]
	}
	data.to_json	
end


# When you run this server one ruby server_movie.rb and go to the two
# the two extentions and it will send the results to that server
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

# When you run this server one ruby server_movie.rb and go to the two
# the two extentions and it will send the results to that server
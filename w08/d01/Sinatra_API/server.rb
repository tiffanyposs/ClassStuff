require 'sinatra'
require 'json'

get '/' do 
	content_type :json
	data = {msg: "Hello World"}
	data.to_json	
end

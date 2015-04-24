#default server is 4567
require 'sinatra'

get '/name' do
	response = "Tiffany"
	erb :index, locals: {name: response}
end

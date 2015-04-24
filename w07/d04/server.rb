# <!-- example of a sinatra server -->

require 'sinatra'

# example one
# get '/button_click' do
# 	"<h1>Hello #{params[:name]}</h1>"
# end

# get '/' do
# 	erb :index
# end

# this is passing name from the server



# example two
get '/' do
	name_param = params[:name]||nil
	erb :index, locals: {name: name_param}
end
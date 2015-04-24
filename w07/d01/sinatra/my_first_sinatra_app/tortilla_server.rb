#gem install sinatra to install it
#defaults to 4567 local host

require 'sinatra'

get '/tortilla/rice' do
	puts "rice"
	response= '<h2>Mmmmmmmm</h2>'
	erb :tortilla, locals: {name: response}
end

get '/tortilla/guac' do
	puts "guac"
	response= '<h2>Ahhhhhhhh</h2>'
	erb :tortilla, locals: {name: response}
end

get '/tortilla/:id' do
	puts params[:id]
	path= params[:id]
	response = "<p>Well, #{path} is good on a tortilla too</p>"
	erb :tortilla, locals: {name: response}
end

get '*' do
	response= "<p>We only server burritos here</p>"
	erb :tortilla, locals: {name: response}
end

# get '/tortilla/:id' do
# 	puts params[:id]
# 	path= params[:id]
# 	if path == "rice"
# 		response = "<h2>Mmmmmmm</h2>"
# 	elsif path == "guac"
# 		response = "<h2>Ahhhhhhhh</h2>"
# 	else
# 		response = "<p>Well, #{path} is good on a tortilla too</p>"
# 	end
# 	erb :tortilla, locals: {name: response}
# end

# get '*' do
# 	response= "<p>We only server burritos here.</p>"
# 	erb :tortilla, locals: {name: response}
# end




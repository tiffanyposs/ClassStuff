require 'sinatra'

get '/' do 
	erb :index
end

# <html>
# 	<body>
# 		<h1>Hello World, <%= name %> </h1>
# 	</body>
# </html>


#erb :index tells it to render erb
#erb is a method
#default server is 4567




##basic server will host the erb file
# require 'sinatra'

# get '/' do 
# 	erb :index
# end
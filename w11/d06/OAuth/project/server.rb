require 'pry'
require 'sinatra'
require 'httparty'


enable :sessions
set :session_secret, 'secret_lovers'

#THIS IS FOR REFERENCING FROM THE BASH PROFILE
# for express: process.env.ENV_VARIABLE
client_id = ENV['GITHUB_CLIENT_ID'] 
client_secret = ENV['GITHUB_CLIENT_SECRET']

get '/' do
  base_url = "https://github.com/login/oauth/authorize"
  	#secure random is a library within ruby that is included
  state = SecureRandom.urlsafe_base64 
  session["state"] = state 

	#build a query
	#these are the required perameters
  query = {
    state: state,
    scope: "user",
    client_id: client_id
  }

  encoded_query = URI.encode_www_form(query) 
  @url = base_url + "?" + encoded_query
  if session["access_token"]
  	response = HTTParty.get("https://api.github.com/user?access_token=" + session["access_token"], 
  		headers: {"User-Agent" => "demo_app"}
  		)
  	@image_url = response["avatar_url"]
  end
  render(:erb, :index)

end

get '/oauth_callback_route' do
	#once the binding.pry starts once you try loggin in with github,
	#you can type in params in the terminal once you enter pry and you should see the
	#code and state should come back
	##binding.pry
	# binding.pry #make sure session is equal to params
	if session["state"]  == params["state"]
		response = HTTParty.post("https://github.com/login/oauth/access_token",
			body: {
				client_id: client_id,
				client_secret: client_secret,
				code: params["code"],
				redirect_uri: "http://127.0.0.1:4567/oauth_callback_route"
				},
			headers: {
				"accept" => "application/json"
				})
		session["access_token"] == response["access_token"]
	# binding.pry #response
	end

	redirect('/')
end


get "/logout" do
	session["access_token"] = nil
	redirect ('/')
end







# require 'pry'
# require 'sinatra'
# require 'httparty'

# client_id = ENV["GITHUB_CLIENT_ID"]
# client_secret = ENV["GITHUB_CLIENT_SECRET"]
# callback = "http://127.0.0.1:4567/oauth_callback_route"

# enable :sessions
# set :session_secret, 'secret_lovers'



# get "/" do 
# 	base_url = "https://github.com/login/oauth/authorize"
# 	state = SecureRandom.urlsafe_base64
# 	session["state"] = state
# 	query ={
# 		state: state,
# 		scope: "user",
# 		client_id: client_id,
# 	}
# 	encoded_query = URI.encode_www_form(query)
# 	@url = base_url + "?" + encoded_query
# 	if session["access_token"]
# 		response = HTTParty.get("https://api.github.com/user?access_token="+session["access_token"],
# 		 headers: {"User-Agent" => "demo_app"})
# 		@image_url = response["avatar_url"]
# 	end
# 	render(:erb, :index)
# end

# get "/oauth_callback_route" do 
# 		if session["state"] == params["state"]
# 			response = HTTParty.post("https://github.com/login/oauth/access_token",
# 				body: {
# 					client_id: client_id,
# 					client_secret: client_secret,
# 					code: params["code"],
# 					redirect_uri: "http://127.0.0.1:4567/oauth_callback_route"

# 					},
# 				headers: {
# 					"accept" => "application/json"
# 				}

# 				)
# 			session["access_token"] = response["access_token"]
# 		end
# 		redirect ("/")
# end

# get "/logout" do 
# 	session["access_token"] = nil
# 	redirect("/")
# end
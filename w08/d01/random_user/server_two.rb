require 'httparty'
require 'sinatra'
require 'json'

get '/' do 
	url = "http://api.randomuser.me"
	response = HTTParty.get(url)
	content_type :json
	user = response['results'][0]['user']
	data =  {first: user['name']['first']
			last: user['name']['last']
			email: user['email']
			}
	data.to_json
end
#this program uses the google and the instagram api. the user inputs
#a location in the input bar, then that word is found with google maps,
#then oen you have the coordinates of that location its input into the
#instagram api to find photos from that location. 

require 'httparty'
require 'sinatra'
require 'json'
require 'pry'

#serves the erb file with the input bar
get '/' do 
	erb(:index)
end

get '/city' do 
#start google maps
#this gets the city params from the input box
location = request.params["city"].gsub(" ", "+")

google = "https://maps.googleapis.com/maps/api/geocode/json?address=" + location + "=AIzaSyDFns--eX60R0ytKheVrBuoSDVYbshr7M4"
response_google = HTTParty.get(google)

lat = response_google['results'][0]['geometry']['location']['lat']
long = response_google['results'][0]['geometry']['location']['lng']

#start instagram
url = "https://api.instagram.com/v1/media/search?lat=#{lat}&lng=#{long}&client_id=49df250e4b714bf193b156a21e93cdfa"
# https://api.instagram.com/v1/media/search?lat=40&lng=-72
response = HTTParty.get(url)

image_array = []
image = response['data'][0]['images']['standard_resolution']['url']

i = 0
while i < response['data'].length  do
	array_string = response['data'][i]['images']['standard_resolution']['url']
   image_array.push(array_string)
   i +=1
end

erb(:results, locals: {image_array: image_array})

end



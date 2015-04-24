require 'httparty'
require 'pry'


url = "http://api.randomuser.me/"
response = HTTParty.get(url)
location = response['results'][0]['user']['location']['city'].gsub(" ", "+")

puts location

google = "https://maps.googleapis.com/maps/api/geocode/json?address=" + location + "=AIzaSyDFns--eX60R0ytKheVrBuoSDVYbshr7M4"
response_google = HTTParty.get(google)

lat = response_google['results'][0]['geometry']['location']['lat']
lng = response_google['results'][0]['geometry']['location']['lng']

puts lat
puts lng


# this ruby command line program uses the city location in the random user api
# and then take that city and look it up on google geocode (must be activated outside
# 	of google maps). It will determine the long and lat of that city an print it in the
# 	terminal
puts "what is the weather?"
	weather = gets.chomp
puts "what is the temperature?"
	temp = gets.chomp


def weather_man(weather, temp)

if weather == "rainy" && temp == "cold"
	puts "better stay inside"
elsif weather == "rainy" && temp == "hot"
	puts "sounds like a gross combo"
elsif weather == "sunny" && temp == "hot"
	puts "might be best to go swimming"
elsif weather == "windy" && temp == "cold"
	puts "bundle up!"
elsif weather == "windy" && temp == "hot"
	puts "Tornado Warning!"
else
	puts "not valid!"
end
end

weather_man(weather, temp)
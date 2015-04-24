characters = ["Mario", "Luigi", "Peach",
  "Toad", "Sonic", "Tails",
  "Robotnick", "Crash Bandicoot", "Nathan Drake",
  "Solid Snake"]

 new_char = []

characters.each do |each|
	each_downcase = each.downcase
	new_char.push(each_downcase)
end

char = new_char.select{|c|
	c.include?("c")
}

puts char

# this program will take a list of chararacters and downcase them
# then it will make a new array char that only includes characters that include c
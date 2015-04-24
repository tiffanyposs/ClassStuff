console = {
  "Nintendo" => ["Mario", "Luigi", "Peach", "Toad"],
  "Sega" => ["Sonic", "Tails", "Robotnick"],
  "Sony" => ["Crash Bandicoot", "Nathan Drake", "Solid Snake"]
}

console.each do |key, value|
	 new_value = value.join(", ")
	puts "#{key} has the following characters #{new_value}."
end


# nums = [1,2,3]
# nums.each{|n| puts n}
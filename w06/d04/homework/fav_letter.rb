puts ("Pick a letter!")
letter = gets.chomp

letter_array = []

names = ["Janet", "Wilber", "Dominique", "Carli", "Pinkie", 
		"Pietro", "Devyn", "Heaven", "Oma", "Astrid"]

names.each do |each|
	x = each.downcase

	if x.include?(letter)
	letter_array.push(each)
	puts each
	end
end

print letter_array
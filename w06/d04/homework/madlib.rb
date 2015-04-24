string = "Here's the NOUN of a ADJECTIVE NOUN
Who was VERBing up three very ADJECTIVE NOUNs.
All of them had NOUN of ADJECTIVE, like their NOUN,
The ADJECTIVE one in NOUN.

Here's the NOUN, of a NOUN named NOUN,
Who was busy with three NOUNs of his own,
They were four NOUNs, VERBing all together,
Yet they were all ADJECTIVE.

Till the one day when the NOUN met this NOUN
And they knew it was much more than a NOUN,
That this NOUN must somehow VERB a NOUN.
That's the way we all VERB the ADJECTIVE NOUN."


puts "enter some nouns"
	nouns = gets.chomp

puts "enter some adjectives"
	adj = gets.chomp

puts "enter some verbs"
	verbs = gets.chomp


noun_array = nouns.split(" ")
adj_array = adj.split(" ")
verb_array = verbs.split(" ")


# x = Random.rand(0...noun_array.length)




while string.include? "NOUN" || "ADJECTIVE" || "VERB"
	string.sub!("NOUN", noun_array[Random.rand(0...noun_array.length)])
	string.sub!("ADJECTIVE", adj_array[Random.rand(0...adj_array.length)])
	string.sub!("VERB", verb_array[Random.rand(0...verb_array.length)])
end

print string
# string.gsub!("ADJECTIVE", "PRETTY")
# string.gsub!("VERB", "GO")

# print string

# madlib = array.map{|word| 
# 	if word == "NOUN"
# 		word = "MOTHER"
# 	elsif word == "ADJECTIVE"
# 		word = "BEAUTIFUL"
# 	elsif word == "VERB"
# 		word = "GO"
# 	else
# 		word = word
# 	end
# 	}



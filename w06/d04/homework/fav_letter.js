console.log("pick a letter")

var names = ["Janet", "Wilber", "Dominique", "Carli", "Pinkie", 
		"Pietro", "Devyn", "Heaven", "Oma", "Astrid"]


process.stdin.on("data", function(data){

var letter = data.toString().trim();
var letter_array = [];

names.forEach(function(name){
	var each = name.toLowerCase()
	if(each.indexOf(letter) > -1){
		letter_array.push(each);
	}
})
	console.log(letter_array);
	process.exit();

})








// puts ("Pick a letter!")
// letter = gets.chomp

// letter_array = []

// names = ["Janet", "Wilber", "Dominique", "Carli", "Pinkie", 
// 		"Pietro", "Devyn", "Heaven", "Oma", "Astrid"]

// names.each do |each|
// 	x = each.downcase

// 	if x.include?(letter)
// 	letter_array.push(each)
// 	puts each
// 	end
// end

// print letter_array
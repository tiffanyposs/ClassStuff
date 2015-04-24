var characters = ["Mario", "Luigi", "Peach",
              "Toad", "Sonic", "Tails",
              "Robotnick", "Crash Bandicoot", "Nathan Drake",
              "Solid Snake"];

var upcase_char = characters.map(function(char){
	return char.toUpperCase();
})

console.log(upcase_char);
var characters = ["Mario", "Luigi", "Peach",
  "Toad", "Sonic", "Tails",
  "Robotnick", "Crash Bandicoot", "Nathan Drake",
  "Solid Snake"]

 var new_char = []

characters.forEach(function(each){
	new_each = each.toLowerCase();
	new_char.push(new_each);
})

var c_array = []

new_char.forEach(function(each){
	if(each.indexOf("c") > -1){
		c_array.push(each);
	}
})

console.log(c_array)



// var c_charachers - characters.filter(function(char){
// 	return char.toUppoerCase().indexOf("c") > -1;
// });

// console.log(c_charachers)
//this checks if there is more than one vowel next to eachother
//

var word = process.argv[2];
var array = word.split("");
var index_num = [];
var vowel_array = [];
var conso_array = []

var x = 0;
var y = 1;
var next_counter = 0

var vowelCounter = function(string){
	array.forEach(function(each){
		if(each === "a" || each === "e" || each === "i" || each === "o" || each === "u"){
			var index = array.indexOf(each);
			index_num.push(index);
			vowel_array.push(each);
			}
		else{
			conso_array.push(each);
		}
		});

		var vowels = vowel_array.join("");
		var conso = conso_array.join("");

		while(y < index_num.length){
			if(index_num[y]-index_num[x] === 1){
				next_counter++;
			}
			x++;
			y++;
		}
		if(next_counter > 0){
			console.log("nope");
			console.log(vowels);
			console.log(conso);
		}
		else{
			console.log("success");
			console.log(vowels);
			console.log(conso);
		}
	}

vowelCounter(word);

// this checks if there is more than one vowel in a word.

var word = process.argv[2];
var array = word.split("");
var counter = 0;

array.forEach(function(each){
	if(each === "a" || each === "e" || each === "i" || each === "o" || each === "u"){
		counter++;
	}
});

	if(counter >= 2){
		console.log("It checks out")
	}
	else{
		console.log("It doesn't check out")
	}
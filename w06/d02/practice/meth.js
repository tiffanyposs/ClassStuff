console.log("give me a number")

process.stdin.once("data", function(data){
	var number_string = data.toString().trim();
	var number = parseInt(number_string);

	console.log("give me a string")
	process.stdin.once("data", function(data){
		var string = data.toString().trim();
		if(number % 2 === 0){
			console.log(string);
		}
		else{
			var array = string.split("");
			var x = []
			for(var i = array.length-1; i >= 0; i--){
				x.push(array[i])				
			}
			var new_string = x.join("");
			console.log(new_string);
		}
		process.stdin.end();
	})
})





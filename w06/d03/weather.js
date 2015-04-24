	console.log("what is the weather?")
	process.stdin.once("data", function(data){
	var weather = data.toString().trim();
		 	
	console.log("what is the temperature?")
	process.stdin.once("data", function(data){
	var temp = data.toString().trim();
		

		if(weather == "rainy" && temp == "cold"){
			console.log("better stay inside")
		}
		else if(weather == "rainy" && temp == "hot"){
			console.log("sounds like a gross combo")
		}
		else if(weather == "sunny" && temp == "hot"){
			console.log("might be best to go swimming")
		}
		else if(weather == "windy" && temp == "cold"){
			console.log("bundle up!")
		}
		else if(weather == "windy" && temp == "hot"){
			console.log("Tornado Warning!")
		}
		else{
			console.log("not valid")
		}
		process.stdin.end();

	}) // end second

})//end first




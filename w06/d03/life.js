console.log("Do you want to know the meaning of life?");

process.stdin.on("data", function(answer){
	var ans = answer.toString().trim();
		if(ans==="y"){
			console.log(42);
			process.exit();
		}
		else{
			console.log("bunnies");
			process.exit();
		}
});
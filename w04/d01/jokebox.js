var jokes = ["Why did the chicken cross the road",
"What did one bartender...",
"What is the difference between..."];

var random_joke = jokes[Math.floor(Math.random()*jokes.length)];

console.log(random_joke);
console.log("Would you like to hear another?");

process.stdin.on("data", function(data){

  var new_data = data.toString();
  new_data = new_data.trim().toLowerCase();

  var random_joke2 = jokes[Math.floor(Math.random()*jokes.length)];

if(new_data === "y" || new_data === "yes"){
  console.log(random_joke2);
  console.log("Would you like to hear another?");
}

else if(new_data === "n" || new_data === "no"){
  process.exit();
}

});

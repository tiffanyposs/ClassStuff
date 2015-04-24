console.log("Press Enter to continue")

process.stdin.on("data", function(data){

  var new_data = data.toString();
  new_data = new_data.trim().toLowerCase();

  if(new_data === "exit"){
    process.exit();
  }
  else{
    console.log("Press Enter to continue");
  }
});

/*
process.stdin.on("data", function(data){

  var new_data = data.toString();
  new_data = new_data.trim().toLowerCase();

  if(new_data === "hello"){
    console.log("hi!");
  }
  else{
    console.log("right right");
  }
});
*/

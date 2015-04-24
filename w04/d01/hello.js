//this creates a node app that will respond
// "hi!" if the word hello is put in, and will
// respond "right right" if its anything else

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

var client = new WebSocket("ws://localhost:3000");



client.addEventListener("open", function() {
  console.log('connected');

});


var body = document.querySelector("body");
var ul = document.querySelector("ul");
var button = document.getElementById("button");


button.addEventListener("click", function(){
  var input = document.getElementById("input");
  var messageObject = {name: "User1", msg: input.value};
if(input.value.trim() != ""){
  client.send(JSON.stringify(messageObject));
  input.value = "";
}
})


input.addEventListener("keypress", function(){
  if(event.keyCode === 13){
    button.click();
  }
});

client.addEventListener("message", function(message) {
  var newMessage = JSON.parse(message.data);
  var ul = document.querySelector("ul");
  var li = document.createElement("li");
  li.innerText = newMessage.name + ": " + newMessage.msg;
  ul.insertBefore(li, ul.firstChild);
});

/*
var client = new WebSocket("ws://localhost:3000");


  client.on("open", function(){
    console.log("Connected...");
  })

  process.stdin.on("data", function(data){
    var newData = data.toString().trim();
    client.send(newData);
  })

  client.on("message", function(message){
    newMessage = message.toString().trim();
    console.log(newMessage);
  })

  client.on("close", function(connection){
    console.log("Disconnected form the Server");
    process.exit();
  })

  */

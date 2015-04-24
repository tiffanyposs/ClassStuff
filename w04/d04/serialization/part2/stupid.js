var client = new WebSocket("ws://localhost:3000");

// this will write connected... on one line in the browser
//first you must make a server using wscat -l 3000 in terminal or write a server

client.addEventListener("open", function(connection) {
  console.log('connected');


var body = document.querySelector("body");
var ul = document.querySelector("ul");
var button = document.getElementById("button");

// var addUsername = document.getElementById("username");
// var userButton = document.getElementById("userbutton")
// var username = "Anonymous"

button.addEventListener("click", function(){
  var input = document.getElementById("input");
  //var message = input.value;
  //makes an message object that takes a username and the input value
  //var emptyInput = input.value.trim()
  var messageObject = {name: "username", msg: input.value};

  if(input.value.trim() != ""){
    client.send(JSON.stringify(messageObject));
    input.value = "";
  }
})
/*
userButton.addEventListener("click", function(){
  var input = document.getElementById("input");
  //var message = input.value;
  //makes an message object that takes a username and the input value
  //var emptyInput = input.value.trim()
  username = input.value;
  */
/*
if(input.value.trim() != ""){
  client.send(JSON.stringify(messageObject));
  input.value = "";
}
*/
})


input.addEventListener("keypress", function(){
  if(event.keyCode === 13){
    button.click();
  }
});

client.addEventListener("message", function(message) {
  console.log(message.data);
  var newMessage = JSON.parse(message.data);
  console.log(newMessage);
  var ul = document.querySelector("ul");
  var li = document.createElement("li");
  li.innerText = newMessage.name + ": " + newMessage.msg;
  ul.insertBefore(li, ul.firstChild);
});

});

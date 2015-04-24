var ws = new WebSocket("ws://localhost:3000");

// this will write connected... on one line in the browser
//first you must make a server using wscat -l 3000 in terminal or write a server

ws.addEventListener("open", function(evt) {
  console.log('connected');

});

// this grabs a the body and makes a ul element
var body = document.querySelector("body");
var ul = document.createElement("ul");
//ul.style.list-style = none;
body.appendChild(ul);

// this declares the button id
var button = document.getElementById("button");

//this says upon click of send, it will allow them to send messages to the server
button.addEventListener("click", function(){
  var input = document.getElementById("input");
  var message = input.value;
  ws.send(message);
  input.value = "";
})
// on pressing enter
input.addEventListener("keypress", function(){
  if(event.keyCode === 13){
    button.click();
  }
});
//this writes on the  browser whatever you type in terminal
//as a list element
ws.addEventListener("message", function(evt) {
  //var message = evt.data;


  var ul = document.querySelector("ul");
  var li = document.createElement("li");
  li.innerText = evt.data;
  //this will put the list element at the top of the list
  ul.insertBefore(li, ul.firstChild);
});



//PART 3
/*


var ws = new WebSocket("ws://localhost:3000");

// this will write connected... on one line in the browser
//first you must make a server using wscat -l 3000 in terminal or write a server

ws.addEventListener("open", function(evt) {
  console.log('connected');

});

// this grabs a the body and makes a ul element
var body = document.querySelector("body");
var ul = document.createElement("ul");
body.appendChild(ul);


//this writes on the  browser whatever you type in terminal
//as a list element
ws.addEventListener("message", function(evt) {
  //var message = evt.data;
  var ul = document.querySelector("ul");
  var li = document.createElement("li");
  li.innerText = evt.data;
  //this will put the list element at the top of the list
  ul.insertBefore(li, ul.firstChild);
});
*/


//PART 2
/*
var ws = new WebSocket("ws://localhost:3000");

// this will write connected... on one line in the browser
//first you must make a server using wscat -l 3000 or write a browser
ws.addEventListener("open", function(evt) {
  console.log('connected');

});

// this grabs a the body and makes a ul element
var body = document.querySelector("body");
var ul = document.createElement("ul");
body.appendChild(ul);


//this writes on the  browser whatever you type in terminal
//as a list element
ws.addEventListener("message", function(evt) {
  var ul = document.querySelector("ul")
  var li = document.createElement("li");
  li.innerText = evt.data;
  ul.appendChild(li);
});

*/



//PART 1
/*
var ws = new WebSocket("ws://localhost:3000");

// this will write connected... on one line in the browser
//first you must make a server using wscat -l 3000 or write a browser
ws.addEventListener("open", function(evt) {
  console.log('connected');
  document.write("connected...<br>")
});


//this writes on the  browser whatever you type in terminal
ws.addEventListener("message", function(evt) {
  console.log(evt.data);
  document.write(evt.data + "<br>");
});

*/

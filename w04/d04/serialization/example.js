//server side
var songs = ["Danger zone", "I need a hero", "My Way"];

ws.on("connection", function(connection){
  connection.send(JSON.Stringify(songs));
});


// client side
var song = {
  title: "My Way",
  artist: "Limp Bizkit"
}

client.on("message", function(message){
  var songs = JSON.parse(message);
  console.log(song.title);
})

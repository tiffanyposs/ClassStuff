//mikeJ.fullname() in browser terminal it will down
var mikeJ = new Player({
	firstName: "Michael",
	lastName: "Jorden"
});

var kobe = new Player({
	firstName: "Kobe",
	lastName: "Bryant"
})


var playersCollection = new PlayerCollection()

playersCollection.add(mikeJ)
playersCollection.add(kobe)

var mikeView = new PlayerView({model: mikeJ})
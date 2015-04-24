var Article = Backbone.Model.extend({
	defaults: {
		author: 'Your Mom',
		headline: 'nothingnothingnothing',
		content: 'blahblahblahblahblahblahblahblah',
		photo_url: 'http://img3.wikia.nocookie.net/__cb20100419210629/marvel_dc/images/1/14/Superman_0002.jpg'
	},
	initialize: function(){
		console.log("A new article has been written.");
		// a heads up on any change of state
		this.on('change:content', function(){
			console.log("Who let that copy through?");
		});
		this.on('change', function(){
			console.log('STOP THE PRESSES!!!');
		});
		this.on("invalid", function(model, error){
			console.log(error);
		});
	},

	validate: function(attributes){
		var stuff = attributes.photo_url;
		if( http(stuff) != "http://"){
			return "This is not a photo";
		} if(attributes.author === undefined){
			return"NO AUTHOR";
		}if(attributes.headline === undefined){
			return "NO HEADLINE";
		}if(attributes.content === undefined){
			return "NO CONTENT";
		}
	},
});


// var address = "http://localhost:3000"

var http = function(address){
	var res = address.substring(0, 7)
	return res
}

// http(address)



// var newArticle = new Article({
//   author: "Peter Parker",
//   headline: "Spiders attack!",
//   content: "After spiders killed my parents, I decided to become a crime fighter",
//   photo_url: "http://img3.wikia.nocookie.net/__cb20100419210629/marvel_dc/images/1/14/Superman_0002.jpg"
// }, {validate: true})


// console.log(newArticle)
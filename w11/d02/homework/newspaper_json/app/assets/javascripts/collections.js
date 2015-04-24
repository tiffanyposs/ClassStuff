var ArticlesCollection = Backbone.Collection.extend({
	model: Article,
	 url: 'http://localhost:3000/articles/'
});

var articles = new ArticlesCollection();

console.log(articles)


var article1 = new Article( {author: "Peter Parker",
  headline: "Spiders attack!",
  content: "After spiders killed my parents, I decided to become a crime fighter",
  photo_url: "http://img3.wikia.nocookie.net/__cb20100419210629/marvel_dc/images/1/14/Superman_0002.jpg"
});
console.log(article1.attributes.headline)
articles.create(article1, {
  success: function(response) {
    article1.set({headline: 'Spiders Hits Him!'});
    article1.save();
  }
});



var article2 = new Article({author: 'Little Moe', headline: 'Frog!'});
articles.create(article2, {
  success: function(response) {
    article2.set('id', response.toJSON().id);
    console.log(article2.toJSON())
    // article2.destroy();
  }
});


articles.on("change:headline", function(article){
	console.log("Your article has been changed to " + article.get('headline'))
})

article1.set({headline: "Ralph"})


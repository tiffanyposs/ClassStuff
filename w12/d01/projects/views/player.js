var PlayerApp = PlayerApp || {models: {}, collections: {}, views: {}};

var PlayerView = Backbone.View.extend({
	tagName: 'li',
	className: 'player',
	initialize: function(){

	},
	render: function(){
	this.$el.html(this.model.fullname());
	}
})

//this is the the 
// mikeView.render();
// mikeView.$el;
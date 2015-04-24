var Player = Backbone.Model.extend({
	fullname: function(){
		return this.get('firstName') + ' ' + this.get('lastName')
	}
})
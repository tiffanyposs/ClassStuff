:evar Pet = Backbone.Model.extend({
	//sets defaults
	defaults: {
		name: "T-1000",
		type: "Terminator"
	}, //this makes the pet
	initialize: function(){
		console.log("your pet has been created");
		this.on("change", function(){
			console.log("something is afoot"); 
		}); this.on("change:name", function(){
			console.log("thats better than Ochocinqo");
		}); this.on("invalid", function(model, error){
			console.log(error);
		})
	}, //this validates that all manditory areas have setting(fixed when added the defaults)
	validate: function(attr){
		if(attr.name === undefined){
			return "NO NAME!";
		} if(attr.type === undefined){
			return "NO TYPE!";
		}
	}
});

var pet1 = new Pet()

var pet2 = new Pet({
	name: "Salty",
	type: "Cat",
	id: 2
})


pet2.set({name: "Pepper"})

pet1.set({name: "fluffy", type: "hampster", id: 1});
console.log(pet1)
console.log(JSON.stringify(pet1));
console.log(pet1.toJSON());
console.log(pet1.get("name"));
console.log(pet1.attributes);
console.log(pet1.attributes.name);

//logs a string about the pet
console.log(pet1.get("name") + " is a " + pet1.get("type"))
console.log(pet2.attributes.name + " is a " + pet2.attributes.name)


//if defaults arn't set above in the Pet pet3 will end up being an 
//empty object and return NO NAME or NO TYPE, but if you do include the
//
var pet3 = new Pet();
pet3.set({ name: "Big Moe", id: 3}, {validate: true})
console.log(pet3.attributes)
// console.log(pet3);


//these are different methods you can call
console.log("BLAHBLDJFKLSDJKFSLDJKFSDFKJDSK")
console.log(_.keys(pet1))
console.log(_.values(pet1['attributes']))
console.log(_.pairs(pet1['attributes']))
console.log(_.pick(pet1['attributes'], 'name'))
console.log(_.pick(pet1['attributes'], 'type'))
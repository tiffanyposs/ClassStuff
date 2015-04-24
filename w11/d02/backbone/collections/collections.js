var PetsCollection = Backbone.Collection.extend({
	model: Pet
})

var pets = new PetsCollection(pet1);
pets.add(pet2)
console.log(pets)
pets.remove(pet2)
console.log(pets.length)

pets.add([pet2, pet3])
console.log(pets)

//this adds a pet but will not set it to a variable name
pets.add({name:"Little Moe", type: "frog", id: 4})
console.log(pets)


console.log(pets.get(4))
console.log(pets.get(2)['attributes'].name)
console.log(pets.get(2).attributes.name)

//cid = client id
// a client id is assigned by backbone as they are created.
console.log(pets.get(2)['cid'])
console.log(pets.get(2).cid)

// // removes all pets
// pets.reset()
// console.log(pets)

//this replaces everything with pet 3
//pets.set(pet3)


pets.on("add", function(pet){
	console.log("There's a new " + pet.get('type') + " in town named " + pet.get('name'))
})
pets.add({name: "Frick", type: "Goldfish", id: 5})



pets.on("change:name", function(pet){
	console.log("Your pet has been changed to " + pet.get('name'))
})

pet1.set({name: "Ralph"})
pet1.set({type: "Dog"})

console.log("ahahhahahahhahahahhah")

console.log(pets)
console.log(_.map(pets.models, function(pet){  return pet.attributes}))
console.log(_.pluck(pets.models, "attributes"))
console.log(_.each(pets.models, function(each){ console.log(each.attributes)}))
console.log(_.indexOf(["Tiffany", "Jason", "Karl"], "Jason"))
console.log(_.some([pet1.location, pet2.location]))
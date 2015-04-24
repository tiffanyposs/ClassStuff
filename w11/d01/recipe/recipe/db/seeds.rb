# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Entry.create(name: "Pizza", ingredients: "Dough, Cheese, Tomato Sauce, Toppings", instructions: "Put the toppings, sauce, and cheese on the dough and bake.")

Entry.create(name: "Rice", ingredients: "Rice, Water", instructions: "Put rice with water and cook until done.")

Entry.create(name: "Tacos", ingredients: "Tortillas, Meat, Cheese, Cabbage, Salsa", instructions: "Cook meat, place into tortillas and top with cheese, cabbage, and salsa.")

In the underscore_template.html, between script tags:

var template = _.template("<h1>Hello, <%= name %></h1>")
var name_prompt = prompt("What is your name?")
document.write(template(name: name_prompt))



//this changes the image, you have to declare the class or tag in ""
//then you call that variable, .innerText will get the text and change it to whatever
var heading = document.querySelector("span.hero_title");
heading.innerText = "Puppies are awesome!";

//this will set an image to a variable then call it by the tag
//then you take that variable and select the src, and set it to the new image url
var image = document.querySelector("img.hero_image");
image.src = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQj0185yHXWwe0yAJfDQay34_FP764Yvz10CLagxd1ywkpJLtAEvVqHy2c";

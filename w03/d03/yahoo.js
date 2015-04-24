// changes the text of a button
var search = document.querySelector("#search-submit");
search.innerText = "Let me yahoo that for you!";

// makes a pop-up alert when you click the button
search.addEventListener("click", function(){
  alert("Thanks for listening")
})

// changes the placeholder in the searchbar
var place = document.querySelector("#p_13838465-p");
place.placeholder = "Type what you want!"

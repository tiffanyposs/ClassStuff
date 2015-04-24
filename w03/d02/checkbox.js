var button = document.querySelector("button");
var checkbox = document.querySelector("input.checked")
//var ischecked = checkbox.checked;
var eventname = "click";


var doAlert = function(){
  if(checkbox === true){
    alert('The button is clicked');
  }
  else{
    alert('The button is not clicked');
  }
};

button.addEventListener("click", doAlert)

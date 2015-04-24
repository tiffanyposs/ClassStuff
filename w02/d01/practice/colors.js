var colors = {
  dan: "purple",
  lisa: "kale",
  carl: "green",
  lenny: "pink",
  tina: "maroon",
  ted: "yellow",
  crawford: "pink",
  kobe: "silver",
  david: "white",
  sean: "purple",
  nina: "black",
  robyn: "aqua",
  larry: "orange",
  sam: "purple"
}

var keys = Object.keys(colors);
// grabs the keys ["dan", "lisa"...]


for(var i = 0; i < keys.length; i++) {
  if(colors[keys[i]] === "pink" || colors[keys[i]] === "purple"){
    colsole.log(keys[i]);
  }
}

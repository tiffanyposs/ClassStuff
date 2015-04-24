
var blue = {
  "Heisenberg": "Hello, anyone home?",
  "Cap'n Cook": "Science, friend!",
  "James McGill": "Ring, ring!"
}
var ciudad = {
  "Vuente": "Salud!",
  "Gus": "One taste and you'll know.",
  "Tio": "Family is all."
}

var mergeHashes = function(hash1, hash2){
  var merged = {}
  var hash1keys = Object.keys(hash1);
  var hash2keys = Object.keys(hash2);

  for(var i = 0; i<hash1keys.length; i++){
    var key1 = hash1keys[i];
    merged[key1] = hash1[key1];
  }

  for(var i = 0; i<hash2keys.length; i++){
    var key2 = hash2keys[i];
    merged[key2] = hash1[key2];
  }

  return merged;

}

var happyFamily = mergeHashes(blue, ciudad);

console.log(happyFamily)



/*
var mergeHashes = function(hash1, hash2){
  var newHash = [hash1, hash2];
  return newHash;
}
*/
/*
var mergeHashes = function(hash1, hash2){
  var newHash = []
  for(var i = 0; i<= hash1.length; i++){
    newHash =+ hash1[i];
  }
  for(var x = 0; x<= hash2.length; x++){
    newHash += hash2[x];
  }
  return newHash
}
*/
/*
var mergeHashes = function(hash1, hash2){
  var newHash = hash1;
  for(var i = 0; i <= hash2.length; i++){
  newHash.push(hash2[i]);
}
  return newHash
}
*/

//not

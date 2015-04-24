var fun = ["pretzels", "cheez-its", "m&ms"];
var work = ["raisins", "dried apricots", "nuts"];

var mergeArray = function(array1, array2){
  var newArray = array1.concat(array2);
  return newArray;
}

var trailMix = mergeArray(fun, work);

console.log(trailMix)
// trailMix now equals ["pretzels","raisins", "cheez-its", "dried apricots", "m&ms", "nuts"];

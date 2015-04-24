var ary = ["One", "Two", "Four"]


var srt = function(arrays){
  for (var i = 0; i < arrays.length; i++){
    arrays[i] = arrays[i].toLowerCase();
  }
  //  return arrays;
  //console.log(srt(ary));
  arrays.sort();
  return arrays;
}
console.log(srt(ary));

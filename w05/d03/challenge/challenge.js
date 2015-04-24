var fs = require('fs');

var arg1 = process.argv[2];
var arg2 = process.argv[3];

fs.readFile(arg1, function(err, data) {
    var array1 = [];
 

    var text1 = data.toString();
    var arr1 = text1.split("\n");
    arr1.forEach(function(each){
      array1.push(each);
    })//end each

fs.readFile(arg2, function(err, data) {
   var array2 = [];
    var text2 = data.toString();
    var arr2 = text2.split("\n");
    arr2.forEach(function(each){
      array2.push(each);
    });//end each 

    //below combines the two arrays every other then removes any undefined positions
    //that might occure due to one array being longer than the other
    var array3 = [];
    if(array1.length > array2.length){
      for(var x = 0; x < array1.length; x++){
        array3.push(array1[x]);
        array3.push(array2[x]);
      }
    }//end if statement
    else if(array2.length > array1.length){
      for(var y = 0; y < array1.length; y++){
        array3.push(array2[y]);
        array3.push(array1[y]);
      }
    }//end else if statement
    for(var i = 0; i < array3.length; i++){
      if(array3[i] === undefined){
        array3.splice(i, 1);
      }
    }//end for statement

    console.log(array3)
    //else if(){}

    var final_array = array3.join("\n");
    // could also be array3.join("<br>")  if you are writing to an html file

      fs.writeFile("everyother.js", final_array, function(err){

      }) // end writeFile

    }); // end second readFile

})//end first readFile


// This program takes two arguments that are existing filenames with a list of words
// This program then pushes the words from each file into an array then creates
// another array and pushes every other word from each array into the new one.
// After that any undefied spots in the array are removed, then a new file is generated
// with a .writeFile.


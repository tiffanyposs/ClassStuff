    //this will take the button and will change the text to and toggle the class

    $(document).ready(function() {
        var counter = 0;
        $("#box").click(function(event) {
          counter++
          if (counter >= 2) {
            $(this).text("ok, stop it.");
          } 
          })
    //this will make the p tags clickable and disappear when they are clicked
  
      $("p").click(function(){
        $(this).hide();
      });
  
    //this makes the div id box disappear when double clicked
    $("#box_one").dblclick(function(){
      $(this).hide();
    });

    //do this action when you hover on box_two
    $("#box_two").mouseenter(function(){
      alert("You entered box two!");
    });

    //this action when the mouse leaves
    $("#box_three").mouseleave(function(){
      alert("Bye! You now leave box_three!");
    });

    $("#box_four").mousedown(function(){
        $(this).css("background-color", "red");
    });

    $("#box_five").mouseup(function(){
        $(this).css("background-color", "red");
    });

  });





    //changes the background color of an imput box on click, also the backgound
    //color of the surrounding div
    $(document).ready(function(){
      $("#input_one").focus(function(){
        $(this).css("background-color","#cccccc");
        $("#input_box").css("background-color", "violet")
      });

        $("#input_one").blur(function(){
        $("#input_box").css("background-color","red");
      });

    });


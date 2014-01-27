$(document).ready(function(){
   $("body").append("<div class='post'>I'm pretty rusty with jQuery right now.<br>" + 
                    "<input type='button' value='Delete' id='btnDelete'/></div>");  // end append
   $("#btnDelete").click(function(){
      $("body div:nth-child(5)").remove();
   });   
}); // end ready     
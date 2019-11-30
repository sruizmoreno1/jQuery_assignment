// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
    console.log("hello world!");

});

// question 6
   $(document).ready(function(){
  $("#episode-two-link").click(function(){
  $("#episode-two").show("slow")
      .css("background-color", "black")
      .css("color", "yellow");
//hide all other episodes 
 $("#spisode-one").hide("slowest")
 $("#eposode-three").fadeout("slow")
 $("#episode-four").hide("slow")
 $("#episode-five").hide("fastest")
 $("#episode-six").fadeout("slow")
 $("#episode-seven").fadeout("slow"); 
  });
      
  $(document).ready(function(){
  $("#episode-three-link").click(function(){
  $("#episode-three").show("slow")
      .css("background-color", "black")
      .css("color", "yellow");
//hide all other episodes 
 $("#spisode-one").hide("slowest")
 $("#eposode-two").fadeout("slow")
 $("#episode-four").hide("slow")
 $("#episode-five").hide("fastest")
 $("#episode-six").fadeout("slow")
 $("#episode-seven").fadeout("slow");  
  });
      
$(document).ready(function(){
  $("#episode-four-link").click(function(){
  $("#episode-four").show("slow")
      .css("background-color", "black")
      .css("color", "yellow");
//hide all other episodes 
 $("#spisode-one").hide("slowest")
 $("#eposode-two").fadeout("slow")
 $("#episode-three").hide("slow")
 $("#episode-five").hide("fastest")
 $("#episode-six").fadeout("slow")
 $("#episode-seven").fadeout("slow");   
  });
    
$(document).ready(function(){
  $("#episode-five-link").click(function(){
  $("#episode-five").show("fastest")
      .css("background-color", "black")
      .css("color", "yellow");
//hide all other episodes 
 $("#spisode-one").hide("slowest")
 $("#eposode-two").fadeout("slow")
 $("#episode-three").hide("slow")
 $("#episode-four").hide("slow")
 $("#episode-six").fadeout("slow")
 $("#episode-seven").fadeout("slow");  
  });
    
$(document).ready(function(){
  $("#episode-six-link").click(function(){
  $("#episode-six").show("slow")
      .css("background-color", "black")
      .css("color", "yellow");
//hide all other episodes 
 $("#spisode-one").hide("slowest")
 $("#eposode-two").fadeout("slow")
 $("#episode-three").hide("slow")
 $("#episode-four").hide("slow")
 $("#episode-five").fadeout("fastest")
 $("#episode-seven").fadeout("slow");  
  });
    
 $(document).ready(function(){
  $("#episode-seven-link").click(function(){
  $("#episode-seven").show("slow")
      .css("background-color", "black")
      .css("color", "yellow");
//hide all other episodes 
 $("#spisode-one").hide("slowest")
 $("#eposode-two").fadeout("slow")
 $("#episode-three").hide("slow")
 $("#episode-four").hide("slow")
 $("#episode-five").fadeout("fastest")
 $("#episode-six").fadeout("slow");  
        });
     
// question 8a
$("#espisode-one-link").click(function() {
    $(".movies").hide("fast");
    
    var target = $("#episode-one-link").attr("data-target");
    var target = "#" + target;
    $(target).fadeIn(3000)
        .css("background-color", "black")
        .css("color", "yellow");
});
     
//question 8b
$("#episode-two-link").click(function() {
    $(".movies").hide("fast");
    
    var target = $("episode-two-link").attr("data-target");
    var target = "#" + target;
    $(target).slideIn(3000)
        .css("background-color", "black")
        .css("color", "yellow");
});

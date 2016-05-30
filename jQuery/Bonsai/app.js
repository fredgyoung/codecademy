var main = function() {

  $("#image-url").keyup(function() {
    $("img").attr("src", $("#image-url").val());
  });
  
  $("#top-text").keyup(function() {
    $(".top-caption").text($("#top-text").val());
  });
  
  $("#bottom-text").keyup(function() {
    $(".bottom-caption").text($("#bottom-text").val());
  });
  
};
 
$(document).ready(main);

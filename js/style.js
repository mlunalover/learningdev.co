$(document).ready(function() {
  // $("#target1").css("color", "red");
  // $("#target1").prop("disabled", true);
  // $("#target4").remove();
  // $("#target2").appendTo("#right-well");
  // $("#target5").clone().appendTo("#left-well");
  $( "#learn-more" ).hide();

  $( "#learn-more" ).fadeIn( 2000, function() {

  });

  //Masonry Js


    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 160,
      "gutter": 8
    });

//Resources Toggle

$("#web-button").click(function(){
    $(".book").toggle();
});

$("#books-button").click(function(){
    $(".webcourse").toggle();
});



});

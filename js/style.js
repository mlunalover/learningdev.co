$(document).ready(function() {

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

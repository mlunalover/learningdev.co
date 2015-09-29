$(document).ready(function() {

  $( "#learn-more" ).hide();

  $( "#learn-more" ).fadeIn( 2000, function() {

  });


  //Masonry Js

    var masonryOptions = {
      itemSelector: '.grid-item',
      columnWidth: 160,
      "gutter": 6


      };

    var $grid = $('.grid').masonry( masonryOptions );
    var isActive = true;

    // var $grid = $('.grid').masonry({
    //   itemSelector: '.grid-item',
    //   columnWidth: 160,
    //   "gutter": 6
    //
    // });

    //$grid.marsonry('destory');
    //$grid.masonry({ itemSelector: '.grid-item'});


//Resources Toggle

$("#web-button").click(function(){


  //   if ( isActive ) {
  //   $grid.masonry('destroy');
  // } else {
  //   $grid.masonry( masonryOptions );
  // }
  //
  // isActive = !isActive;

  // $('.grid').masonry('reload');

  $(".book").toggle();
  $(".sites").toggle();



});

$("#books-button").click(function(){
    $(".webcourse").toggle();
    $(".sites").toggle();

});

$("#sites-button").click(function(){
    $(".webcourse").toggle();
    $(".book").toggle();
});


//Tools Toggle

$(".atom_packages").hide();

$(".slack_teams").hide();

$(".atom").click(function(){
    $(".atom_packages").toggle("600", function(){

    });
});

$(".slack").click(function(){
    $(".slack_teams").toggle("600", function(){

    });
});


});

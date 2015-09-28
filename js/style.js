$(document).ready(function() {

  $( "#learn-more" ).hide();

  $( "#learn-more" ).fadeIn( 2000, function() {

  });


  //Masonry Js


    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 160,
      "gutter": 6

      //$grid.marsonry('destory');
      //$grid.masonry({ itemSelector: '.grid-item'});
    });



//Resources Toggle

$("#web-button").click(function(){
    // $( ".grid-item" ).addClass( "book sites" );

    $(".book").toggle();
    $(".sites").toggle();
    // $grid.marsonry('destory');
    // $grid.masonry({ itemSelector: '.grid'});
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
    $(".atom_packages").toggle();
});

$(".slack").click(function(){
    $(".slack_teams").toggle();
});


});

$(document).ready(function() {

  $( "#learn-more" ).hide();

  $( "#learn-more" ).fadeIn( 2000, function() {

  });


  //Masonry Js

    // var masonryOptions = {
    //   itemSelector: '.grid-item',
    //   columnWidth: 160,
    //   "gutter": 6
    //
    //
    //   };
    //
    // var $grid = $('.grid').masonry( masonryOptions );
    // var isActive = true;


    var $container = $('.grid');

    $container.masonry({
      columnWidth: 160,
      itemSelector: '.grid-item',
      "gutter": 6
    });





    // var $grid = $('.grid').masonry({
    //   itemSelector: '.grid-item',
    //   columnWidth: 160,
    //   "gutter": 6
    //
    // });

    //$grid.marsonry('destory');
    //$grid.masonry({ itemSelector: '.grid-item'});


//Resources Toggle


// var grid = document.querySelector('.grid');
//  var msnry = new Masonry( container, {
//    columnWidth: 160
//  });
//
//  var togglerButton1 = document.querySelector('#web-button');
//  var areW2Hidden = true;
//  eventie.bind( togglerButton1, 'click', function() {
//    areW2Hidden = !areW2Hidden;
//    container.className = areW2Hidden ? 'hide-book' : '';
//    msnry.layout();
//  });



$("#web-button").click(function(){
  $container.masonry('destroy');
  $(".book, .sites, .webcourse").hide();
  $('.webcourse').fadeIn();
  $container.masonry({
    columnWidth: 160,
    itemSelector: '.grid-item',
    "gutter": 6
  });
});

$("#books-button").click(function(){
  $container.masonry('destroy');
  $(".book, .sites, .webcourse").hide();
  $('.book').fadeIn();
    $container.masonry({
      columnWidth: 160,
      itemSelector: '.grid-item',
      "gutter": 6
    });

});

$("#sites-button").click(function(){
  $container.masonry('destroy');
  $(".book, .sites, .webcourse").hide();
  $('.sites').fadeIn();
    $container.masonry({
      columnWidth: 160,
      itemSelector: '.grid-item',
      "gutter": 6
    });
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

$(document).ready(function(){


    $(window).load(function() {

var InfiniteRotator = {

init: function(){

var initialFadeIn = 2000;
var itemInterval = 4000;
var fadeTime = 4000;
var numberOfItems = $('.rotating-item').length;
var currentItem = 0;

$('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);

var infiniteLoop = setInterval(function(){
    console.log('pic')
    $('.rotating-item').eq(currentItem).fadeOut(fadeTime);

    if(currentItem === numberOfItems -1){
        currentItem = 0;
    }else{
        currentItem++;
          }
    $('.rotating-item').eq(currentItem).fadeIn(fadeTime);

     }, itemInterval);
   }
}
var InfiniteRotatorBox = {

init: function(){

var initialFadeInBox = 2000;
var itemIntervalBox = 1000;
var fadeTimeBox = 4000;
var numberOfItemsBox = $('.box-move').length;
var currentItemBox = 0;

  $('.box-move').eq(0).css('opacity', 0.2);

var infiniteLoop = setInterval(function(){
  console.log(currentItemBox);
    $('.box-move').eq(currentItemBox + 1).css('opacity', 0.2);
    $('.box-move').eq(currentItemBox).css('opacity', 1);
    if (currentItemBox === numberOfItemsBox -1){
        currentItemBox = 0;
        $('.box-move').eq(0).css('opacity', 0.2);
    }else{
        currentItemBox++;
          }

     }, itemIntervalBox);
   }
}
InfiniteRotatorBox.init();
InfiniteRotator.init();

});

  $(function fixHead() {
      var headerShow = $(".header");
      var showLogo = $('.logocontainer');
      var logos = $('.logo');
      $(window).scroll(function() {
          var scroll = $(window).scrollTop();

          if (scroll >= 3) {
              headerShow.removeClass("header").addClass("showing");
          } else {
              headerShow.removeClass("showing").addClass("header");
          };
          if (scroll >= 3) {
            showLogo.removeClass("logocontainer").addClass("logoshow");
          } else {
              showLogo.removeClass("logoshow").addClass("logocontainer");
          }
          if (scroll > 6){
            logos.fadeOut(1500);
          }
          else {
            logos.fadeIn(1500);
          }
        })
      });
    });

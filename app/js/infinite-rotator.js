$(document).ready(function(){


    $(window).load(function() {

var InfiniteRotator =
{
init: function()
{

var initialFadeIn = 1000;


var itemInterval = 5000;


var fadeTime = 2500;


var numberOfItems = $('.rotating-item').length;


var currentItem = 0;


$('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);


var infiniteLoop = setInterval(function(){
    $('.rotating-item').eq(currentItem).fadeOut(fadeTime);

    if(currentItem == numberOfItems -1){
        currentItem = 0;
    }else{
        currentItem++;
    }
    $('.rotating-item').eq(currentItem).fadeIn(fadeTime);

}, itemInterval);
}
};

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
      })
    });

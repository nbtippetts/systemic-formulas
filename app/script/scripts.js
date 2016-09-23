$(document).ready(function(){

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

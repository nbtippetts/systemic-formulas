$(document).ready(function(){

  $(function fixHead() {
      var headerShow = $(".header");
      $(window).scroll(function() {
          var scroll = $(window).scrollTop();

          if (scroll >= 3) {
              headerShow.removeClass("header").addClass("showing");
          } else {
              headerShow.removeClass("showing").addClass("header");
          };
          if (scroll <= 6) {
            $('logo').hide();
          }
        })
      });
  });

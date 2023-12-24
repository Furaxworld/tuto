(function($) {
  'use strict';

$(document).ready(function() {
  /*
  Top Scroller Function
  */
  $(".top-scroll").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('.top-scroll').fadeIn();
    } else {
      $('.top-scroll').fadeOut();
    }
  });
  $("a.top-scroll").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){
        window.location.hash = hash;
      });
    }
  });
});
}(jQuery));
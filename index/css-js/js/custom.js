(function($) {
  'use strict';

$(document).ready(function() {
  /*
  Top Scroller Function
  */
  $(".top-scroll").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
      $('.top-scroll').fadeIn();
    } else {
      $('.top-scroll').fadeOut();
    }
  });
$("a.top-scroll").on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 2000);
  });
});
}(jQuery));

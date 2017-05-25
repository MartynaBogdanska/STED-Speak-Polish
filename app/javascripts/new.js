// Highlight the top nav as scrolling occurs
$('body').scrollspy({ target: '#mainNavbar', offset: 85 });


(function($) {
    "use strict"; // Start of use strict

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
        if ($("#mainNavbar").offset().top > 100) {
            $("#mainNavbar").addClass("navbar-shrink");
        } else {
            $("#mainNavbar").removeClass("navbar-shrink");
        }
    });

// jQuery to smooth page scrolling
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

// Preloader
$(window).load(function() {
	$('#status').delay(300).fadeOut();
	$('#preloader').delay(300).fadeOut('slow');
	$('body').delay(550).css({'overflow':'visible'});
});

})(jQuery); // End of use strict

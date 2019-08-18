/*
 * navigation bar
*/

$(document).ready(function() {

  // navigation bars
  var primaryNavbar = $('#primary-navbar');
  var secondaryNavbar = $('#secondary-navbar');

  // if the user scrolls down the web page --> navbar changes
  $(window).scroll(function() {
    // changing thresholds/variables
    var change = primaryNavbar.offset().top;
    var changeNavbar = $(window).scrollTop();

    // swap navbar if different
    if (changeNavbar >= change) {
      primaryNavbar.addClass('invisible-navbar');
      secondaryNavbar.removeClass('invisible-navbar');
    } else {
      primaryNavbar.removeClass('invisible-navbar');
      secondaryNavbar.addClass('invisible-navbar');
    }

  });
})

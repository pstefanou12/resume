/*
 * navigation bar
*/

$(document).ready(function() {
  // navbar
  var navbar = $('.navbar');
  // navbar icons
  var icons = $('.navbar-icon');
  // navbar links
  var links = $('.navbar-link');
  // navbar labels
  var labels = $('.navbar-label');
  // navbar resume button
  var navResumeButton = $('#navbar-button');
  var resumeButton = $('#resume-button');

  // highlight navbar section when scroll over it
  $(window).scroll(function() {
      var position  = $(this).scrollTop();

      var current = true;
      $('.section').each(function() {
        var target = $(this).offset().top;
        var id = $(this).attr('id');
        var navLinks = $('.navbar-link');

        if(position >= target) {
          navLinks.removeClass('current');
          $('.navbar-link[href$=' + id + ']').addClass('current');
          current = false;
        }
      });

      if (current) { // if none of the sections are active, remove current class
        $('.navbar-link').removeClass('current');
      }
  });

  // if the user scrolls down the web page --> navbar changes
  $(window).scroll(function() {
    // changing thresholds/variables
    var change = $('#background-image').height();
    var changeNavbar = $(window).scrollTop();

    // swap navbar if different
    if (changeNavbar >= change) {
      navbar.removeClass('primary-navbar');
      navbar.addClass('secondary-navbar');

      icons.addClass('remove-icon');
      links.addClass('navbar-link');
    } else {
      navbar.removeClass('secondary-navbar');
      navbar.addClass('primary-navbar');

      icons.removeClass('remove-icon');
      links.removeClass('navbar-link');
    }
  });

  // resume button appears on navbar as user scrolls down page
  $(window).scroll(function() {
    var position  = $(this).scrollTop();
    var target = $(resumeButton).offset().top;

    if (position >= target) {
      navResumeButton.removeClass('invisible-button');
    } else {
      navResumeButton.addClass('invisible-button');
    }
  });

  // scroll to specific section of site when clicked
  $('.navbar-link').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top
    }, 1000);
});
})

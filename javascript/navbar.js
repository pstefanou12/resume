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
  // navbar icon logo
  var navbarLogo = $('#navbar-logo-link');

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
      navbarLogo.removeClass('invisible-button');

    } else {
      navbar.removeClass('secondary-navbar');
      navbar.addClass('primary-navbar');

      icons.removeClass('remove-icon');
      links.removeClass('navbar-link');

      navbarLogo.addClass('invisible-button');
    }
  });

  // resume button appears on navbar as user scrolls down page
  $(window).scroll(function() {
    var position  = $(this).scrollTop();
    var target = $(resumeButton).offset().top;

    if (position >= target && window.innerWidth > 1000) {
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

// mobile navbar logic
$(document).ready(function() {

  $(window).scroll(function() {
    var mobileNavbar = $('#mobile-navbar');

    // changing thresholds/variables
    var change = $('#background-image').height();
    var changeNavbar = $(window).scrollTop();

    // if scroll past background image
    if (changeNavbar >= change) {
      mobileNavbar.addClass('sticky');
    } else {
      mobileNavbar.removeClass('sticky');
    }
  });

  $('body').click(function(evt) {
     // navbar links
     var navbarLinks = $('#dropdown-content');
     var id = evt.target.id;
     var className = $(evt.target).attr('class');

     if ((id == 'hamburger-container' || className == 'hamburger') && $(navbarLinks).hasClass('invisible-links')) { // toggle if has links
       $(navbarLinks).removeClass('invisible-links');
       $(navbarLinks).addClass('dropdown-transition');
     } else if (!$(navbarLinks).hasClass('invisible-links')) {
        $(navbarLinks).addClass('invisible-links');
        $(navbarLinks).removeClass('dropdown-transition');
     }
  });
});

// what navbar to display
$(document).ready(function() {
  // whenever the window resizes, check navbar display
  window.onresize = switchNavbar;
  window.onload = switchNavbar;
  window.onscroll = switchNavbar; 

  // switch navbar when necessary
  function switchNavbar() {
    if (window.innerWidth > 1150) {
      console.log("CONDITION TRUE, WIDTH: ", window.innerWidth);
      $('.primary-navbar').removeClass('invisible-links');
      $('#mobile-navbar').addClass('invisible-links');
    } else {
      console.log("CONDITION FALSE, WIDTH: ", window.innerWidth);
      $('#mobile-navbar').removeClass('invisible-links');
      $('.primary-navbar').addClass('invisible-links');
    }
  }
})

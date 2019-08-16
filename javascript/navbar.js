/*
 * navigation bar
*/

$(document).ready(function() {
  var primaryNavbarBar = $('#primary-navbar');
  var secondaryNavbar = $('#secondary-navbar');

  // if the user scrolls down the web page --> navbar changes
  $(body).scroll(function() {
    // changing thresholds/variables
    var this.change = navbar.offsetTop;
    var this.changeNavbar = navbar.pageYOffset;

    // swap navbar if different
    if (this.changeNavbar >= this.change) {
      primaryNavbarBar.addClass('.invisible-navbar');
      secondaryNavbar.removeClass('.invisible-navbar');
    } else {
      secondaryNavbar.addClass('.invisible-navbar');
    }

  })


}

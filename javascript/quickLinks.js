/**
 *javascript logic for quick links section
*/

$(document).ready(function() {
  // scroll to specific section of site when clicked
  $('.quick-link-link').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top
    }, 1000);
  });
})

/*
 * resume button
*/

var ResumeButton = function() {
  this.id = 'resume';

  var that = Object.create(ResumeButton.prototype);

  that.button = function() {
      var button = document.createElement("button");
      $(button).id = id;

      // general resume button
      var resumeLink = document.createElement("a");
      $(resumeLink).attr('href', "../stefanouResume.pdf");
      $(resumeLink).attr('target', '_blank');

      $(button).append(resumeLink);
  };

  Object.freeze(that); // object now immutable
  return that;
}

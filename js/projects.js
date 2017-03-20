'use strict';

Project.prototype.toHTML = function () {
  var template = Handlebars.compile($('#template-output').text());
  return template(this);
};

Project.prototype.preview = function() {
  $('.project-view *').hide();
  $('.project-view h1').show();

  // $('.project-view h1').toggle(function() {
  //   $('this:parent:first-child').fadeIn('fast');
  // }, function() {
  //   $('this:parent:first-child').fadeOut('fast');
  // });
};

projects.forEach(function(a) {
  $('#project-display').append(a.toHTML());
  a.preview();
});

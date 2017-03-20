'use strict';

Project.prototype.toHTML = function () {
  var template = Handlebars.compile($('#template-output').text());
  return template(this);
};

Project.prototype.preview = function() {
  // $('.project-view *').addClass('hidden');
  // $('.project-view h1').removeClass('hidden');

  $('.project-view').on('click', function() {
    $('.project-view *').not('h1').hide();
    $(this).find('*').not('h1').show();
  });
  $('.project-view:first').click();
};

projects.forEach(function(a) {
  $('#project-display').append(a.toHTML());
  a.preview();
});

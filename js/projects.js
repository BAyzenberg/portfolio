'use strict';

Project.prototype.toHTML = function () {
  var template = Handlebars.compile($('#template-output').text());
  return template(this);
};

projects.forEach(function(a) {
  $('#project-display').append(a.toHTML());
});

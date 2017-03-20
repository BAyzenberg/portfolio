'use strict';

Project.prototype.toHTML = function () {
  var template = Handlebars.compile($('#template-output').text());

  return template(this);

  // var $newProject = $('div.template').clone();
  // $newProject.removeClass('template');
  //
  // $newProject.find('h1').text(this.name);
  // $newProject.find('p').text(this.description);
  // $newProject.find('a').text(this.link);
  // $newProject.find('a').attr('href', this.link);
  // return $newProject;
};

projects.forEach(function(a) {
  $('#project-display').append(a.toHTML());
});

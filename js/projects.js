'use strict';

// Project constructor function
function Project(name, description, url) {
  this.name = name;
  this.description = description;
  this.link = url;
}

var salmonCookie = new Project('Salmon Cookie', 'A simple project that taught us the uses of tables and forms.', 'https://bayzenberg.github.io/salmon_cookie/');

console.log(salmonCookie);

var textventure = new Project('Textventure', '201 project week choose your own adventure', 'https://carloscadena.github.io/textventure/');

var projects = [salmonCookie, textventure];

Project.prototype.toHTML = function () {
  var $newProject = $('div.template').clone();
  $newProject.removeClass('template');

  $newProject.find('h1').text(this.name);
  $newProject.find('p').text(this.description);
  $newProject.find('a').text(this.link);
  $newProject.find('a').attr('href', this.link);
  return $newProject;
};

projects.forEach(function(a) {
  $('#project-display').append(a.toHTML());
});

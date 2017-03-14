'use strict';

// Project constructor function
function Project(name, description, url) {
  this.name = name;
  this.description = description;
  this.link = url;
}

var salmonCookie = new Project('Salmon Cookie', 'A simple project that taught us the uses of tables and forms.', 'https://bayzenberg.github.io/salmon_cookie/');

console.log(salmonCookie);

var projects = [salmonCookie];

Project.prototype.show = function () {
  // Some way of output through JQuery.
  $(document).ready(function() {
    // $('.projects-list').
  });
};

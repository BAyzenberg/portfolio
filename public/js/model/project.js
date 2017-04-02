'use strict';
(function(module) {
  function Project (rawProject) {
    Object.keys(rawProject).forEach(key => this[key] = rawProject[key]);
  }

  Project.populateArray = function(projects, data) {
    projects = data.map(function(singleP) {
      return new Project(singleP);
    });
    return projects;
  };

  Project.prototype.toHTML = function() {
    var template = Handlebars.compile($('#template-output').text());
    return template(this);
  };

  module.Project = Project;
}(window));

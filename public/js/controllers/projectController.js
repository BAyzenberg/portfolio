'use strict';

(function(module) {
  let projectController = {};

  projectController.getData = function(projects) {
    $.get('/github/user/repos?type=owner')
    .then(function(raw) {
      console.log(raw);
      localStorage.projects = raw;
    }).then(function() {
      let data = JSON.parse(localStorage.projects);
      projectView.display(projects, data);
    }).fail(function() {
      //ajax has an Error
      console.error('Data access was obstructed.');
    });
  };

  projectController.init = function() {
    projectView.handleProjects();
    $('.main-content').hide();
    $('#projects').fadeIn();
  };

  module.projectController = projectController;
}(window));

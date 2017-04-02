'use strict';

(function(module) {
  let projectController = {};

  projectController.getData = function(projects) {
    $.ajax({
      url: 'data/projectList.json',
      type: 'GET',
      ifModified: true,
      success: function(data) {
        if (data) {
          localStorage.projects = JSON.stringify(data);
        }
      },
      complete: function() {
        var raw = JSON.parse(localStorage.projects);
        projectView.display(projects, raw);
      }
    }).fail(function() {
      //ajax has an Error
      console.error('Data access was obstructed.');
    });
  };

  module.projectController = projectController;
}(window));

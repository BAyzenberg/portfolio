'use strict';
// Wrap in IIFE
(function(module) {
  //Project Constructor
  function Project (rawProject) {
    Object.keys(rawProject).forEach(key => this[key] = rawProject[key]);
  };
  // Change above to use .map()

  Project.prototype.toHTML = function() {
    var template = Handlebars.compile($('#template-output').text());
    return template(this);
  };

  Project.showProjects = function(projects) {
    projects.forEach(function(a) {
      $('#project-display').append(a.toHTML());
    });
  };

  //accordion preview
  Project.preview = function() {
    $('.project-view').on('click', function() {
      $('.project-view *').not('h1').fadeOut('fast');
      $(this).find('*').not('h1').fadeIn('slow');
    });
    $('.project-view:first').click();
  };

  // Change below to use .map()
  // Project.populateArray = function(projects, data) {
  //   data.forEach(function(singleP) {
  //     projects.push(new Project(singleP));
  //   });
  // };

  Project.populateArray = function(projects, data) {
    projects = data.map(function(singleP) {
      return new Project(singleP);
    });
    return projects;
  };

  //layout projects and display them
  Project.display = function(projects, data) {
    let populatedProjects = Project.populateArray(projects, data);
    Project.showProjects(populatedProjects);
    Project.preview();
  };

  //Obtain data from the .json and display
  Project.getData = function(projects) {
    $.ajax({
      url: 'data/projectList.json',
      type: 'GET',
      ifModified: true,
      success: function(data) {
        if (data) {
          localStorage.projects = JSON.stringify(data);
        };
      },
      complete: function(data) {
        var raw = JSON.parse(localStorage.projects);
        Project.display(projects, raw);
      }
    }).fail(function() {
      //ajax has an Error
      console.error('Data access was obstructed.');
    });
  };

  module.Project = Project;
}(window));

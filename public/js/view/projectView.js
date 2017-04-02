'use strict';

(function(module) {
  let projectView = {};

  projectView.showProjects = function(projects) {
    projects.forEach(function(a) {
      $('#project-display').append(a.toHTML());
    });
  };

  //accordion preview
  projectView.preview = function() {
    $('.project-view').on('click', function() {
      $('.project-view *').not('h1').fadeOut('fast');
      $(this).find('*').not('h1').fadeIn('slow');
    });
    $('.project-view:first').click();
  };

  projectView.display = function(projects, data) {
    let populatedProjects = Project.populateArray(projects, data);
    projectView.showProjects(populatedProjects);
    projectView.preview();
  };

    module.projectView = projectView;
}(window));

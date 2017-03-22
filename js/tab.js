'use strict';

var tabView = {};
var projects;

tabView.handleNav = function() {
  $('.nav-bar').on('click', '.tab', function() {
    $('.main-content').hide();
    $('section[data-tab = "' + $(this).data('content') + '"]').fadeIn();
  });

  $('.nav-bar .tab:first').click();
};

tabView.handleProjects = function() {
  $('.tab[data-content = "projects"]').on('click', function () {
    console.log('handleProjects is being called');
    projects = [];
    console.log('initial');
    console.log(projects);
    if (localStorage.projects) {
      var data = JSON.parse(localStorage.projects);
      var temp = [];
      var testProjects = Project.populateArray(temp, data);
      if (testProjects === projects) {
        console.log('temp is equal to projects');
        // Project.display(projects, data);
      } else {
        console.log('data is not equal to projects');
        $('#project-display').empty();
        Project.getData();
      }
    } else {
      Project.getData();
    }
    console.log('final');
    console.log(projects);
  });
};

tabView.handleNav();
tabView.handleProjects();

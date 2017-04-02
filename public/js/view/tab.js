'use strict';
// Wrap in IIFE
(function(module) {
  var tabView = {};

  tabView.handleNav = function() {
    $('.nav-bar').on('click', '.tab', function() {
      $('.main-content').hide();
      $('section[data-tab = "' + $(this).data('content') + '"]').fadeIn();
    });

    $('.nav-bar .tab:first').click();
  };

  tabView.handleProjects = function() {
    $('.tab[data-content = "projects"]').on('click', function () {
      let projects = [];
      $('#project-display').empty();
      projectController.getData(projects);
    });
  };
  module.tabView = tabView;
}(window));

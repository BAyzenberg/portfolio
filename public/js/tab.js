'use strict';
// Wrap in IIFE

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
    projects = [];
    $('#project-display').empty();
    Project.getData();
  });
};

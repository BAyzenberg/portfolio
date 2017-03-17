'use strict';

var tabView = {};

tabView.handleNav = function() {
  $('.nav-bar').on('click', '.tab', function() {
    $('.main-content').hide();
    $('section[data-tab = "' + $(this).data('content') + '"]').fadeIn();
  });
  console.log('a tab was clicked');

  $('.nav-bar .tab:first').click();
};

// $(document).ready(function() {
tabView.handleNav();

// });

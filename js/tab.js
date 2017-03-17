'use strict';

var tabView = {};

tabView.handleNav = function() {
  $('.nav-bar').on('click', '.tab', function() {
    $('.main-content').hide();
    $('section[data-tab = "' + $(this).data('content') + '"]').fadeIn();
  });

  $('.nav-bar .tab:first').click();
};

// $(document).ready(function() {
tabView.handleNav();

// });

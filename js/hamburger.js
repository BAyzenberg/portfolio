'use strict';

$('.nav-bar').hide();

$('.menu-icon').on('click', function() {
  $('.nav-bar').toggle(function() {
    // $('.nav-bar').fadeOut('fast');
    $('.nav-bar').removeClass('.hidden');
  }, function() {
    // $('.nav-bar').fadeIn('slow');
    $('.nav-bar').addClass('.hidden');
  });
});

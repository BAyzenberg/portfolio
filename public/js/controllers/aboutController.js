'use strict';

(function(module) {
  const aboutController = {};
  aboutController.init = function() {
    $('.main-content').hide();
    $('#about').fadeIn();
  }

  module.aboutController = aboutController;
})(window);

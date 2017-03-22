'use strict';

var projects = [];

//Project Constructor
function Project (rawProject) {
  for(var key in rawProject) {
    this[key] = rawProject[key];
  };
};

Project.prototype.toHTML = function() {
  var template = Handlebars.compile($('#template-output').text());
  return template(this);
};

Project.showProjects = function() {
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

//Obtain data from the .json
Project.getData = function() {
  $.getJSON('data/projectList.json')
  .then(function(data) {
    data.forEach(function(singleP) {
      projects.push(new Project(singleP));
    });
    Project.showProjects();
    Project.preview();
  }).fail(function() {
    //getJSON failure
    console.error('Data was not obtained');
  });
};

Project.getData();

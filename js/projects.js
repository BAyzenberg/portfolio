'use strict';

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

Project.populateArray = function(data) {
  data.forEach(function(singleP) {
    projects.push(new Project(singleP));
  });
};

//layout projects and display them
Project.display = function(data) {
  Project.populateArray(data);
  Project.showProjects();
  Project.preview();
};

//Obtain data from the .json and display
Project.getData = function() {
  // $.getJSON('data/projectList.json')
  // .then(function(data) {
  //   localStorage.projects = JSON.stringify(data);
  //   Project.display(data);
  $.ajax({
    url: 'data/projectList.json',
    type: 'GET',
    ifModified: true,
    success: function(data) {
      if (data !== undefined) {
        console.log('saving new data;');
        localStorage.projects = JSON.stringify(data);
      };
    },
    complete: function(data) {
      var raw = JSON.parse(localStorage.projects);
      Project.display(raw);
    }
  }).fail(function() {
    //JSON is not updated
    console.error('Data was not obtained');
  });
};

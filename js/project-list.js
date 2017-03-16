'use strict';

// Project constructor function
function Project(name, description, url) {
  this.name = name;
  this.description = description;
  this.link = url;
}

var salmonCookie = new Project('Salmon Cookie', 'A simple project that taught us the uses of tables and forms.', 'https://bayzenberg.github.io/salmon_cookie/');

console.log(salmonCookie);

var textventure = new Project('Textventure', '201 project week choose your own adventure', 'https://carloscadena.github.io/textventure/');

var busmall = new Project('Busmall', 'basic use of event handlers.', 'https://bayzenberg.github.io/bus_mall/');

var projects = [salmonCookie, textventure, busmall];

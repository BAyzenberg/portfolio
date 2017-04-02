'use strict';
// Load Express
const express = require('express');
const requestProxy = ('express-request-proxy');

// Instantiate Express so that we can use its functionality
const app = express();

// Designate a port
const PORT = process.env.PORT || 2000;

// Define which directory we will serve static files from
app.use(express.static('./public'));

// Routes not necissary at the moment?
app.use(function(request, response, next) {
  console.log('404');
  response.status(404).sendFile('404.html', {root: './public'});
});

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  }))(request, response);
}

app.get('/github/*', proxyGitHub);

// Log the PORT being run on
app.listen(PORT, function() {
  //No console log provides no response to the server being functional
  console.log(`your app is being served on localhost:${PORT}`);
});

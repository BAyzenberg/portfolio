'use strict';
// Load Express
const express = require('express');

// Instantiate Express so that we can use its functionality
const app = express();

// Designate a port
const PORT = process.env.PORT || 2000;

// Define which directory we will serve static files from
app.use(express.static('./public'));

// Routes?  not necissary at the moment

app.listen(PORT, function() {
  console.log(`your app is being served on localhost:${PORT}`);
});

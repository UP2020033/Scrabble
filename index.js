// Importing express module
const express = require('express');

// Creating the express.js server
const app = express();

// Enable serving for static pages
app.use(express.static('client'));

const portListenOn = 80;

// Listen on port
function serverStart(portListenOn, error) {
  app.listen(portListenOn);
  if (!error) {
    console.log('Server accessible on port:' + ' ' + portListenOn);
  }
}

// Starting server
serverStart(portListenOn);

// Boakes, R. (2021). portsoc/staged-simple-message-board. GitHub. Retrieved 8 April 2021, from https://github.com/portsoc/staged-simple-message-board.

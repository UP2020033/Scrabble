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

/*
const portListen = 80;

const express = require('express');

const app = express();

app.use(express.static('client'));

// when status is 404, error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  if (err.status === 404) {
    res.send('<h1 style="text-align: center;">404: File not found</h1>');
  }

  // when status is 500, error handler
  if (err.status === 500) {
    return res.send({ message: 'error occur' });
  }
});

const server = app.listen(portListen, err => {
  if (!err) {
    console.log('Server Starting');
    console.log('Server running on port:', portListen);
  }
});
*/

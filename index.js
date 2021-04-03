const port = 80;

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

const server = app.listen(port, err => {
  if (!err) {
    console.log('Server Starting');
    console.log('Server running on port:', port);
  }
});

const express = require('express');

const app = express();
const port = 8080;

app.get('*', (req, res) => {
  res.send(process.env.WORKER_URL);
});


app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});

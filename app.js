var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send(
    `<html>
      <head>
        <title>hello</title>
      </head>
      <body>
        <h1>hello</h1>
        <p>world</p>
      </body>
    </html>`
  )
});

var server = app.listen(3000);
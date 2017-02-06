var express = require('express')

var app = express()
var port = process.env.PORT || 8080;


app.get('/', function (req, res) {
  res.end();
})

app.listen(port, function () {
  console.log('App listening on port '+port)
})

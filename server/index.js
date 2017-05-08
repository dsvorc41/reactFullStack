var express = require('express');
var path = require('path')
var app = express();

app.use(express.static( __dirname + '/../build' ));
app.use(express.static( __dirname + '/../build/css' ));
app.use(express.static( __dirname + '/../build/js' ));
app.use(express.static( __dirname + '/../build/media' ));

app.get( '/', function( req, res ) {
  res.sendFile( path.join( __dirname, 'build', 'index.html' ));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
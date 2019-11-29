'use strict';

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();

app.use(cors());
app.use(bodyParser.json());

var usersRoutes = require('./api/user/user-routes');
var blogsRoutes = require('./api/blog/blogs-routes');
app.use(usersRoutes);
app.use(blogsRoutes);

// in production it will take the built folder which is a dist and it will serve it a static content
app.use(express.static(__dirname + '/../dist'));

var port = process.env.port || 3000;

/*
app.get('/', function(req, res) {
  if(process.env.NODE_ENV !== 'production'){
    return res.send('Running server in development mode');
  }else{
    return res.sendFile('index.html', {root: __dirname + '/../dist'});
  }
});
*/
app.listen(port, function () {
  return console.log('Bloggeri app listening on port ' + port + '!');
});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//const multer = require('multer');
const path = require('path');

/*
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var createError = require('http-errors');
*/



const app = express();
//process.env.NODE_ENV = 'production';
app.get('/', function(req, res) {
  if(process.env.NODE_ENV !== 'production'){
    return res.send('Running server in development mode');
  }else{
    return res.sendFile('index.html', {root: __dirname + '/../dist'});
  }
});


app.use(express.static(path.join(__dirname, 'public')));

//app.use(cookieParser);
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(bodyParser.json());


import {connectToDB} from './api/db';
connectToDB();

//const registerRoutes= require('./api/register-routes');
//const authRoutes= require('./api/auth-routes');
//const userRoutes= require('./api/user-routes');
//const blogsRoutes= require('./api/blogs-routes');



import registerRoutes from './api/register-routes';
import authRoutes from './api/auth-routes';
import blogsRoutes from './api/blogs-routes';
//import userRoutes from './api/user-routes';

app.use(blogsRoutes);
app.use(registerRoutes);
//app.use(userRoutes);
app.use(authRoutes);



// in production it will take the built folder which is a dist and it will serve it a static content
//app.use(express.static(__dirname + '/../dist'));

const port = process.env.port || 3000;
//  "sharp": "^0.23.3",

app.listen(port, () => console.log(`Blogshare app listening on port ${port} in ${process.env.NODE_ENV} mode!`));
const express = require('express');
const router = express.Router();


const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');

const multer = require('multer');
//const upload = multer({dest: './public/images'});
var moment = require('moment');

const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

router.use(methodOverride('_method'));

const url = 'mongodb://localhost:27017/bloggeri';
const options = { native_parser: true,useUnifiedTopology: true, useNewUrlParser: true };
mongoose.connect(url,options);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
//const db = require('monk')(url, options );
//const conn = mongoose.createConnection(url,options);

let gfs;
db.once('open',  () => {
  // init stream
   gfs = Grid(db.db, mongoose.mongo);
   gfs.collection('uploads');

});
/*
conn.once('open',  () => {
  // init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');

});
*/

// define Schema
const BlogSchema = mongoose.Schema({
  title: String,
  body: String,
  category: String,
  date: String,
  author: String,
  imageFile: String
});

// compile schema to model
var Blog = mongoose.model('Blog', BlogSchema, 'blogs');

// Define categories Schema
const CategorySchema = mongoose.Schema({
  name: String
});
// compile schema to model
var Categories = mongoose.model('Categories', CategorySchema, 'categories');


// create storage engine
const storage = new GridFsStorage({
  url: url,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });

// Get all blogs
router.get('/api/blog', (req,res) =>{
  Blog.find(function(err, blogs){
    if(err) return console.log(err);
    return res.status(200).json({blogs: blogs})
  });
});

// Get all categories
router.get('/api/categories', (req,res) =>{
  Categories.find(function(err, categories){
    if(err) return console.log(err);
    return res.status(200).json({categories: categories})
  });
});


router.post('/api/blog',upload.single('imageFile'), (req,res) =>{
 // res.json({file: req.file});
 // res.redirect('http://localhost:8080/');
  console.log('req.file####');
  console.log(req.file);
  console.log('req.body####');
  console.log(req.body);


  // a document istance
  let blog1 = new Blog({
    title: req.body.title,
    body : req.body.body,
    category : req.body.category,
    date : moment(new Date()).format('LLLL'),
    author : req.body.author,
    imageFile: req.file.filename
  });

  blog1.save(function(err,blog){
    if(err) return console.log(err);
    console.log(blog.title + " saved to blogs collection");
  });
  res.send(blog1);



});
// route to /api/files
router.get('/api/files', (req,res) =>{
  gfs.files.find().toArray((err, files) =>{
    // ckeck if files
    if(!files || files.length === 0){
      return res.status(404).json({
        err:'no files exist'
      });
    }
    // Files exist
    return res.json(files);
  });

});

// route to /api/files/:filename
router.get('/api/files/:filename', (req,res) =>{
  gfs.files.findOne({filename: req.params.filename}, (err, file) =>{
    // ckeck if file
    if(!file || file.length === 0){
      return res.status(404).json({
        err:'no file exist'
      });
    }
    // file exists
    return res.json(file);
  });
});

// route to /api/image/
router.get('/api/image/:filename', (req,res) =>{
  gfs.files.findOne({filename: req.params.filename}, (err, file) =>{
    // ckeck if file
    if(!file || file.length === 0){
      return res.status(404).json({
        err:'no file exist'
      });
    }
    // check if image
    if(file.contentType === 'image/jpeg' || file.contentType === 'image/png'){
      // read putput to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);

    }else{
      res.status(404).json({
        err: 'Not an image'
      });
    }
  });
});

/*
router.get('/api/blog/:id', function(req,res) {
  // get a blog by id
  return res.status(200).json();
});
router.put('/api/blog', function(req, res) {
  // update a blog
  return res.status(204).json();
});
router.delete('/api/blog', function(req, res) {
  // delete a blog
  return res.status(204).json();
});

*/


/*
router.use(function(err, req, res, next) {
  if(err.code === "LIMIT_FILE_TYPES"){
    res.status(422).json({error: "Only images are allowed"});
    return;
  }
  if(err.code === "LIMIT_FILE_SIZE"){
    res.status(422).json({error: `Too large file. Max size is ${MAX_SIZE / 1000} KB`});
    return;
  }

});
*/

module.exports= router;

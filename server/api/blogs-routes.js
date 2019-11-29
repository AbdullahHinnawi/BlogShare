const express = require('express');
const router = express.Router();



const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');

const multer = require('multer');
//const upload = multer({dest: './public/images'});

const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

router.use(methodOverride('_method'));

const url = 'mongodb://localhost:27017/blogi';
const options = { native_parser: true,useUnifiedTopology: true, useNewUrlParser: true };
const db = require('monk')(url, options );
const conn = mongoose.createConnection(url,options);

let gfs;
conn.once('open',  () => {
  // init stream
   gfs = Grid(conn.db, mongoose.mongo);
   gfs.collection('uploads');

});

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

router.get('/api/blog', (req,res) =>{

  gfs.files.find().toArray((err, files) =>{
    // ckeck if files
    if(!files || files.length === 0){
      return res.status(404).json({
        err:'no files exist'
      });
    }else{
      // Files exist
      return res.json(files);
    }

  });

  /*
  var blogs = db.get('blogs');
  blogs.find({}, function(error, blogs){
    if(error){
      return res.status(500).json()
    }else{
      return res.status(200).json({blogs: blogs})
      // return res.status(200).json(blogs);
    }
  });
*/

});



router.post('/api/blog',upload.single('imageFile'), (req,res) =>{
 // res.json({file: req.file});
 // res.redirect('http://localhost:8080/');
  console.log(req.file);
  console.log(req.body);

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
router.post('/api/blog', upload.single('imageFile'), function(req,res,next) {
  //res.setHeader('Content-Type', 'application/json');

  console.log('req.body: ########');
  console.log(req.body);
 // res.send(req.body);

  console.log('req.file#######');
  console.log(req.file);
  res.send(req.file.filename);






      // get form values
      let title = req.body.title;
      let body = req.body.body;
      let category = req.body.category;
      let date = new Date();
      let author = req.body.author;
      let image = null;


      // check image upload
       if(req.file){
         image = req.file.filename;
         console.log('file name === image: """"""""""""""');

         console.log(image);

       }else{
           image = 'noimage.jpg';
       }


      let blogs = db.get('blogs');
      blogs.insert({
        "title":title,
        "body": body,
        "category": category,
        "date": date,
        "author": author,
        "image": image,
      }, function(err){
        if(err){
          res.send(err);
        }else{


         // req.flash('success', 'Blog Created!');
         // req.location('/');

         // res.end(JSON.stringify(req.body, null, 2));

        }
      });


});
*/






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

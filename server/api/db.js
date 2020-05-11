const mongoose = require('mongoose');


export  function connectToDB(){
  //const url = 'mongodb://localhost:27017/bloggeri';
 // const url = 'mongodb+srv://abdullah:abdullah001@notescluster-6avck.mongodb.net/blogshare?retryWrites=true&w=majority';
  const url   = "mongodb+srv://abdullah:abdullah001@notescluster-6avck.mongodb.net/blogshare?retryWrites=true&w=majority";
  const options = { native_parser: true,useUnifiedTopology: true, useNewUrlParser: true };

      mongoose.connect(url, options, error => {
        if(error){
          console.log('Unable to connect to database');
          throw error;
        } else{
          console.log('connected to MongoDB!');
        }
      });
  }

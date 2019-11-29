const mongoose = require('mongoose');


class DataBase{

  static connectToDB(){
      const url = 'mongodb://localhost:27017/blogi';
      const options = {useNewUrlParser: true};
      mongoose.connect(url, options).then(console.log('Connected to Mongodb!')).catch(error =>
          console.log('Unable to connect to Mongodb: error: ' + error));
  }


}
export default DataBase;
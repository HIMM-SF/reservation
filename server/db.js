// Mongoose connection
const mongoose = require('mongoose');

const db = 'mongodb://localhost:27017/roomList';

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
  .then(() => console.log('connected to ' + db + ' ...'))
  .catch(() => console.log(`Unable to connect to ${db}...`));

module.exports = mongoose;
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bored', {},
() => {
  console.log('Connected to the Database.')
});

module.exports = mongoose.connection;

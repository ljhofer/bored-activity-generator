const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bored', {},
() => {
  console.log('Connected to the Database.')
});

module.exports = mongoose.connection;

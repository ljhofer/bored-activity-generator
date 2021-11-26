const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bored', {
  useNewUrlParser: true,
});

module.exports = mongoose.connection;

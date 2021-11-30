const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mirana85:hX79IQ9yYlxGpZ3S@sophk.nes68.mongodb.net/bored5?retryWrites=true&w=majority', {},
() => {
  console.log('Connected to the Database.')
});

module.exports = mongoose.connection;

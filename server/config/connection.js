const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://hoferdevmongo:ljhofer22!@cluster0.izzqs.mongodb.net/bored?retryWrites=true&w=majority', {},
() => {
  console.log('Connected to the Database.')
});

module.exports = mongoose.connection;

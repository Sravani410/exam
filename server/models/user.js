const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  photo: String,
  age: Number,
  gender: String
});

module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');

const loremSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  }
});

const Lorem = mongoose.model('Lorem', loremSchema);

module.exports = Lorem;

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, maxlenght: 255 },
  description: { type: String, maxlenght: 600 },
  image: { type: String, maxlenght: 255 },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course)

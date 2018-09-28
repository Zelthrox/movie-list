const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//movie details
const MovieSchema = new Schema({
  title : {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  release_date: {
    type: String,
    required: true
  },
  budget: {
    type: String,
    required: true
  },
  box_office: {
    type: String,
    required: true
  },
  image_url: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Movie = mongoose.model('movie', MovieSchema);


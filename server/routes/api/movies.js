const express = require('express');
const router = express.Router();

const Movie = require('../../models/Movie');

//get movies by title
router.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', "*");

  search = req.query.title;
  if (!search){
    Movie.find()
      .sort({ title: 1 })
      .then(movies => res.json(movies))
  } else {
    Movie.find({ 'title': { '$regex': search, '$options': 'i' } })
      .sort({ title: 1 })
      .then(movies => res.json(movies))
  }
});

//get movie by movie id
router.get('/:id', (req, res) => {
  res.header('Access-Control-Allow-Origin', "*");
  Movie.findById(req.params.id)
    .then(movies => res.json(movies))
});

//post movie
router.post('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', "*");
  const newMovie = new Movie({
    title: req.body.title,
    country: req.body.country,
    release_date: req.body.release_date,
    budget: req.body.budget,
    box_office: req.body.box_office,
    image_url: req.body.image_url
  });

  newMovie.save().then(movie => res.json(movie));
});

//delete movie by movie id
router.delete('/:id', (req, res) => {
  res.header('Access-Control-Allow-Origin', "*");
  Movie.findById(req.params.id)
    .then(movie => movie.remove().then(() => res.json({success: true})))
    .catch (err => res.status(404).json({ success: false }));
});

module.exports = router;

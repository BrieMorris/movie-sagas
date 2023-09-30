const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/details', (req, res) => {
  const query = `SELECT movies.*, genres.name as genre FROM movies
  JOIN movies_genres ON movies.id = movies_genres.movie_id
  JOIN genres ON movies_genres.genre_id = genres.id;`;
  pool.query(query)
   .then(result => {
    res.send(result.row);
   })
   .catch(err => {
    console.log('Error: Get all movie details', err);
    res.sendStatus(500)
   })
  
});

// router.post('/details', (req, res) => {
//   console.log(req.body);
//   const insertMovieDetails = ``
// pool.query (insertMovieDetails, [])
// .then(result => {
//   console.log('Movie Details');

//   // const created -- do we need this 
// })

// })



module.exports = router;
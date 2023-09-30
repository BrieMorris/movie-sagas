const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const query = `  "movies"."id" AS "movie_id",
  "movies"."title" AS "movie_title",
  "genres"."id" AS "genre_id",
  "genres"."name" AS "genre_name"
  FROM 
    "movies"
  JOIN 
    "movies_genres" ON "movies"."id" = "movies_genres"."movie_id"
  JOIN 
    "genres" ON "movies_genres"."genre_id" = "genres"."id"`;
pool.query(query)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((err) => {
    console.error('Error fetching movie details:', err);
    res.sendStatus(500);
  });
});



module.exports = router;
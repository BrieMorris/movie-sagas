import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function MovieDetails() {

  const dispatch = useDispatch();
  const movie = useSelector(store => store.movies);
  const genre = useSelector(store => store.genres);
  const history = useHistory();
  const thisID = useParams();
  console.log('thisID', thisID);

  const thisMovie = movie.find(
    (movie) => movie.id === Number(thisID.id)
  );
  console.log('genres' , genre);
 
  const genreNames = genre
    .filter(genre => genre.movie_id === Number(thisID.id))
    .map(genre => genre.genre_name);

  console.log('thisMovie', thisMovie);

  const backToMovieList = () => {
    history.push('/')
  }; 
useEffect(() => {
      dispatch({ type: 'FETCH_MOVIES' });
      dispatch({ type: 'FETCH_GENRES' });

  }, []);


  return (
      <main>
        <div>
          <h1>{thisMovie.title}</h1>
          <img src={thisMovie.poster} alt={thisMovie.title}/>
          <h4>{genreNames.join(',')}</h4>
        </div>
          <h2>{thisMovie.description}</h2>
          <h3></h3>
        <div>

        <button onClick={backToMovieList}>Back to Movie List</button>
        </div>
      </main>

  );
}

export default MovieDetails;
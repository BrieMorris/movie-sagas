import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function MovieDetails() {

  const dispatch = useDispatch();
  const movie = useSelector(store => store.movies);
  const history = useHistory();
  const thisID = useParams();
  console.log('thisID', thisID);

  const thisMovie = movie.find(
    (movie) => movie.id === Number(thisID.id)
  );
  console.log('thisMovie', thisMovie);

  const backToMovieList = (event) => {
    history.push('/')
  }; 

  useEffect(() => {
      dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  

  return (
      <main>
        <div>
          <h1>{thisMovie.title}</h1>
          <img src={thisMovie.poster} alt={thisMovie.title}/>
        </div>
          <h2>{thisMovie.description}</h2>
        <div>

        <button onClick={backToMovieList}>Back to Movie List</button>
        </div>
      </main>

  );
}

export default MovieDetails;
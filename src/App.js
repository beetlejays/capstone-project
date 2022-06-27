import './App.css';
import {useEffect, useState} from 'react';

import Header from './components/Header/Header';

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = 'https://api.themoviedb.org/3/movie/';

  const [moviesData, setMoviesData] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    setFetchError(null);
    fetch(`${url}popular?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(fetchData => {
        setMoviesData(fetchData.results);
      })
      .catch(error => {
        setFetchError(new Error('Sorry, the content could not be loaded'));
        console.error(error);
      });
  }, []);

  return (
    <div className="main-app">
      <Header />
      {fetchError ? <div>{fetchError.mesage}</div> : null}

      <div className="movie__container">
        {moviesData.map(movie => (
          <div className="movie__single" key={movie.id}>
            <div className="movie__average">
              <span className="movie__average__number">{movie.vote_average}</span>
            </div>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />

            <div>
              <h3 className="movie__title">{movie.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
